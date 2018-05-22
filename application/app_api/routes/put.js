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

router.put('/izpit/odjava', function(req, res, next) {
    console.log("izpita odjava", req.body.sifra, req.body.vpisna_st);
    
    if(!req.body.sifra) {
        throw new Error("manjka šifra izpita (sifra)");
    }
        
    if(!req.body.vpisna_st) {
        throw new Error("manjka vpisna številka (vpisna_st)");
    }

    global.connection.query('UPDATE Prijavljeni_na_izpit SET odjava = 1 WHERE Izpit_šifra = ? AND Student_vpisna_st = ?', [req.body.sifra, req.body.vpisna_st], function(error, results, fields) {
        if(error) throw error;
        res
            .status(204)
            .json({"status": 200, "error": null, "response": results});
    })
});
router.put('/dodajOceno1', function(req, res, next) {
    global.connection.query('UPDATE `Prijavljeni_na_izpit` SET `ocena`=?, `tocke_na_izpitu`=? WHERE  `Izpit_šifra`=? and `Student_vpisna_st`=?', [req.body.ocena, req.body.tocke_na_izpitu,  req.body.Izpit_šifra, req.body.Student_vpisna_st], function(error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    })
})
router.put('/dodajOceno', function(req, res, next) {
    console.log(req.body.cas_odjave);
    global.connection.query('UPDATE `Prijavljeni_na_izpit` SET `ocena`=?, `tocke_na_izpitu`=?,  `odjava`=?, `cas_odjave`=?, `odjavitelj`=? WHERE  `Izpit_šifra`=? and `Student_vpisna_st`=?', [req.body.ocena, req.body.tocke_na_izpitu, req.body.odjava, req.body.cas_odjave, req.body.odjavitelj, req.body.Izpit_šifra, req.body.Student_vpisna_st], function(error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    })
})

router.put('/zeton', function(req, res, next) {
    
    console.log("input", req.body);
    
    if(!req.body.vpisna_stFK) {
        res
            .status(400)
            .send(JSON.stringify({
                status: 400,
                error: "manjka vpisna številka (vpisna_stFK)",
                response: null,
            }));
        return;
    }
    
    if(!req.body.vrsta_vpisa) {
        res
            .status(400)
            .send(JSON.stringify({
                status: 400,
                error: "manjka vrsta vpisa (vrsta_vpisa)",
                response: null,
            }));
        return;
    }
    
    console.log("validation ok");
    global.connection.query('UPDATE Zeton SET vrsta_vpisa = ?, izkoriscen = ?, visoko_povprecje = ? WHERE vpisna_stFK = ?', [req.body.vrsta_vpisa, req.body.izkoriscen, req.body.visoko_povprecje, req.body.vpisna_stFK], function(error, results, fields) {
        
        console.log("query updated");
        
        if(error) {
            throw error;
        }
        
        res.send(JSON.stringify({
            status: 200,
            error: null,
            response: results,
        }));
    });
})


module.exports = router;