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
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423432))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423431))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423434))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423433))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423435))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423437))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423438))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423442))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423452))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423422))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1,1,1,1,"2017/2018","VT",423412))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2017/2018", "VT", 423411))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2017/2018", "VT", 423415))
        cursor.execute("INSERT INTO Vpis VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (1, 1, 1, 1, 1, "2017/2018", "VT", 423471))

        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Student():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("I", "I",123211,423432,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme1"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("J", "J",123212,423431,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme2"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("K", "K",123213,423434,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme3"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("L", "L",123214,423433,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme4"))

        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("A", "A",123215,423435,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme5"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("B", "B",123216,423437,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme6"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("C", "C",123217,423438,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme7"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("D", "D",123218,423442,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme8"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("E", "E",123219,423452,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme9"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("F", "F",123220,423422,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme10"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("G", "G",123221,423415,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme11"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("H", "H",123222,423411,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme12"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("M", "M",123223,423412,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme13"))
        cursor.execute("INSERT INTO Student VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", ("N", "N",123224,423471,1000,7,"SI","neki",33,32424,"mail","031 222 222",1,"1999.02.02","Ljubljana",1000,5,"SI","neki2",2,"SI",5,1,"upIme14"))



        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Oseba():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme1","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme2","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme3","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme4","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme5","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme6","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme7","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme8","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme9","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme10","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme11","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme12","nakljucna",1 ))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme13", "nakljucna", 1))
        cursor.execute("INSERT INTO Oseba VALUES (%s,%s,%s)", ("upIme14", "nakljucna", 1))

        conn.commit()
        cursor.close()
    except Exception as exc:
        print ("EXCEPTION", exc)
    conn.close()

def Nosilec():
    conn = connect()

    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Profesor VALUES (%s,%s,%s)", (1, "ime", "priimek"))

        cursor.execute("INSERT INTO Nosilec_predmeta VALUES (%s,%s,%s,%s,%s)", (1,63202,1,None,None ))

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
Nosilec()
predmetnik()
Oseba()
Student()
Vpis()
