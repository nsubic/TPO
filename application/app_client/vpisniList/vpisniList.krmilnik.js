(function() {
  /* global angular */
  /* global $ */
  vpisniListCtrl.$inject = ['$location', '$scope', 'estudentPodatki', '$routeParams', '$window'];
  function vpisniListCtrl($location, $scope, estudentPodatki, $routeParams, $window) {
    var vm = this;
    $scope.emsoChecksumValidation = false;
    $scope.emsoDateValidation = false;
    $scope.spoli = [{id: 1, name: 'Ženski'}, {id: 2, name: 'Moški'}];
    $scope.zetonNiNaVoljo = true;
    $scope.obvezniPredmeti = 0;
    $scope.izbraniPredmeti = 0;
    $scope.strokovni = 0;
    $scope.moduli = 0;
    $scope.splosni = 0;
    
    $scope.strokovniTock = 0;
    $scope.moduliTock = 0;
    $scope.splosniTock = 0;
    
    $scope.readonly = true;
    
    $scope.maxTock = 60;
    $scope.tock = 0;
    vm.tock = 0;
    $scope.groupModule = [
      {
        "id": 1,
        "name": "Informacijski sistemi",
        "children": [63250, 63249, 63251],
      },
      {
        "id": 2,
        "name": "Obvladovanje informatike",
        "children": [63226, 63252, 63253]
      },
      {
        "id": 3,
        "name": "Razvoj programske opreme",
        "children": [63252, 63255, 63287]
      },
      {
        "id": 4,
        "name": "Računalniška omrežja",
        "children": [63257, 63258, 63259]
      },
      {
        "id": 5,
        "name": "Računalniški sistemi",
        "children": [63260, 63261, 63262]
      },
      {
        "id": 6,
        "name": "Algoritmi in sistemski programi",
        "children": [63265, 63264, 63263]
      },
      {
        "id": 7,
        "name": "Umetna inteligenca",
        "children": [63266, 63267, 63268]
      },
      {
        "id": 8,
        "name": "Medijske tehnologije",
        "children": [63270, 63269, 63271]
      }
    ];
    
    var stran = $routeParams.stran;
    
    $scope.recalculate = function() {
      
      var intermediate = 0;
      var intermediateObvezni = 0;
      var intermediateIzbirni = 0;
      var strokovni = 0;
      var moduli = 0;
      var splosni = 0;
      var strokovniTock = 0;
      var moduliTock = 0;
      var splosniTock = 0;
      
      $.each($scope.skupine, function(idx1, elem1) {
        $.each(elem1.predmeti, function(idx2, elem2) {
          if(elem1.id === 1) {
            intermediate += elem2.tocke;
            intermediateObvezni += 1;
          } else if(elem2.izbran) {
            intermediate += elem2.tocke;
            intermediateIzbirni += 1;
            if(elem1.id === 2) {
              strokovni += 1;
              strokovniTock += elem2.tocke;
            }
            
            if(elem1.id === 3) {
              splosni += 1;
              splosniTock += elem2.tocke;
            }
            
            if(elem1.id === 4) {
              moduli += 1;
              moduliTock += elem2.tocke;
            }
          }
        });
      });
      
      $scope.tock = $scope.maxTock - intermediate;
      vm.tock = $scope.tock
      $scope.obvezniPredmeti = intermediateObvezni;
      $scope.izbraniPredmeti = intermediateIzbirni;
      $scope.strokovni = strokovni;
      $scope.splosni = splosni;
      $scope.moduli = moduli;
      
      $scope.strokovniTock = strokovniTock;
      $scope.splosniTock = splosniTock;
      $scope.moduliTock = moduliTock;
    }
    vm.napacnoIme = 0;
    $scope.$watch('vpis.ime', function(data) {
      console.log("ime", data);
      vm.napacnoIme = 0;
      for(var a in data){
        if(data[a].match(/[0-9]/i) ){
          vm.napacnoIme = 1;
          alert("V imenu so lahko samo črke!")
        }
      }
      
    });
    
     vm.napacnPriimek = 0;
    $scope.$watch('vpis.priimek', function(data) {
      console.log("ime", data);
      vm.napacnPriimek = 0;
      for(var a in data){
        if(data[a].match(/[0-9]/i) ){
          vm.napacnPriimek = 1;
          alert("V priimku so lahko samo črke!")
        }
      }
    });
    
    vm.davcna = 0;
    $scope.$watch('vpis.davcna', function(data) {
      console.log("davcna", data);
      if(data == undefined)vm.davcna=1;
      else  vm.davcna=0;
    });
    vm.emso = 0;
    $scope.$watch('vpis.emso', function(data) {
      console.log("emso", vm.emso);
      $scope.emsoChecksumValidation = false;
      $scope.emsoDateValidation = false;
      if(data && data.length === 13) {
        console.log("vpis emso", data);
        var table_pos = [7, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        for(var i = 0; i < data.length-1; ++i) {
          var part1 = parseInt(data[i])*table_pos[i];
          sum += part1;
        }
        
        console.log("sum", sum);
        var part2 = Math.floor(sum / 11);
        console.log("delil", part2);
        var part3 = sum % 11;
        console.log("ostanek", part3);
        
        var last_num = parseInt(data[data.length-1]);
        var checksum = 11 - part3;
        
        console.log("totaling", last_num, checksum, last_num !== checksum)
        console.log("summing", typeof last_num, typeof checksum);
        
        if(last_num !== checksum) {
          $scope.emsoChecksumValidation = true;
          vm.emso=1
        } else {
          $scope.emsoChecksumValidation = false;
          vm.emso = 0;
        }
        console.log("emso1", vm.emso);

        console.log("datum", $scope.vpis.datum_rojstva);
        var dateDr = $scope.vpis.datum_rojstva;
        
        var day = data.substr(0, 2);
        var month = data.substr(2, 2);
        var year = data.substr(4, 3)
        
        console.log("datum 2", day, month, year);
        var dateEMSO = new Date(parseInt("1" + year), month-1, day);
        var dateBirth = new Date(dateDr.getFullYear(), dateDr.getMonth(), dateDr.getDate());
        
        var txtEMSO = [year, dateEMSO.getMonth()+1, dateEMSO.getDate()].join("-");
        var txtBirth = [dateDr.getFullYear().toString().substr(1, 3), dateDr.getMonth()+1, dateDr.getDate()].join("-");
        
        console.log("comparing", txtEMSO, txtBirth, txtEMSO !== txtBirth);
        console.log(!$scope.emsoChecksumValidation)
        if((txtEMSO !== txtBirth) && !$scope.emsoChecksumValidation) {
          $scope.emsoDateValidation = true;
        } else {
          $scope.emsoDateValidation = false;
        }
        console.log(!$scope.emsoDateValidation)
        if($scope.emsoChecksumValidation == false && $scope.emsoDateValidation == false)
          vm.emso = 0;
        else vm.emso = 1;
        console.log("emso2",vm.emso);
      }
      
    })
    
    $scope.reloadPredmeti = function() {
      console.log("letnik", $scope.vpis.letnik);

      $scope.regexIme = /[A-Za-z]{1,}/;
      $scope.regexPriimek = /[A-Za-z]{1,}/;
      $scope.tock = 0;
      vm.tock = $scope.tock;
      $scope.obvezniPredmeti = 0;
      $scope.izbraniPredmeti = 0;
      $scope.zetoni = [];
      $scope.skupine = [];
      $scope.skupine_izbira = [];
      $scope.izbira = [];
    
      var partial = $.grep($scope.predmeti, function(data) {
        var result = true;
        if(data.sifra_stProgramFK !== $scope.vpis.program) {
          console.log("no program", data.sifra_stProgramFK, $scope.vpis.program, data.sifra_stProgramFK !== $scope.vpis.program)
          result = false;
        }
        
        if(data.letnikFK !== $scope.vpis.letnik) {
          result = false;
        }
        return result;
      });
      
      $scope.skupine = [];
      
      console.log("partial!!!", partial);
      
      $.each(partial, function(idx, elem) {
        
        
        if(elem.sifra_predmetnikaFK == 4 && !$scope.vpis.prosto_izbirni) {
          return;
        }
        
        var found = $.grep($scope.skupine, function(data) {
          return data.id == elem.sifra_predmetnikaFK;
        });

      
        if(found.length === 0) {
          $scope.skupine.push({
            id: elem.sifra_predmetnikaFK,
            naziv: elem.Naziv_Skupine,
            predmeti: [{
              id: elem.sifra_predmetaFK,
              skupina: elem.sifra_predmetnikaFK,
              naziv: elem.ime_predmeta,
              tocke: elem.KT_tocke,
              izbran: false,
              ignore: false,
            }],
          });
        } else {
          var currentElement = found[0];
          
          var seeker = $.grep(currentElement.predmeti, function(distinct) {
            return distinct.id == elem.sifra_predmetaFK;
          });
          
          if(seeker.length === 0) {
            found[0].predmeti.push({
              id: elem.sifra_predmetaFK,
              skupina: found[0].id,
              naziv: elem.ime_predmeta,
              tocke: elem.KT_tocke,
              izbran: false,
              ignore: false,
            });  
          }
        }
      });
      
      console.log("debug", $scope.vpis.letnik);
      if(!$scope.vpis.prosto_izbirni && $scope.vpis.letnik == 3) {
        
        var moduli = {
            isModule: true,
            id: 4,
            naziv: "Modul",
            predmeti: []
          };
        $scope.skupine.push(moduli);
        
        $.each($scope.groupModule, function(idx, grpMod) {
          
          var khm = {
            id: grpMod.id,
            isModule: true,
            skupina: 4,
            naziv: grpMod.name,
            tocke: 18,
            children: grpMod.children,
            izbran: false,
          };
           
          var moreData = [];
           
          $.each(grpMod.children, function(idx3, elem3) {
            var predmet = $.grep($scope.predmeti2, function(data3) {
              return data3.sifra_predmeta === elem3;
            });
            
            if(predmet.length) {
              moreData.push(predmet[0]);
            }
          });
          khm.nodes = moreData;
          moduli.predmeti.push(khm);
        })
      }
    
      $scope.recalculate();
      console.log("partial", $scope.skupine);
    }
    
    //brainstorming:
      //mjbi na zacetku se vprasa studenta kasne vrste vpisa zeli, da mu na podlagi tega dam predmete ki jih lahko izbere, ter predmete ki so avtomatskop dodeljeni,
      // predlagane module, izbirce...
    $scope.vpis = {
      ime: null,
      priimek: null,
      datum_rojstva: null,
      kraj_rojstva: null,
      drzava_rojstva: null,
      emso: null,
      davcna: null,
      spol: null,
      tel_st: null,
      stalni_naslov_ulica: null,
      stalni_naslov_hisnast: null,
      stalni_postna_stevilka: null,
      stalni_obcina_koda: null,
      stalni_drzava_koda: null,
      zacasni_naslov_ulica: null,
      zacasni_naslov_hisnast: null,
      zacasni_postna_stevilka: null,
      zacasni_kraj_posta: null,
      zacasni_drzava_koda: null,
      program: null,
      vrsta_vpisa: null,
      letnik: null,
      solskoLeto: "2017/2018",
      zetonId: null,
    };
    
    $scope.skupine = [];
    $scope.izbira = [];
    
    // Šifranti
    $scope.poste = [];
    $scope.obcine = [];
    $scope.drzave = [];
    $scope.programi = [];
    $scope.vrste_vpisov = [];
    $scope.letniki = [];
    $scope.predmeti = [];
    
    estudentPodatki
      .drzava() 
      .then(function(res) {
        $scope.drzave = res.data.response;
        console.log("drzave", res);
      });
      
    estudentPodatki
      .studijskiProgram()
      .then(function(res) {
        $scope.programi = res.data.response;
        console.log("programi", $scope.programi);
      });
      
    estudentPodatki
      .vrsteVpisa()
      .then(function(res) {
        $scope.vrste_vpisov = res.data.response;
        console.log("vrste vpisov", $scope.vrste_vpisov);
      });
      
    estudentPodatki
      .naciniStudija()
      .then(function(res) {
        $scope.nacini_studija = res.data.response;
        console.log("načini študija", $scope.nacini_studija);
      })
      
    estudentPodatki
      .posta()
      .then(function(res) {
        $scope.poste = $.map(res.data.response, function(value, index) {
          return {
            "posta": value.postna_stevilka,
            "kraj": value.ime_poste,
          }
        });
      });
      
    estudentPodatki
      .obcina()
      .then(function(res) {
        $scope.obcine = res.data.response;
        console.log("obcine", $scope.obcine);
      })
      
    estudentPodatki
      .letnik()
      .then(function(res) {
        $scope.letniki = res.data.response;
        console.log("letniki", $scope.letniki);
      });
      
      estudentPodatki
        .predmet()
        .then(function(res) {
          $scope.predmeti2 = res.data.response;
          console.log("sif predmeti", $scope.predmeti2);
        })
      
      estudentPodatki
        .nosilciInPredmeti()
        .then(function(res) {
          $scope.predmeti = res.data.response;
          console.log("predmeti", $scope.predmeti);
          $scope.reloadPredmeti();
        });
  
    $scope.$watch('vpis.program', $scope.reloadPredmeti);
    $scope.$watch('vpis.letnik', $scope.reloadPredmeti);

    $scope.$watch('vpis.zacasni_postna_stevilka', function(data) {
      if($scope.vpis.zacasni_drzava_koda  == "SI") {
        var results = $.grep($scope.poste, function(value, index) {
          return value.posta.toString() === data;
        })
        
        if(results && results.length > 0) {
          $scope.vpis.zacasni_kraj_posta = results[0].kraj;  
        }  
      }
      
    }, true);
    
    $scope.dodajPredmet = function(predmet) {
      
      // tu so pogoji za dodajanje
      
      var tempSum = $scope.tock - predmet.tocke;
      if(tempSum < 0) {
        console.log("tempSum", tempSum, $scope.tock, predmet.tocke);
        alert("Presegli ste omejitev točk");
        return;
      }
      
      var tempPieces = $scope.obvezniPredmeti + $scope.izbraniPredmeti;

      console.log("letnik:::", $scope.vpis.letnik);
      
      if($scope.vpis.letnik == 2) {
        if(($scope.splosniTock + predmet.tocke) > 6 && predmet.skupina == 3) {
         if($scope.splosni > 1) {
            alert("Izbrana že imate splošna predmeta, izbira zato ni mogoča.");
          } else {
            alert("Izbran že imate splošni predmet, izbira zato ni mogoča.");  
          }
          return;
        }
        
        if(($scope.strokovniTock + predmet.tocke) > 6 && predmet.skupina == 2) {
          if($scope.strokovni > 1) {
            alert("Izbrana že imate strokovna predmeta, izbira zato ni mogoča");
          } else {
            alert("Izbran že imate strokovni predmet, izbira zato ni mogoča");
          }
          return;
        }
      } else if($scope.vpis.letnik == 3) {
       
        if($scope.splosniTock >= 6 && predmet.skupina == 3) {
          alert("Izbran že imate splošni predmet, izbira zato ni mogoča.");
          return;
        } else if($scope.strokovniTock >= 6 && predmet.skupina == 3) {
          if($scope.strokovni > 1) {
            alert("Strokovna predmeta ste že izbrali");
          } else {
            alert("Strokovni predmet ste že izbrali");
          }
          
          return;
        }
        
        if($scope.strokovniTock >= 6 && predmet.skupina == 2) {
          alert("Izbran že imate strokovni predmet, izbira zato ni mogoča");
          return;
        } else if($scope.splosniTock >= 6 && predmet.skupina == 2) {
          if($scope.splosni > 1) {
            alert("Splošna predmeta ste že izbrali");
          } else {
            alert("Splošni predmet ste že izbrali");  
          }
          return;
        }  
        
        if($scope.moduli >= 7 && predmet.skupina == 4) { // Na žalost manjka podatke o skupini modulov :)
          alert("Presegli ste maksimalno število modulov. Izbrali ste že 7 modulskih predmetov");
          return;
        }
      }

      
      
      predmet.izbran = true;
      
      console.log("switch on", predmet);
      
      for(var i = 0; i < $scope.skupine.length; ++i){
        var skupina = $scope.skupine[i];
        var predmeti = skupina.predmeti;
        for(var j = 0; j < predmeti.length; ++j) {
          var lclPredmet = predmeti[j];
          if(lclPredmet.isModule && lclPredmet.id === predmet.id) {
            var children = lclPredmet.children;
            for(var k = 0; k < children.length; ++k) {
              var child = children[k];
              var skupine = $scope.skupine;
              for(var l = 0; l < skupine.length; ++l) {
                var skupina = skupine[l];
                var predmeti2 = skupina.predmeti;
                for(var m = 0; m < predmeti2.length; ++m) {
                  var mPredmet = predmeti2[m];
                  console.log("compare", mPredmet.id, child, mPredmet.id === child)
                  if(mPredmet.id === child) {
                    mPredmet.ignore = true;
                  }
                }
              }
            }
          } else
          if(lclPredmet.id === predmet.id) {
            console.log("ignore", lclPredmet.id, predmet.id);
            lclPredmet.ignore = true;
          } 
        }
      } 

      $scope.recalculate();
    }
    
    $scope.odstraniPredmet = function(predmet) {
      predmet.izbran = false;
      
      $.each($scope.skupine, function(idx1, elem1) {
        $.each(elem1.predmeti, function(idx2, elem2) {
          if(elem2.isModule && elem2.id === predmet.id) {
            $.each(elem2.children, function(idx3, elem3) {
              $.each($scope.skupine, function(idx4, elem4) {
                $.each(elem4.predmeti, function(idx5, elem5) {
                  if(elem5.id === elem3) {
                    elem5.ignore = false;
                  }  
                })
              })
            })
          }
          else if(elem2.id === predmet.id && !elem2.izbran) {
            elem2.ignore = false;
          }
        });
      })
      
      $scope.recalculate();
    }
    
    $scope.izvediVpis = function() {
      
      console.log("tocke", vm.tock);
      console.log("zacasni", document.getElementById("prejem_zacasni").checked)
      console.log(document.getElementById("datum_rojstva").value)
      console.info("submit start");
      console.log("napaki", vm.napacnPriimek, vm.napacnoIme, vm.davcna, vm.emso);
      if(document.getElementById("prejem_zacasni").checked){
        if(document.getElementById("zacasni_naslov_ulica").value.length < 1){
          alert("Dopišite začasni naslov!")
          document.getElementById("zacasni_naslov_ulica").focus();
          return;
        }
        else if(document.getElementById("zacasni_naslov_hisnast").value.length < 1){
          alert("Dopišite hišno številko začasnega naslova!")
          document.getElementById("zacasni_naslov_hisnast").focus();
          return;
        }
        else if(document.getElementById("zacasni_postna_stevilka").value.length < 1){
          alert("Dopišite poštno številko začasnega naslova!")
          document.getElementById("zacasni_postna_stevilka").focus();
          return;
        }
        else if(document.getElementById("zacasni_obcina_koda").value.length < 1){
          alert("Dopišite kraj pošte začasnega naslova!")
          document.getElementById("zacasni_obcina_koda").focus();
          return;
        }
        else if(document.getElementById("zacasni_drzava_koda").value.length < 1){
          alert("Dopišite državo začasne pošte!")
          document.getElementById("zacasni_drzava_koda").focus();
          return;
        }
      }
      else if(document.getElementById("ime").value.length < 1){
        alert("Dopišite ime!")
        document.getElementById("ime").focus();
        return;
      }
      else if(document.getElementById("priimek").value.length < 1){
        alert("Dopišite priimek!")
        document.getElementById("priimek").focus();
        return;
      }
      else if(document.getElementById("datum_rojstva").value.length < 1){
        alert("Oznacite datum rojstva!")
        document.getElementById("datum_rojstva").focus();
        return;
      }
      else if(document.getElementById("kraj_rojstva").value.length < 1){
        alert("Dopišite kraj rojstva!")
        document.getElementById("kraj_rojstva").focus();
        return;
      }
      else if(document.getElementById("drzava_rojstva").value.length < 1){
        alert("Dopišite državo rojstva!")
        document.getElementById("drzava_rojstva").focus();
        return;
      }
      else if(document.getElementById("emso").value.length < 1){
        alert("Dopišite EMŠO!")
        document.getElementById("emso").focus();
        return;
      }
      else if(document.getElementById("davcna").value.length < 1){
        alert("Dopišite davcno!")
        document.getElementById("davcna").focus();
        return;
      }
      else if(document.getElementById("spol").value.length < 1){
        alert("Označite spol!")
        document.getElementById("spol").focus();
        return;
      }
      else if(document.getElementById("stalni_naslov_ulica").value.length < 1){
        alert("Dopišite stalni naslov!")
        document.getElementById("stalni_naslov_ulica").focus();
        return;
      }
      else if(document.getElementById("stalni_naslov_hisnast").value.length < 1){
        alert("Dopišite hišno številko!")
        document.getElementById("stalni_naslov_hisnast").focus();
        return;
      }
      else if(document.getElementById("stalni_postna_stevilka").value.length < 1){
        alert("Dopišite poštno številko!")
        document.getElementById("stalni_postna_stevilka").focus();
        return;
      }
      else if(document.getElementById("stalni_obcina_koda").value.length < 1){
        alert("Dopišite občino!")
        document.getElementById("stalni_obcina_koda").focus();
        return;
      }
      else if(document.getElementById("stalni_drzava_koda").value.length < 1){
        alert("Dopišite državo!")
        document.getElementById("stalni_drzava_koda").focus();
        return;
      }
      else if(document.getElementById("tel_st").value.length < 1){
        alert("Dopišite telefonsko številko!")
        document.getElementById("tel_st").focus();
        return;
      }
      else if(document.getElementById("email").value.length < 1){
        alert("Dopišite email!")
        document.getElementById("email").focus();
        return;
      }
      else if( vm.napacnoIme == 1){
        alert("V imenu so lahko samo črke!")
        document.getElementById("ime").focus();
        return;
      }
      else if(vm.napacnPriimek == 1 ){
        alert("V priimku so lahko samo črke!");
        document.getElementById("priimek").focus();
        return;
      }
      else if(vm.davcna == 1 ){
        alert("Napačna davčna številka!");
        document.getElementById("davcna").focus();
        return;
      }
      else if(vm.emso == 1 ){
        alert("Napačn EMŠO!");
        document.getElementById("emso").focus();
        return;
      }
      
      var dosezenih = 60 - vm.tock
      if(vm.tock > 0){
        alert("izbrali ste " + dosezenih + "KT, potrebuje še " + vm.tock + "KT!");
        return;
      }
        $scope.vpis.predmeti = [];
        
        $.each($scope.skupine, function(idx1, elem1) {
          
          if(!$scope.vpis.prosto_izbirni && $scope.vpis.letnik == 3 && elem1.id === 4) {
            return; // skip 4
          }
          
          $.each(elem1.predmeti, function(idx2, elem2) {
            if(elem2.izbran || elem2.skupina === 1) {
              $scope.vpis.predmeti.push({
                predmet: elem2.id,
                skupina: elem2.skupina,
              });
            }
          });
        })
        
        // še dodati predmete v modulih
        
        if(!$scope.vpis.prosto_izbirni && $scope.vpis.letnik == 3) {
          
          $.each($scope.skupine, function(idx1, elem1) {
            if(elem1.id !== 4) {
              return;
            }
  
            $.each(elem1.predmeti, function(idx2, elem2) {
              if(elem2.izbran) {
                $.each(elem2.nodes, function(idx3, elem3) {
                  $scope.vpis.predmeti.push({
                    predmet: elem3.sifra_predmeta,
                    skupina: elem2.skupina,
                  });  
                });
                
              }
            });
          });
        }
    
        // konec
        
        estudentPodatki
          .dodajVpis($scope.vpis)
          .then(function(res) {
            console.log(res);
            var leta = $scope.vpis.solskoLeto.split("/");
            $window.location.href = "/" + ["vpis", "print", leta[0], leta[1], $scope.vpis.program, $scope.vpis.vpisna_st].join("/");
          }, function(err) {
            alert(err);
          })
        // estudentPodatki
        //  .dodajStudenta(vpis) ???
        // sn: ali kaj drugega, ne vem
    }
    console.log($window.localStorage['upIme']);
    estudentPodatki.student3($window.localStorage['upIme']).then(function (res) {
      console.log(res);
      if(res.data.response.length > 0)
      var vpisna = res.data.response[0].vpisna_st;
      var data = res.data.response[0];
      
      for(var key in data) {
        var partial = data[key];
        try {
          if(key.indexOf("datum") >= 0) {
            partial = new Date(Date.parse(data[key]));
          } else if(key === "naslov_vrocanje") {
            partial = data[key] === 1 ? true : false;
          }
        } catch(ex) {
        }
        $scope.vpis[key] = partial;
      }
      
      console.log("scope", $scope.vpis);
console.log("scope", vpisna);
      estudentPodatki
        .dobiZeton(vpisna)
        .then(function(res) {
          console.log("zetoni", res);
          var data = res.data.response;
          $scope.zetoni = data;
          
          if(data.length > 0) {
            $scope.zetonNiNaVoljo = false;
            var first = data[0];
            console.log("first", first);
            $scope.vpis.program = first.Nivo_studijaFK;
            $scope.vpis.vrsta_vpisa = first.nacin_studijaFK;
            $scope.vpis.nacin_studija = first.nacin_studijaFK;
            $scope.vpis.letnik = first.letnikFK;
            $scope.vpis.solskoLeto = first.studijsko_letoFK;
            $scope.vpis.visoko_povprecje = first.visoko_povprecje;
            $scope.vpis.prosto_izbirni = first.prosto_izbirni === 1 ? true : false;
            $scope.vpis.zetonId = first.id;
            
            $scope.reloadPredmeti();
          }
        });
    });
  }
  
  angular
    .module('estudent')
    .controller('vpisniListCtrl', vpisniListCtrl);
})();