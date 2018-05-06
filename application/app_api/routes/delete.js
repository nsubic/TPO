var express = require('express');
var router = express.Router();

router.delete('/izpit/:sifra', function(req, res, next) {
     global.connection.query('DELETE FROM Izpit WHERE sifra = ?', [req.params.sifra],function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});




module.exports = router;