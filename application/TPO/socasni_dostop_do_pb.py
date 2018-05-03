import mysql.connector
from mysql.connector import (connection);
import time
import csv
import os


print(os.environ['C9_USER'])

def connect():
    conn = None
    try:
        conn = connection.MySQLConnection(user=os.environ['C9_USER'],password = '',host = '127.0.0.1', database = 'mydb')
    except mysql.connector.Error as err:
        print(err)

    return conn



def posta():
    conn = connect()

    try:
        cursor = conn.cursor()
        i = 0;
        with open('posta.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(row[1])
                data=(row[0], row[1])
                cursor.execute("INSERT INTO Posta VALUES (%s,%s)",data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def drzava():
    conn = connect()

    try:
        cursor = conn.cursor()
        i = 0;
        with open('ŠifrantDržav.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(i)
                data=(row[0], row[1],row[2], row[3],row[4], row[5])
                cursor.execute("INSERT INTO Drzava VALUES (%s,%s,%s,%s,%s,%s)", data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def obcina():
    conn = connect()

    try:
        cursor = conn.cursor()
        i = 0;
        with open('ŠifrantObčin.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(i)
                data=(row[0], row[1])
                cursor.execute("INSERT INTO Obcina VALUES (%s,%s)", data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def vrstaNacinOblika():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (1, "Prvi vpis v letnik/dodatno leto"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (2, "Ponavljanje letnika"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (3, "Nadaljevanje letnika"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (4, "Podaljšanje statusa študenta"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (5, "Vpis po merilih za prehode v višji letnik"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (6, "Vpis v semester skupnega št. programa"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (7, "Vpis po merilih za prehode v isti letnik"))
        cursor.execute("INSERT INTO Vrsta_vpisa VALUES (%s,%s)", (98, "Vpis za zaključek"))
        cursor.execute("INSERT INTO Nacin_studija VALUES (%s,%s,%s)", (1, "redni","full-time"))
        cursor.execute("INSERT INTO Nacin_studija VALUES (%s,%s,%s)", (3, "izredni", "part-time"))
        cursor.execute("INSERT INTO Oblika_studija VALUES (%s,%s,%s)", (1, "na lokaciji", "on site"))
        cursor.execute("INSERT INTO Oblika_studija VALUES (%s,%s,%s)", (2, "na daljavo", "distance learning"))
        cursor.execute("INSERT INTO Oblika_studija VALUES (%s,%s,%s)", (3, "e-študij", "e-learning"))
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Studijski_program():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("XU", "Humanistika in družb.-DR. 3","M - tretja stopnja: doktorski",6,1000460))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("LE", "INF. SISTEMI IN ODLOČANJE - DR",
                       "G - (predbolonjski): doktorski", 4, 1000479))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("L3", "INFORMAC. SISTEMI IN ODLOČANJE",
                       "F - (predbolonjski): magistrski", 4, 1000480))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("X5", "Kognitivna znanost MAG 2. st.",
                       "L - druga stopnja: magistrski", 4, 1000472))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("MM", "Multimedija UN 1. st.",
                       "K - prva stopnja: univerzitetni", 6, 1001001))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("7002801", "PEDAGOŠKO RAČ . IN INF. MAG-2. st.",
                       "L - druga stopnja: magistrski", 4, 1000977))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("Izmenjave", "Predmetnik za tuje študente na izmenjavi",
                       "", 0, 1000461))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("L2", "RAČUNAL.IN INFORMATIKA UN",
                       "C - (predbolonjski): univerzitetni", 9, 1000475))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("P7", "RAČUNAL. IN MATEMATIKA UN",
                       "C - (predbolonjski): univerzitetni", 8, 1000425))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("HB", "RAČUNAL. IN INFORMATIKA VS",
                       "B - (predbolonjski): visokošolski strokovni", 6, 1000477))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("VV", "RAČUNAL. IN MATEMA. UN-1. ST.",
                       "K - prva stopnja: univerzitetni", 6, 1000407))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("L1", "RAČUNALN. IN INFORM. MAG 2 .ST",
                       "L - druga stopnja: magistrski", 4, 1000471))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("VT", "RAČUNALN. IN INFORM. UN-1.ST",
                       "K - prva stopnja: univerzitetni", 6, 1000468))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("VU", "RAČUNALN. IN INFORM. VS-1.ST",
                       "J - prva stopnja: visokošolski strokovni", 6, 1000470))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("X6", "RAČUNALN. IN INFORM. DR-3 ST.",
                       "M - tretja stopnja: doktorski", 6, 1000474))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("7E", "RAČUNALN. IN INFORM. -DR",
                       "G - (predbolonjski): doktorski", 4, 1000478))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("71", "RAČUNALN. IN INFORM. -MAG",
                       "F - (predbolonjski): magistrski", 4, 1000481))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("02", "RAČUNALN. IN INFORM. -VIS",
                       "71 - visokošolski (univerzitetni) študij", 8, 1000462))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("03", "RAČUNALN. IN INFORM. -VŠ",
                       "61 - višješolski študij", 4, 1000463))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("KPOO", "Računalništvo in matematika MAG 2. st.",
                       "L - druga stopnja: magistrski", 4, 1000934))
        cursor.execute("INSERT INTO Studijski_program VALUES (%s,%s,%s,%s,%s)", ("Z2", "Upravna informatika UN 1. st.",
                       "K - prva stopnja: univerzitetni", 6, 1000469))
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def delPredmetnika():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Del_predmetnika VALUES (%s,%s)", (1, "Obvezni Predmet"))
        cursor.execute("INSERT INTO Del_predmetnika VALUES (%s,%s)", (2, "Strokovno izbirni predmet"))
        cursor.execute("INSERT INTO Del_predmetnika VALUES (%s,%s)", (3, "Splošno izbirni predmet"))
        cursor.execute("INSERT INTO Del_predmetnika VALUES (%s,%s)", (4, "Modul"))
        print("dela1")
        cursor.execute("INSERT INTO Letnik VALUES (1)")
        cursor.execute("INSERT INTO Letnik VALUES (2)")
        cursor.execute("INSERT INTO Letnik VALUES (3)")
        cursor.execute("INSERT INTO Letnik VALUES (4)")
        cursor.execute("INSERT INTO Letnik VALUES (5)")
        cursor.execute("INSERT INTO Letnik VALUES (6)")
        cursor.execute("INSERT INTO Letnik VALUES (7)")
        cursor.execute("INSERT INTO Letnik VALUES (8)")
        print("dela2")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2010/2011')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2011/2012')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2012/2013')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2013/2014')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2014/2015')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2015/2016')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2016/2017')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2017/2018')")
        cursor.execute("INSERT INTO Studijsko_leto VALUES ('2018/2019')")
        print("dela3")

        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def predmet():
    conn = connect()

    try:
        cursor = conn.cursor()
        i = 0;
        with open('predmeti.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(row[1])
                data=(row[1], row[0], row[2])
                cursor.execute("INSERT INTO Predmet VALUES (%s,%s,%s)", data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def profesor():
    conn = connect()

    try:
        cursor = conn.cursor()
        i = 0;
        with open('profesorji.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(row[1])
                data=(row[0], row[1], row[2])
                cursor.execute("INSERT INTO Profesor VALUES (%s,%s,%s)", data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def predmetnik():
    conn = connect()

    try:
        cursor = conn.cursor()
        i = 0;
        with open('predmetnik.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(row[0])
                data=(row[0], row[1], row[2], row[3], row[4],row[5])
                cursor.execute("INSERT INTO Predmetnik VALUES (%s,%s,%s,%s,%s,%s)", data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()


def Vpis():
    conn = connect()

    try:
        cursor = conn.cursor()
        #1.letnik
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170001))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170002))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170003))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170004))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170005))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170006))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170007))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170008))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170009))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170010))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",63170013))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2017/2018", "VT", 63170012))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2017/2018", "VT", 63170011))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2017/2018", "VT", 63170014))
        
        #2.letnik
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2016/2017", "VT", 63160001))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2016/2017", "VT", 63160002))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2016/2017", "VT", 63160003))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 2, 1, 1, 1, "2017/2018", "VT", 63160001))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 2, 1, 1, 1, "2017/2018", "VT", 63160002))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 2, 1, 1, 1, "2017/2018", "VT", 63160003))
        
        #3.lentik
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2015/2016", "VT", 63150001))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2015/2016", "VT", 63150002))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2015/2016", "VT", 63150003))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 2, 1, 1, 1, "2016/2017", "VT", 63150001))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 2, 1, 1, 1, "2016/2017", "VT", 63150002))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 2, 1, 1, 1, "2016/2017", "VT", 63150003))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 3, 1, 1, 1, "2017/2018", "VT", 63150001))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 3, 1, 1, 1, "2017/2018", "VT", 63150002))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 3, 1, 1, 1, "2017/2018", "VT", 63150003))
        
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()


