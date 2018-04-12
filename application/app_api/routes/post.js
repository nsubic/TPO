var express = require('express');
var router = express.Router();
var passport = require('passport');
//var ctrlAvtentikacija = require('../controllers/avtentikacija');
var jwt = require('jsonwebtoken');



router.post('/dodajKandidate', function(req, res, next) {
     global.connection.query('INSERT INTO Kandidat VALUES (?,?,?,?,?,?,?,?)',[req.body.ime,req.body.priimek,req.body.vrsta,req.body.mail,req.body.vpisna,req.body.geslo,0,req.body.upIme], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
    	//res.send(JSON.stringify({"status": 200, "error": null, "response": ""}));
});

router.post('/dodajOsebe', function(req, res, next) {
     global.connection.query('INSERT INTO Oseba VALUES (?,?,?)',[req.body.upIme,req.body.geslo,req.body.vloga], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
    	//res.send(JSON.stringify({"status": 200, "error": null, "response": ""}));
});

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

var generirajJwt = function(oseba) {
   var datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
    console.log("poslje1");
  return jwt.sign({
    _id: oseba._id,
    upIme: oseba.upIme,
    geslo: oseba.geslo,
    vloga: oseba.vloga,
    datumPoteka: parseInt(datumPoteka.getTime() / 1000, 10)
   }, 'toleNašeGeslo');
   
};

router.post('/prijava', function(zahteva, odgovor) {
	console.log("poslje2");
  if (!zahteva.body.upIme || !zahteva.body.geslo) {
     vrniJsonOdgovor(odgovor, 400, {
       "sporocilo": "Zahtevani so vsi podatki"
     });
   }
   var oseba = {
                  "upIme":zahteva.body.upIme,
                  "geslo":zahteva.body.geslo
                }
	console.log(oseba);
   passport.authenticate('local',function(napaka, podatki) {
     var zeton;
    console.log("poslje3")
     if (napaka) {
       vrniJsonOdgovor(odgovor, 404, napaka);
       return;
     }
     if (oseba) {
       zeton = generirajJwt(oseba);
       vrniJsonOdgovor(odgovor, 200, {
         "zeton": zeton
       });
     } else {
       vrniJsonOdgovor(odgovor, 401, podatki);
     }
  })(zahteva, odgovor);
});


module.exports = router;