var express = require('express');
var router = express.Router();

router.put('/spremeniGeslo', function(req, res, next) {
    console.log("aaa",req.body.upIme, req.body.geslo);
    //UPDATE `Oseba` SET `geslo` = '12345' WHERE `upIme` = 'ns2061@student.uni-lj.si'
    global.connection.query('UPDATE `Oseba` SET `geslo`=? where `upIme`=?', [req.body.geslo, req.body.upIme], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    	});
    	//res.send(JSON.stringify({"status": 200, "error": null, "response": ""}));
});





module.exports = router;