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

router.get('/leto', function(req, res, next) {
     global.connection.query('SELECT * FROM Studijsko_leto', function (error, results, fields) {
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

router.get('/vpisaniPredmet/:sifra/:leto1/:leto2', function(req, res, next) {
    console.log(req.params.sifra)
     if (req.params && req.params.sifra && req.params.leto1) { 
         var leto=req.params.leto1+'/'+req.params.leto2
         console.log(leto)
     global.connection.query('SELECT * FROM Student INNER JOIN Vpis ON Student.vpisna_st = Vpis.vpisna_st INNER JOIN Letnik ON Vpis.letnikFK = Letnik.letnik INNER JOIN Predmetnik ON Letnik.letnik = Predmetnik.letnikFK INNER JOIN Vrsta_vpisa ON Vpis.vrsta_vpisaFK = Vrsta_vpisa.vrsta_vpisa WHERE Vpis.studijsko_letoFK = ? AND Predmetnik.sifra_predmetaFK = ? AND Vpis.je_potrjen = 1 ORDER BY Student.priimek, Student.ime DESC', [leto,req.params.sifra], function (error, results, fields) {
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





module.exports = router;





