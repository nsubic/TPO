var express = require('express');
var router = express.Router();
var passport = require('passport');
//var ctrlAvtentikacija = require('../controllers/avtentikacija');
var jwt = require('jsonwebtoken');



router.post('/dodajKandidate', function(req, res, next) {
    global.connection.query("SET FOREIGN_KEY_CHECKS=0;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    global.connection.query('INSERT INTO Kandidat VALUES (?,?,?,?,?,?,?,?)',[req.body.ime,req.body.priimek,req.body.vrsta,req.body.mail,req.body.vpisna,req.body.geslo,0,req.body.upIme], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
    global.connection.query("SET FOREIGN_KEY_CHECKS=1;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
router.post('/dodajStudenta', function(req, res, next) {
     global.connection.query('INSERT INTO Student VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',["erzin",req.body.ime,req.body.emso,req.body.vpisna,req.body.stalnaPostnaSt,req.body.stalniPostniNaslov,req.body.stalnaPostnaDrzava, req.body.stalniNaslovUlica, req.body.stalniNaslovSt, req.body.davcna, req.body.mail, req.body.telSt, req.body.spol, req.body.datumRojstva, req.body.krajRojstva, req.body.zacasnaPostnaSt, req.body.zacasniPostniNaslov, req.body.zacasnaPostnaDrzava, req.body.zacasniNaslovUlica, req.body.zacasniNaslovSt, req.body.drzavaRojstva, req.body.obcinaRojstva, req.body.naslovVrocanja, req.body.upIme], function (error, results, fields) {
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

router.post('/dodajIzpit', function(req, res, next) {
     global.connection.query('INSERT INTO Izpit VALUES (?,?,?,?,?)',[req.body.sifra,req.body.rok,req.body.Predmet_sifra_predmeta, req.body.lokacija, req.body.datum ], function (error, results, fields) {
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