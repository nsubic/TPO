var express = require('express');
var router = express.Router();




router.post('/dodajKandidate', function(req, res, next) {
     //global.connection.query('INSERT INTO Kandidat VALUES (?,?,?,?,?,?,?,?)',[req.body.ime,req.body.priimek,req.body.vrsta,req.body.mail,req.body.vpisna,req.body.geslo,0,req.body.upIme], function (error, results, fields) {
	//	if (error) throw error;
	//	res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    //	});
    	res.send(JSON.stringify({"status": 200, "error": null, "response": ""}));
});


module.exports = router;