# TPO

Aplikacijo zaženemo s telimi ukazi v cloud9
```
git clone https://github.com/nsubic/TPO.git
cd TPO
cd application
npm install
npm install -g nodemon
nodemon

baza dostopna na: http://www.phpmyadmin.co/
server: sql11.freemysqlhosting.net
Username: sql11230633
Password: WYkELlYD1B
Port number: 3306
DB Name: sql11230633


Tabela OSEBA:
-upIme
-zgoscenaVrednost
-nakljucnaVrednost
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
