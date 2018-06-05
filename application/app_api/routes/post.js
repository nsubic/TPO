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

router.post('/dodajZeton', function(req, res, next) {
    global.connection.query("SET FOREIGN_KEY_CHECKS=0;", function (err, result, fields) {
        if (err) throw err;
    });
    	global.connection.query('INSERT INTO Zeton (Studijsko_letoFK, vrsta_vpisa, Nivo_studijaFK, Nacin_studijaFK, letnikFK,  izkoriscen, vpisna_stFK) VALUES (?, ?, ?, ?,?,?,?)', ["2018/2019","0000000001", "VT",1,1,0, req.body.vpisna_stFK], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
    	
});

router.post('/dodajStudenta', function(req, res, next) {
        global.connection.query("SET FOREIGN_KEY_CHECKS=0;", function (err, result, fields) {
        if (err) throw err;
        
    });
     global.connection.query('INSERT INTO Student (priimek,ime,vpisna_st,Oseba_upIme) VALUES (?,?,?,?)',[req.body.priimek,req.body.ime,req.body.vpisna_st,req.body.upIme], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
});

router.post('/dodajVpis1', function(req, res, next) {
        global.connection.query("SET FOREIGN_KEY_CHECKS=0;", function (err, result, fields) {
        if (err) throw err;
        
    });
     global.connection.query('INSERT INTO Vpis VALUES (?,?,?,?,?,?,?,?)',[0, 1, 0000000001, 1, 1, '2018/2019', req.body.vrsta, req.body.vpisna_st], function (error, results, fields) {
		if (error) throw error;
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
    var visoko_povprecje = req.body.visoko_povprecje;
    
    global.connection.query('INSERT INTO Zeton (Studijsko_letoFK, vrsta_vpisa, Nacin_studijaFK, Nivo_studijaFK, izkoriscen, vpisna_stFK, letnikFK, prosto_izbirni, visoko_povprecje) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [leto, vrsta_vpisa, nacin_studija, program, 0, vpisna_st, letnik, prosto_izbirni, visoko_povprecje], function(error, results, fields) {
       if(error) {
           throw error;
       }
       res.json({
          "status": 200,
          "error": null,
          "response": results,
       });
    });
});

router.post('/vpis', function(req, res, next) {
    
    if(!req.body.letnik) {
        throw new Error("letnik null");
    }
    
    if(!req.body.program) {
        throw new Error("program null");
    }
    
    if(!req.body.vrsta_vpisa) {
        throw new Error("vrsta vpisa null");
    }
    
    if(!req.body.solskoLeto) {
        throw new Error("solskoLeto null");
    }
    
    if(!req.body.vpisna_st) {
        throw new Error("vpisna_st null");
    }
    
    if(!req.body.zetonId) {
        throw new Error("zetonId null");
    }
    
    // UPDATE Student
    global.connection.query(`
    UPDATE Student
        SET
            datum_rojstva = ?,
            davcna = ?,
            Drzava_rojstva = ?,
            emso = ?,
            ime = ?,
            kraj_rojstva = ?,
            mail = ?,
            naslov_vrocanje = ?,
            Obcina_rojstva = ?,
            priimek = ?,
            spol = ?,
            stalni_drzava_koda = ?,
            stalni_naslov_hisnast = ?,
            stalni_naslov_ulica = ?,
            stalni_obcina_koda = ?,
            stalni_postna_stevilka = ?,
            tel_st = ?,
            zacasni_drzava_koda = ?,
            zacasni_naslov_hisnast = ?,
            zacasni_naslov_ulica = ?,
            zacasni_obcina_koda = ?,
            zacasni_postna_stevilka = ?
    WHERE vpisna_st = ?
    `, [
        req.body.datum_rojstva,
        req.body.davcna,
        req.body.Drzava_rojstva,
        req.body.emso,
        req.body.ime,
        req.body.kraj_rojstva,
        req.body.mail,
        req.body.naslov_vrocanje,
        req.body.Obcina_rojstva,
        req.body.priimek,
        req.body.spol,
        req.body.stalni_drzava_koda,
        req.body.stalni_naslov_hisnast,
        req.body.stalni_naslov_ulica,
        req.body.stalni_obcina_koda,
        req.body.stalni_postna_stevilka,
        req.body.tel_st,
        req.body.zacasni_drzava_koda,
        req.body.zacasni_naslov_hisnast,
        req.body.zacasni_naslov_ulica,
        req.body.zacasni_obcina_koda,
        req.body.zacasni_postna_stevilka,
        req.body.vpisna_st,
    ], function(err, results, fields) {
        
        if(err) {
            console.error(err);
        }
        
        console.info("vpis", results, fields);
        
        
    });
    
    // INSERT Vpis
    global.connection.query('SELECT * FROM Zeton WHERE id = ?', [req.body.zetonId], function(err, results, fields) {
        
        global.connection.query('INSERT INTO Vpis (je_potrjen, letnikFK, nacin_studijaFK, oblika_studijaFK, sifra_stProgramFK, studijsko_letoFK, vpisna_st, vrsta_vpisaFK) VALUES (0, ?, ?, ?, ?, ?, ?, ?)', [
            results[0].letnikFK,
            results[0].Nacin_studijaFK,
            1,
            results[0].Nivo_studijaFK,
            results[0].Studijsko_letoFK,
            results[0].vpisna_stFK,
            results[0].vrsta_vpisa
        ], function(err, result, fields) {
            if(err) {
                throw err;
            }
            
            var predmeti = req.body.predmeti;
            
            if(predmeti.length) {
                for(var i = 0; i < predmeti.length; ++i) {
                    var selfPredmet = predmeti[i];
                    
                    var letnik = results[0].letnikFK;
                    var predmet = selfPredmet.predmet;
                    var skupina = selfPredmet.skupina;
                    var program = results[0].Nivo_studijaFK;
                    var leto = results[0].Studijsko_letoFK;
                    var vpisnaSt = results[0].vpisna_stFK;
                    
                    global.connection.query(`INSERT INTO Izbrani_predmeti (Predmetnik_letnikFK, Predmetnik_sifra_predmetaFK, Predmetnik_sifra_predmetnikaFK, Vpis_sifra_stProgramFK, Vpis_studijsko_letoFK, Vpis_vpisna_st) VALUES (?, ?, ?, ?, ?, ?)`, [
                        letnik, predmet, skupina, program, leto, vpisnaSt,
                    ], function(err, results, fields) {
                        if(err) {
                            console.error(err);
                        } else {
                            console.info("v kartitečni list", letnik, predmet, skupina, program, leto, vpisnaSt);
                        }
                    })
                }    
            } else {
                console.log("ni predmetov");
            }
            
            
            // nadaljuje in označi žeton kot uporabljen
            // adijo
            global.connection.query('UPDATE Zeton SET izkoriscen = 1 WHERE id = ?', [req.body.zetonId], function(err, results, fields) {
                res.json({
                    "status": 200,
                    "error": null,
                    "response": null,
                })    
            });
        })
    })    
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