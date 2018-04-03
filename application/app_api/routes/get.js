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






module.exports = router;





