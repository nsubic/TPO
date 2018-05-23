var express = require('express');
var router = express.Router();

router.delete('/izpit/:sifra', function(req, res, next) {
    global.connection.query("SET FOREIGN_KEY_CHECKS=0;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
     global.connection.query('DELETE FROM Izpit WHERE sifra = ?', [req.params.sifra],function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
	global.connection.query("SET FOREIGN_KEY_CHECKS=1;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

router.delete('/prijavljeniIZ/:sifra', function(req, res, next) {
    console.log(req.params.sifra);
     global.connection.query('DELETE FROM Prijavljeni_na_izpit WHERE Izpit_šifra = ?', [req.params.sifra],function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


module.exports = router;