# TPO

aplikacija teče na portu 8081: https://tpo-van123helsing.c9users.io:8081/

Aplikacijo zaženemo s telimi ukazi v cloud9
```
git clone https://github.com/nsubic/TPO.git
cd TPO
cd application
npm install
npm install -g nodemon
mysql-ctl install
phpmyadmin-ctl install
nodemon
```

baza dostopna na: 
```
https://{{ime projekta}}-{{uporabniško ime c9}}.c9users.io/phpmyadmin/
server: 127.0.0.1
Username: uporabniško ime za c9
Password: 
DB Name: mydb

V phpmyadmin kreiraj zbitko poatkov z imenom mydb in kodiranjem utf8. Nato klikni na SQL, prilepi noti SQL skripto in da izvedi.
za dodajanje podatkov v bazo izvedi ukaze naštete na https://mycodememo.com/set-up-python3-and-mysql-in-cloud9/
nato v mapi /TPO/application/TPO  poženi ukaz:  'python3  socasni_dostop_do_pb.py'. 


Izvedi ukaze na https://mycodememo.com/set-up-python3-and-mysql-in-cloud9/ ter nato se napiši v terminal ukaz sudo pip install mysql-connector-python

```

Struktura nekaterih tabel:
```
Tabela OSEBA:
-upIme
-geslo
-vloga  (številka od 1 do 4: 1-student, 2-profesr, 3-referentka, 4-admin)


Nosilec_predmeta
-sifra_opcije        INT
-sifra_predmetaFk    INT
-sifra_profesorjaFK1 INT
-sifra_profesorjaFK2 INT (could be null)
-sifra_profesorjaFK3 INT (could be null)

Profesor
-sifra_profesorja    INT
-ime                 VARCHAR
-priimek             VARCHAR
```