def izbrani():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170001,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170002,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170003,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170004,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170005,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170006,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170007,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170008,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170009,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170010,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018","VT",63170013,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170012,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170011,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63170014,63215,1,1))
        #2.letnik
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160001,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160002,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160003,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160001,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160002,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160003,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160001,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160002,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160003,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160001,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160002,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160003,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160001,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160002,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160003,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160001,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160002,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160003,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160001,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160002,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160003,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160001,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160002,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160003,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160001,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160002,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017","VT",63160003,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160001,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160002,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63160003,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63279,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63279,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63279,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63208,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63208,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63208,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63213,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63213,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63213,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63218,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63218,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63218,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63283,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63283,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63283,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63216,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63216,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63216,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63280,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63280,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63280,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63217,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63217,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63217,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63219,2,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63220,2,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63219,2,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160001,63225,3,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160002,63225,3,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63160003,63248,3,2))
        #3.letnik:
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150001,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150002,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150003,63277,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150001,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150002,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150003,63202,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150001,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150002,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150003,63203,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150001,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150002,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150003,63204,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150001,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150002,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150003,63205,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150001,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150002,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150003,63278,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150001,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150002,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150003,63207,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150001,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150002,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150003,63212,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150001,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150002,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016","VT",63150003,63209,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150001,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150002,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2015/2016", "VT", 63150003,63215,1,1))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63279,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63279,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63279,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63208,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63208,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63208,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63213,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63213,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63213,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63218,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63218,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63218,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63283,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63283,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63283,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63216,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63216,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63216,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63280,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63280,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63280,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63217,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63217,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63217,1,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63219,2,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63220,2,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63219,2,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150001,63225,3,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150002,63225,3,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2016/2017", "VT", 63150003,63248,3,2))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63214,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63214,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63214,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63256,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63256,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63256,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63281,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63281,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63281,1,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63252,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63252,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63249,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63226,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63226,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63250,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63253,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63253,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63251,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63254,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63254,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63254,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63255,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63255,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63255,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63287,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63287,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63287,4,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150001,63266,3,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150002,63262,3,3))
        cursor.execute("INSERT INTO Izbrani_predmeti VALUES (%s,%s,%s,%s,%s,%s)", ("2017/2018", "VT", 63150003,63269,3,3))

        
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Student():
    conn = connect()

    try:
        cursor = conn.cursor()
        # 1 letnik:
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Horvat","Jožef", 123211,63170001,5270,1,"SI","neki",33,32424,"jozef.horvat@gmail.com","031 456 789",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"jh5432@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Novak","Marija",123212,63170002,6280,213,"SI","neki",10,32424,"marija.novak@gmail.com","031 987 321",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mn4321@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Novak","Franc",123213,63170003,4260,3,"SI","neki",16,32424,"franc.novak@gmail.com","031 222 331",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"fn0987@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Horvat","Marija",123214,63170004,5230,6,"SI","neki",8,32424,"marija.horvat@gmail.com","031 111 222",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mh9999@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Kranjc","Marija",123215,63170005,3000,11,"SI","neki",122,32424,"marija.kranjc@gmail.com","031 779 987",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mk0000@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Horvat","Franc",123216,63170006,2393,16,"SI","neki",56,32424,"franc.horvat@gmail.com","031 789 687",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"fh7777@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Puškar","Marija", 123217,63170007,5280,36,"SI","neki",78,32424,"marija.potocnik@gmail.com","031 687 532",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mp6666@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Novak","Jože", 123218,63170008,1292,37,"SI","neki",22,32424,"joze.novak@gmail.com","031 456 789",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"jn4444@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Novak","Ana",123219,63170009,1430,34,"SI","neki",26,32424,"ana.novak@gmail.com","031 777 353",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"an5555@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Novak","Andrej", 123220,63170010,6310,40,"SI","neki",45,32424,"andrej.novak@gmail.com","031 555 353",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"an6543@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Zupanc","Marija", 123221,63170011,1241,43,"SI","neki",3,32424,"marija.zupancic@gmail.com","031 010 505",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mz7654@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Novak","Ivan", 123222,63170012,1330,48,"SI","neki",61,32424,"ivan.novak@gmail.com","031 550 441",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"in1234@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Mlakar","Marija",123223,63170013,1218,164,"SI","neki",70,32424,"marija.mlakar@gmail.com","031 650 782",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mm5678@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Golob","Marija", 123224,63170014,2325,45,"SI","neki",5,32424,"marija.golob@gmail.com","031 504 867",0,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"mg7878@student.uni-lj.si"))
        
        # 2. letnik:
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Habjan","Žiga",123225,63160001,1000,61,"SI","neki",61,32424,"ziga.habjan@gmail.com","031 055 787",1,"1998.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"zh1234@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Šubic","Terezija",123226,63160002,4000,52,"SI","neki",70,32424,"terezija.subic@gmail.com","031 454 656",0,"1998.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"ts5678@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Trdina","Nejc", 123227,63160003,8270,54,"SI","neki",5,32424,"nejc.trdina@gmail.com","031 054 778",1,"1998.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"nt7878@student.uni-lj.si"))

        # 3.letnik:
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Štrukelj","Luka", 123228,63150001,1000,61,"SI","neki",61,32424,"luka.strukelj@gmail.com","031 055 787",1,"1997.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"ls6546@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("Zrnec","Jurij", 123229,63150002,4000,52,"SI","neki",70,32424,"jurij.zrnec@gmail.com","031 454 656",1,"1997.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"jz7676@student.uni-lj.si"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ( "Mlakar","Iztok",123230,63150003,8270,54,"SI","neki",5,32424,"iztok.mlakar@gmail.com","031 054 778",1,"1997.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"im7744@student.uni-lj.si"))


        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Oseba():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("jh5432@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mn4321@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("fn0987@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mh9999@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mk0000@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("fh7777@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mp6666@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("jn4444@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("an5555@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("an6543@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mz7654@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("in1234@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mm5678@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("mg7878@student.uni-lj.si","geslo",1 ))
        
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("zh1234@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("ts5678@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("nt7878@student.uni-lj.si","geslo",1 ))
        
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("ls6546@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("jz7676@student.uni-lj.si","geslo",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("im7744@student.uni-lj.si","geslo",1 ))
        
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("ref@ref","ref",3 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("admin@admin","admin",4 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("pro@pro","pro",2 ))
        
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("28@pro","pro",2 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("2@pro","pro",2 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("3@pro","pro",2 ))

        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Nosilec():
    conn = connect()
    
    try:
        cursor = conn.cursor()
        i = 0;
        with open('nosilec.csv', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=',')
            for row in spamreader:
                i=i+1;
                print(row[1])
                data=(row[0], row[1], row[2], None, None)
                print(data)
                cursor.execute("INSERT INTO Nosilec_predmeta VALUES (%s,%s,%s,%s,%s)", data)
        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()
    



posta()
drzava()
obcina()
vrstaNacinOblika()
Studijski_program()
delPredmetnika()
predmet()
profesor()
Nosilec()
predmetnik()
Oseba()
Student()
Vpis()
izbrani()
