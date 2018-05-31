var express = require('express');
var router = express.Router();
var passport = require('passport');
//var ctrlAvtentikacija = require('../controllers/avtentikacija');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


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
		global.connection.query('INSERT INTO Zeton (vrsta_vpisa, Nacin_studijaFK, Nivo_studijaFK, izkoriscen, vpisna_stFK) VALUES (?, ?, ?, ?, ?)', ["0000000001", 1, 1, 0, req.body.vpisna], function (error, results, fields) {
		    console.log("Zeton vpisan");
		})
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
});
router.post('/dodajOsebe', function(req, res, next) {
     global.connection.query('INSERT INTO Oseba VALUES (?,?,?)',[req.body.upIme,req.body.geslo,req.body.vloga], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
});


router.post('/posljiMail', function(req, res, next) {
    var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
        user: 'aljaz.erzin@gmail.com',
        pass: 'puma7862*'
    }
}));

var data = req.body;
     var mailOptions = {
        from: 'aljaz.erzin@gmail.com',
        to: data.mail,
        subject: 'Brisanje izpita pri'+ data.imePredmeta,
        text: data.imeStudenta + ', zbrisali smo vam izpit '+ data.imePredmeta
    };
    transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
    
 
});
router.post('/dodajIzpit', function(req, res, next) {
    console.log(req.body.rok,req.body.Predmet_sifra_predmeta, req.body.datum, req.body.lokacija)
     global.connection.query('INSERT INTO Izpit( rok, Predmet_sifra_predmeta, datum, lokacija,ura,profesor_ime ) VALUES (?,?,?,?,?,?)',[req.body.rok,req.body.Predmet_sifra_predmeta, req.body.datum, req.body.lokacija,req.body.ura,req.body.profesor_ime], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
});

router.post('/prijavaNaIzpit', function(req, res, next) {
    global.connection.query("SET FOREIGN_KEY_CHECKS=0;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    console.log(req.body.Izpit_sifra,req.body.Student_vpisna_st)
    var sifraPrijave = Math.floor((Math.random() * 1000000) + 1);
     global.connection.query('INSERT INTO Prijavljeni_na_izpit(sifra_prijave, Izpit_šifra, Student_vpisna_st,odjava ) VALUES (?, ?,?,?)',[sifraPrijave, req.body.Izpit_sifra,req.body.Student_vpisna_st,0], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
    global.connection.query("SET FOREIGN_KEY_CHECKS=1;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

router.post('/zeton', function(req, res, next) {
    var vrsta_vpisa = req.body.vrsta_vpisa;
    var nacin_studija = req.body.nacin_studija;
    var program = req.body.program;
    var vpisna_st = req.body.vpisna_stFK;
    var letnik = req.body.letnik;
    var prosto_izbirni = req.body.prosto_izbirni;
    var leto = req.body.leto;
    
    global.connection.query('INSERT INTO Zeton (Studijsko_letoFK, vrsta_vpisa, Nacin_studijaFK, Nivo_studijaFK, izkoriscen, vpisna_stFK, letnikFK, prosto_izbirni) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [leto, vrsta_vpisa, nacin_studija, program, 0, vpisna_st, letnik, prosto_izbirni], function(error, results, fields) {
       if(error) {
           throw error;
       }
       res.json({
          "status": 200,
          "error": null,
          "response": results,
       });
    });
})

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