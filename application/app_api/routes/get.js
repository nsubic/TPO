var express = require('express');
var router = express.Router();
//vse imajo spredaj predpono /api/

router.get('/posta', function(req, res, next) {
     global.connection.query('SELECT * FROM Posta', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/drzava', function(req, res, next) {
     global.connection.query('SELECT * FROM Drzava', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/obcina', function(req, res, next) {
     global.connection.query('SELECT * FROM Obcina', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/predmet', function(req, res, next) {
     global.connection.query('SELECT * FROM Predmet', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/predmet2', function(req, res, next) {
     global.connection.query('SELECT * FROM Predmet INNER JOIN Nosilec_predmeta ON Nosilec_predmeta.sifra_predmetaFK = Predmet.sifra_predmeta GROUP BY sifra_predmeta', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/studijskiProgram', function(req, res, next) {
     global.connection.query('SELECT * FROM Studijski_program', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/letnik', function(req, res, next) {
     global.connection.query('SELECT * FROM Letnik', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/leto', function(req, res, next) {
     global.connection.query('SELECT * FROM Studijsko_leto', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/profesor', function(req, res, next) {
     global.connection.query('SELECT * FROM Profesor', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/profesor/:sifra', function(req, res, next) {
     global.connection.query('SELECT * FROM Profesor WHERE Profesor.sifra_profesorja = ?', [req.params.sifra], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/izpit', function(req, res, next) {
     global.connection.query('SELECT * FROM Izpit INNER JOIN Predmet ON Izpit.Predmet_sifra_predmeta = Predmet.sifra_predmeta', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


router.get('/vpis', function(req, res, next) {
     global.connection.query('SELECT * FROM Vpis', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/vpisStudent/:vpisna', function(req, res, next) {
	if (req.params && req.params.vpisna) { 
     global.connection.query('SELECT *,Nacin_studija.opis AS eins FROM Vpis INNER JOIN Nacin_studija ON Vpis.nacin_studijaFK = Nacin_studija.nacin_studija INNER JOIN Vrsta_vpisa ON Vpis.vrsta_vpisaFK = Vrsta_vpisa.vrsta_vpisa WHERE vpisna_st = ? ', [req.params.vpisna],function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
	} else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/student/:vpisna', function(req, res, next) {
     if (req.params && req.params.vpisna) { 
     global.connection.query('SELECT * FROM Student WHERE vpisna_st = ?', [req.params.vpisna], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/nosilecPri/:sifraProfesorja', function(req, res, next) {
     if (req.params.sifraProfesorja) { 
     global.connection.query('SELECT * FROM Nosilec_predmeta WHERE sifra_profesorjaFK1 = ?', [req.params.sifraProfesorja], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/imePredmeta/:sifraPredmeta', function(req, res, next) {
     if (req.params.sifraPredmeta) { 
     global.connection.query('SELECT * FROM Predmet WHERE sifra_predmeta = ?', [req.params.sifraPredmeta], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/studentUpIme/:upIme', function(req, res, next) {
     if (req.params.upIme) { 
     global.connection.query('SELECT * FROM Student WHERE Oseba_upIme = ?', [req.params.upIme], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/predmetiStudenta/:vpisnaSt', function(req, res, next) {
	console.log("tukaj", req.params.vpisnaSt)
     if (req.params.vpisnaSt) { 
     global.connection.query('SELECT * FROM Izbrani_predmeti WHERE Vpis_vpisna_st = ?', [req.params.vpisnaSt], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/student2/:upime', function(req, res, next) {
     if (req.params && req.params.upime) { 
     global.connection.query('SELECT *,Nacin_studija.opis AS eins FROM Student INNER JOIN Vpis ON Student.vpisna_st = Vpis.vpisna_st INNER JOIN Nacin_studija ON Vpis.nacin_studijaFK = Nacin_studija.nacin_studija INNER JOIN Vrsta_vpisa ON Vpis.vrsta_vpisaFK = Vrsta_vpisa.vrsta_vpisa INNER JOIN Studijski_program ON Vpis.sifra_stProgramFK = Studijski_program.sifra_stProgram WHERE Student.Oseba_upIme = ?', [req.params.upime], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});


router.get('/student3/:vpisna', function(req, res, next) {
     if (req.params && req.params.vpisna) { 
     global.connection.query('SELECT *,Nacin_studija.opis AS eins FROM Student INNER JOIN Vpis ON Student.vpisna_st = Vpis.vpisna_st INNER JOIN Nacin_studija ON Vpis.nacin_studijaFK = Nacin_studija.nacin_studija INNER JOIN Vrsta_vpisa ON Vpis.vrsta_vpisaFK = Vrsta_vpisa.vrsta_vpisa INNER JOIN Studijski_program ON Vpis.sifra_stProgramFK = Studijski_program.sifra_stProgram WHERE Student.vpisna_st = ?', [req.params.vpisna], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/studenti', function(req, res, next) {
     global.connection.query('SELECT * FROM Student ORDER BY Student.priimek, Student.ime DESC', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/vpisaniPredmet/:sifra/:leto1/:leto2', function(req, res, next) {
    console.log(req.params.sifra)
     if (req.params && req.params.sifra && req.params.leto1) { 
         var leto=req.params.leto1+'/'+req.params.leto2
         console.log(leto)
     global.connection.query('SELECT * FROM Izbrani_predmeti \
							INNER JOIN Vpis 	\
								ON Izbrani_predmeti.Vpis_studijsko_letoFK = Vpis.studijsko_letoFK \
								AND Izbrani_predmeti.Vpis_sifra_stProgramFK = Vpis.sifra_stProgramFK \
								AND Izbrani_predmeti.Vpis_vpisna_st = Vpis.vpisna_st \
							INNER JOIN Predmetnik \
								ON Izbrani_predmeti.Predmetnik_sifra_predmetaFK = Predmetnik.sifra_predmetaFK \
								AND Izbrani_predmeti.Predmetnik_sifra_predmetnikaFK = Predmetnik.sifra_predmetnikaFK \
								AND Izbrani_predmeti.Predmetnik_letnikFK = Predmetnik.letnikFK \
								AND Izbrani_predmeti.Vpis_sifra_stProgramFK = Predmetnik.sifra_stProgramFK \
								AND Izbrani_predmeti.Vpis_studijsko_letoFK = Predmetnik.studijsko_letoFK \
							INNER JOIN Predmet \
								ON Predmetnik.sifra_predmetaFK = Predmet.sifra_predmeta \
							INNER JOIN Vrsta_vpisa \
								ON Vpis.vrsta_vpisaFK = Vrsta_vpisa.vrsta_vpisa \
							INNER JOIN Studijski_program \
								ON Predmetnik.sifra_stProgramFK = Studijski_program.sifra_stProgram \
							INNER JOIN Student \
								ON Vpis.vpisna_st = Student.vpisna_st \
							WHERE Vpis.je_potrjen = 1 AND Vpis.studijsko_letoFK = ? AND  Predmetnik.studijsko_letoFK = ? AND Predmetnik.sifra_predmetaFK = ? \
							ORDER BY Student.priimek, Student.ime DESC', [leto,leto,req.params.sifra], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/predmetiProfesorja/:sifra/', function(req, res, next) {
    console.log(req.params.sifra)
     if (req.params && req.params.sifra) { 
     global.connection.query('SELECT * FROM `Predmet`Inner join Nosilec_predmeta ON Predmet.sifra_predmeta = Nosilec_predmeta.sifra_predmetaFK Inner join Predmetnik ON Predmet.sifra_predmeta = Predmetnik.sifra_predmetaFK Where Predmetnik.Nosilec_predmeta_sifra_opcije = Nosilec_predmeta.sifra_opcije AND Nosilec_predmeta.sifra_profesorjaFK1 = ? OR Nosilec_predmeta.sifra_profesorjaFK2 = ? OR Nosilec_predmeta.sifra_profesorjaFK3 = ?', [req.params.sifra,req.params.sifra,req.params.sifra], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
     } else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/osebe/', function(req, res, next) {
     global.connection.query('SELECT * FROM Oseba', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.get('/dobiOsebe/:upIme',function(req, res, next) {
	console.log(req.params.upIme)
	if (req.params && req.params.upIme) { 
     global.connection.query('SELECT * FROM Oseba WHERE upIme = ?', [req.params.upIme], function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
	} else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/stVpisanih', function(req, res, next) {
     global.connection.query('SELECT *, COUNT(Izbrani_predmeti.Vpis_vpisna_st) AS stVpisanih FROM Izbrani_predmeti \
							INNER JOIN Vpis 	\
								ON Izbrani_predmeti.Vpis_studijsko_letoFK = Vpis.studijsko_letoFK \
								AND Izbrani_predmeti.Vpis_sifra_stProgramFK = Vpis.sifra_stProgramFK \
								AND Izbrani_predmeti.Vpis_vpisna_st = Vpis.vpisna_st \
							INNER JOIN Predmetnik \
								ON Izbrani_predmeti.Predmetnik_sifra_predmetaFK = Predmetnik.sifra_predmetaFK \
								AND Izbrani_predmeti.Predmetnik_sifra_predmetnikaFK = Predmetnik.sifra_predmetnikaFK \
								AND Izbrani_predmeti.Predmetnik_letnikFK = Predmetnik.letnikFK \
								AND Izbrani_predmeti.Vpis_sifra_stProgramFK = Predmetnik.sifra_stProgramFK \
								AND Izbrani_predmeti.Vpis_studijsko_letoFK = Predmetnik.studijsko_letoFK \
							INNER JOIN Predmet \
								ON Predmetnik.sifra_predmetaFK = Predmet.sifra_predmeta \
							INNER JOIN Studijski_program \
								ON Predmetnik.sifra_stProgramFK = Studijski_program.sifra_stProgram \
							WHERE Vpis.je_potrjen = 1 \
							GROUP BY Izbrani_predmeti.Predmetnik_sifra_predmetaFK, Izbrani_predmeti.Vpis_studijsko_letoFK  \
							ORDER BY stVpisanih DESC', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


router.get('/izpiti/:sifraPredmeta', function(req, res, next) {
	console.log(req.params.sifraPredmeta)
	if (req.params.sifraPredmeta) { 
     global.connection.query('SELECT * FROM Izpit WHERE Predmet_sifra_predmeta = ?', [req.params.sifraPredmeta], function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
	} else {
        res.send(JSON.stringify({"status": 400 , "error": null, "response": null}));
    }
});

router.get('/nosilciInPredmeti/', function(req, res, next) {
     global.connection.query('SELECT * \
							FROM Predmetnik\
							INNER JOIN Nosilec_predmeta ON Predmetnik.Nosilec_predmeta_sifra_opcije = Nosilec_predmeta.sifra_opcije\
							AND Predmetnik.sifra_predmetaFK = Nosilec_predmeta.sifra_predmetaFK\
							INNER JOIN Predmet ON Nosilec_predmeta.sifra_predmetaFK = Predmet.sifra_predmeta\
							INNER JOIN Profesor ON Nosilec_predmeta.sifra_profesorjaFK1 = Profesor.sifra_profesorja\
							GROUP BY Predmetnik.studijsko_letoFK, Profesor.sifra_profesorja',function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});

});

router.get('/vrsteVpisa', function(req, res, next) {
	global.connection.query('SELECT * FROM Vrsta_vpisa', function(error, results, fields) {
		if(error) {
			throw error;		
		}
		console.log(results);
		res.json({"status": 200, "error": null, "response": results});
	});
})
router.get('/PrijavljeniNaIzpit/:sifraIzpita', function(req, res, next) {
     global.connection.query('SELECT * FROM Prijavljeni_na_izpit WHERE Izpit_šifra = ?', [req.params.sifraIzpita], function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	}); 
});

router.get('/podatkiIzpitovZaStudenta/:sifraStudenta', function(req, res, next) {
     global.connection.query('SELECT * FROM Prijavljeni_na_izpit INNER JOIN Izpit ON Izpit.sifra = Prijavljeni_na_izpit.Izpit_šifra WHERE Student_vpisna_st = ? ORDER BY Izpit.datum', [req.params.sifraStudenta], function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	}); 
});

router.get('/zetoni/:vpisnaSt', function(req, res, next) {
	
	var cb = function(error, results, fields) {
		
		if(error) {
			throw error;
		}
		
		res.json({
			status: 200,
			error: null,
			response: results,
		});
	}
	
	if(req.params.vpisnaSt) {
		global.connection.query('SELECT * FROM Zeton WHERE vpisna_stFK = ?', [req.params.vpisnaSt], cb);	
	} else {
		global.connection.query('SELECT * FROM Zeton', cb);
	}
	
})

module.exports = router;





