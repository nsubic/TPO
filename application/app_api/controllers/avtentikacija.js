var passport = require('passport');
var jwt = require('jsonwebtoken');

var generirajJwt = function(oseba) {
   var datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
    
  return jwt.sign({
    _id: oseba._id,
    upIme: oseba.upIme,
    geslo: oseba.geslo,
    vloga: oseba.vloga,
    datumPoteka: parseInt(datumPoteka.getTime() / 1000, 10)
   }, 'toleNašeGeslo');
};
  
var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

module.exports.registracija = function(zahteva, odgovor) {
  if (!zahteva.body.upIme || !zahteva.body.geslo || !zahteva.body.vloga) {
    vrniJsonOdgovor(odgovor, 400, {"sporočilo": "Zahtevani so vsi podatki"});
    return;
  }

  var oseba = {
                  "ime":zahteva.body.upIme,
                  "geslo":zahteva.body.geslo,
                  "vloga":zahteva.body.vloga
                }
  oseba.ime = zahteva.body.upIme;
  oseba.geslo = zahteva.body.geslo;
  oseba.vloga = zahteva.body.vloga;
  oseba.save(function(napaka) {
    var zeton;
    if (napaka) {
        vrniJsonOdgovor(odgovor, 404, napaka);
    } else {
      zeton = oseba.generirajJwt();
      vrniJsonOdgovor(odgovor, 200, {
        "zeton": zeton
      });
    }
  });
};


module.exports.prijava = function(zahteva, odgovor) {
  if (!zahteva.body.upIme || !zahteva.body.geslo) {
     vrniJsonOdgovor(odgovor, 400, {
       "sporocilo": "Zahtevani so vsi podatki"
     });
   }

   passport.authenticate('local', function(napaka, oseba, podatki) {
     var zeton;
     if (napaka) {
       vrniJsonOdgovor(odgovor, 404, napaka);
       return;
     }
     if (oseba) {
       zeton = generirajJwt();
       vrniJsonOdgovor(odgovor, 200, {
         "zeton": zeton
       });
     } else {
       vrniJsonOdgovor(odgovor, 401, podatki);
     }
  })(zahteva, odgovor);
};