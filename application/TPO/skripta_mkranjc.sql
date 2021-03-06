-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: mydb
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Del_predmetnika`
--

DROP TABLE IF EXISTS `Del_predmetnika`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Del_predmetnika` (
  `sifra_predmetnika` int(11) NOT NULL,
  `naziv` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`sifra_predmetnika`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Del_predmetnika`
--

LOCK TABLES `Del_predmetnika` WRITE;
/*!40000 ALTER TABLE `Del_predmetnika` DISABLE KEYS */;
INSERT INTO `Del_predmetnika` VALUES (1,'Obvezni Predmet'),(2,'Strokovno izbirni predmet'),(3,'Splošno izbirni predmet'),(4,'Modulski predmeti');
/*!40000 ALTER TABLE `Del_predmetnika` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Drzava`
--

DROP TABLE IF EXISTS `Drzava`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Drzava` (
  `dvomestna_koda` varchar(2) COLLATE utf8_bin NOT NULL,
  `trimestna_oznaka` varchar(3) COLLATE utf8_bin NOT NULL,
  `numericna_oznaka` int(11) NOT NULL,
  `iso_naziv` varchar(45) COLLATE utf8_bin NOT NULL,
  `slo_naziv` varchar(45) COLLATE utf8_bin NOT NULL,
  `opomba` longtext COLLATE utf8_bin,
  PRIMARY KEY (`dvomestna_koda`),
  UNIQUE KEY `dvomestna_koda_UNIQUE` (`dvomestna_koda`),
  UNIQUE KEY `trimestna_oznaka_UNIQUE` (`trimestna_oznaka`),
  UNIQUE KEY `numericna_oznaka_UNIQUE` (`numericna_oznaka`),
  UNIQUE KEY `iso_naziv_UNIQUE` (`iso_naziv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Drzava`
--

LOCK TABLES `Drzava` WRITE;
/*!40000 ALTER TABLE `Drzava` DISABLE KEYS */;
INSERT INTO `Drzava` VALUES ('AD','AND',20,'Andorra ','Andora',''),('AE','ARE',784,'United Arab Emirates ','Združeni Arabski Emirati',''),('AF','AFG',4,'Afghanistan ','Afganistan',''),('AG','ATG',28,'Antigua and Barbuda ','Antigva in Barbuda','Otoška država v malih Antilih v Karibskem morju.'),('AI','AIA',660,'Anguilla ','Angvila','Čezmorska skupnost Velike Britanije, predhodno je AI predstavljal francoski: Afar and Issas.'),('AL','ALB',8,'Albania ','Albanija',''),('AM','ARM',51,'Armenia ','Armenija',''),('AO','AGO',24,'Angola ','Angola',''),('AQ','ATA',10,'Antarctica ','Antarktika','Koda pa francoskem nazivu: Antarctique.'),('AR','ARG',32,'Argentina ','Argenitna',''),('AS','ASM',16,'American Samoa ','Ameriška Samoa','Zunanji teritorij ZDA v južnem Tihem oceanu.'),('AT','AUT',40,'Austria ','Avstrija',''),('AU','AUS',36,'Australia ','Avstralija',''),('AW','ABW',533,'Aruba ','Aruba','Otok v Karibskem morju, del kraljevine Nizozemske.'),('AX','ALA',248,'Ålland Islands ','Alandski otoki','Otočje v Baltiku.'),('AZ','AZE',31,'Azerbaijan ','Azerbajdžan',''),('BA','BIH',70,'Bosnia and Herzegovina ','Bosna in Hercegovina',''),('BB','BRB',52,'Barbados ','Barbados',''),('BD','BGD',50,'Bangladesh ','Bangladeš',''),('BE','BEL',56,'Belgium ','Belgija',''),('BF','BFA',854,'Burkina Faso ','Burkina Faso','Bivši ISO naziv države: Upper Volta (HV).'),('BG','BGR',100,'Bulgaria ','Bolgarija',''),('BH','BHR',48,'Bahrain ','Bahrajn',''),('BI','BDI',108,'Burundi ','Burundi ',''),('BJ','BEN',204,'Benin ','Benin','Bivši ISO naziv države: Dahomey (DY).'),('BL','BLM',652,'Saint Barthélemy ','Sveti Bartolomej','Čezmosrksa skupnost Francije.'),('BM','BMU',60,'Bermuda ','Bermudi',''),('BN','BRN',96,'Brunei Darussalam ','Brunej','ISO naziv države po nazivu v ZN. Otoška država na otok Borneo v JV Aziji.'),('BO','BOL',68,'Bolivia, Plurinational State of ','Bolivija',''),('BQ','BES',535,'Bonaire, Sint Eustatius and Saba ','Otočje Bonaire, Sv. Eustatij in Saba','Otočje v karibih pod nizozemsko upravo (the BES Islands). Bivši ISO naziv države: Bonaire, Saint Eustatius and Saba. BQ je prej predstavljal: British Antarctic Territory.'),('BR','BRA',76,'Brazil ','Brazilija',''),('BS','BHS',44,'Bahamas ','Bahami',''),('BT','BTN',64,'Bhutan ','Butan',''),('BV','BVT',74,'Bouvet Island ','Bouvetov otok','Norveški otok v južnem Atlantskem oceanu.'),('BW','BWA',72,'Botswana ','Bocvana',''),('BY','BLR',112,'Belarus ','Belorusija','Bivši ISO naziv države: Byelorussian SSR.'),('BZ','BLZ',84,'Belize ','Belize',''),('CA','CAN',124,'Canada ','Kanada',''),('CC','CCK',166,'Cocos (Keeling) Islands ','Kokosovi in Keelingovi otoki','Otočje pod upravo Avstralije v Indijskem oceanu.'),('CD','COD',180,'Congo, the Democratic Republic of the ','Demokratična republika Kongo','Bivše ime: Zaire (ZR), obmorska država.'),('CF','CAF',140,'Central African Republic ','Srednjeafriška republika','Prej znana kot francoska kolonija Ubangi-Shari.'),('CG','COG',178,'Congo ','Kongo','Srednji Kongo (celinska država brez morja).'),('CH','CHE',756,'Switzerland ','Švica','Koda je narejena po nazivu v latinščini: Confoederatio Helvetica.'),('CI','CIV',384,'Côte d\'Ivoire ','Slonokoščena obala',''),('CK','COK',184,'Cook Islands ','Cookovi otoki',''),('CL','CHL',152,'Chile ','Čile',''),('CM','CMR',120,'Cameroon ','Kamerun',''),('CN','CHN',156,'China ','Kitajska',''),('CO','COL',170,'Colombia ','Kolumbija',''),('CR','CRI',188,'Costa Rica ','Kostarika',''),('CU','CUB',192,'Cuba ','Kuba',''),('CV','CPV',132,'Cape Verde ','Kapverdski otoki (Zelenortski otoki)','Otočje v Atlantskem oceanu ob Afriki.'),('CW','CUW',531,'Curaçao ','Kurasao','Spada v čezmorsko ozemlje Nizozemske, Nizozemski Antili.'),('CX','CXR',162,'Christmas Island ','Božični otok','Avstralsko ozemlje v Indijskem oceanu.'),('CY','CYP',196,'Cyprus ','Ciper',''),('CZ','CZE',203,'Czech Republic ','Češka',''),('DE','DEU',276,'Germany ','Nemčija','Koda po nemškem nazivu: Deutschland. Koda pred 1990 v uporabi za Zahodno Nemčijo.'),('DJ','DJI',262,'Djibouti ','Džibuti','Staro ime: French Afar and Issas (AI).'),('DK','DNK',208,'Denmark ','Danska',''),('DM','DMA',212,'Dominica ','Dominika','Otoška država v malih Antilih v Karibskem morju.'),('DO','DOM',214,'Dominican Republic ','Dominikanska republika',''),('DZ','DZA',12,'Algeria ','Alžirija','Koda po kabilskem nazivu: Dzayer.'),('EC','ECU',218,'Ecuador ','Ekvador',''),('EE','EST',233,'Estonia ','Estonija','Koda po estonskem nazivu: Eesti.'),('EG','EGY',818,'Egypt ','Egipt',''),('EH','ESH',732,'Western Sahara ','Zahodna Sahara','Bivši ISO naziv države: Spanish Sahara (koda po španskem nazivu: Sahara español).'),('ER','ERI',232,'Eritrea ','Eritreja',''),('ES','ESP',724,'Spain ','Španija','Koda po nazivu v spanščini: España.'),('ET','ETH',231,'Ethiopia ','Etiopija',''),('FI','FIN',246,'Finland ','Finska',''),('FJ','FJI',242,'Fiji ','Fidži','Otočje v južnem Tihem oceanu.'),('FK','FRO',234,'Falkland Islands (Malvinas) ','Falkalndski otoki','Čezmorsko otočje velike Britanije.'),('FM','FSM',583,'Micronesia, Federated States of ','Mikronezija','Bivši ISO naziv države: Micronesia. Nahaja se v Tihem oceanu.'),('FO','FLK',238,'Faroe Islands ','Ferski otoki',''),('FR','FRA',250,'France ','Francija',''),('GA','GAB',266,'Gabon ','Gabon',''),('GB','GBR',826,'United Kingdom ','Velika Britanija','Koda po nazivu: Great Britain (iz uradnega naziva: United Kingdom of Great Britain and Northern Ireland). '),('GD','GRD',308,'Grenada ','Grenada',''),('GE','GEO',268,'Georgia ','Gruzija','Koda GE je prej predstavljala Gilbertove in Ellisijine otoke.'),('GF','GUF',254,'French Guiana ','Francoska Gvajana','Koda po francoskem nazivu: Guyane française.'),('GG','GGY',831,'Guernsey ','Otok Guernsey','Bailwick of Goursey je Britanski otok ob Franciji.'),('GH','GHA',288,'Ghana ','Gana',''),('GI','GIB',292,'Gibraltar ','Gibraltar',''),('GL','GRL',304,'Greenland ','Grenlandija',''),('GM','GMB',270,'Gambia ','Gambija',''),('GN','GIN',324,'Guinea ','Gvineja',''),('GP','GLP',312,'Guadeloupe ','Guadeloupe','Čezmorski otok Francije v Karibskem morju.'),('GQ','GNQ',226,'Equatorial Guinea ','Ekvatorialna Gvineja','Koda po francoskem nazivu: Guinée équatoriale.'),('GR','GRC',300,'Greece ','Grčija',''),('GS','SGS',239,'South Georgia and the South Sandwich Islands ','Južna Georgia in Južni Sandwichevi otoki','Čezmorsko otočje Velike Britanije na jugu Atlantskega oceana.'),('GT','GTM',320,'Guatemala ','Gvatemala',''),('GU','GUM',316,'Guam ','Guam','Zunanji teritorij ZDA v Tihem oceanu (tudi Guahan).'),('GW','GNB',624,'Guinea-Bissau ','Gvineja-Bissau',''),('GY','GUY',328,'Guyana ','Gvajana',''),('HK','HKG',344,'Hong Kong ','Hong Kong',''),('HM','HMD',334,'Heard Island and McDonald Islands ','Otok Heard in otočje McDonald','Nenaseljeno otočje v Indijskem oceanu pod upravo Avstralije.'),('HN','HND',340,'Honduras ','Honduras',''),('HR','HRV',191,'Croatia ','Hrvaška','Koda po nazivu v hrvaščini: Hrvatska.'),('HT','HTI',332,'Haiti ','Haiti',''),('HU','HUN',348,'Hungary ','Madžarska',''),('ID','IDN',360,'Indonesia ','Indonezija',''),('IE','IRL',372,'Ireland ','Irska',''),('IL','ISR',376,'Israel ','Izrael',''),('IM','IMN',833,'Isle of Man ','Otok Man','Spada neposredno pod Britansko krono a ni del Velike Britanije, nahaja se med Irsko in Veliko Britanijo.'),('IN','IND',356,'India ','Indija',''),('IO','IOT',86,'British Indian Ocean Territory ','Britansko ozemlje v Indijskem oceanu',''),('IQ','IRQ',368,'Iraq ','Irak',''),('IR','IRN',364,'Iran, Islamic Republic of ','Iran',''),('IS','ISL',352,'Iceland ','Islandija','Koda po nazivu v islandščini: Ísland.'),('IT','ITA',380,'Italy ','Italija',''),('JE','JEY',832,'Jersey ','Otok Jersey','Bailwick of Jersey je Britanski otok med Anglijo in Francijo.'),('JM','JAM',388,'Jamaica ','Jamajka',''),('JO','JOR',400,'Jordan ','Jordanija',''),('JP','JPN',392,'Japan ','Japonska',''),('KE','KEN',404,'Kenya ','Kenija',''),('KG','KGZ',417,'Kyrgyzstan ','Kirgizistan (Kirgizija)',''),('KH','KHM',116,'Cambodia ','Kambodža','Koda po bivšem nazivu: Khmer Republic. Bivši ISO naziv države: Kampuchea.'),('KI','KIR',296,'Kiribati ','Kiribati','Razpršeno otočje v Tihem oceanu. Stari naziv: Gilbertovi otoki.'),('KM','COM',174,'Comoros ','Komori','Otočje v Indijskem oceanu. Koda po nazivu v komorščini: Komori.'),('KN','KNA',659,'Saint Kitts and Nevis ','Sveti Kits in Nevis','Otoška državica v karibskih Malih Antilih. Bivši ISO naziv države: Saint Kitts-Nevis-Anguilla.'),('KP','PRK',408,'Korea, Democratic People\'s Republic of ','Severna Koreja','ISO naziv države po uradnem nazivu v ZN (splošno ime: Severna Koreja).'),('KR','KOR',410,'Korea, Republic of ','Južna Koreja','ISO naziv države po uradnem nazivu v ZN (splošno ime: Južna Koreja).'),('KW','KWT',414,'Kuwait ','Kuvajt',''),('KY','CYM',136,'Cayman Islands ','Kajmanski otoki',''),('KZ','KAZ',398,'Kazakhstan ','Kazahstan','Bivši ISO naziv države: Kazakstan.'),('LA','LAO',418,'Lao People\'s Democratic Republic ','Laos',''),('LB','LBN',422,'Lebanon ','Libanon',''),('LC','LCA',662,'Saint Lucia ','Sveta Lucija','Otoška država v južnem Karibskem morju.'),('LI','LIE',438,'Liechtenstein ','Lihtenštajn',''),('LK','LKA',144,'Sri Lanka ','Šri Lanka',''),('LR','LBR',430,'Liberia ','Liberija',''),('LS','LSO',426,'Lesotho ','Lesoto',''),('LT','LTU',440,'Lithuania ','Litva',''),('LU','LUX',442,'Luxembourg ','Luksemburg',''),('LV','LVA',428,'Latvia ','Latvija',''),('LY','LBY',434,'Libya ','Libija','Bivši ISO naziv države: Libyan Arab Jamahiriya.'),('MA','MAR',504,'Morocco ','Maroko',''),('MC','MCO',492,'Monaco ','Monako',''),('MD','MDA',498,'Moldova, Republic of ','Moldavija',''),('ME','MNE',499,'Montenegro ','Črna Gora',''),('MF','MAF',663,'Saint Martin (French part) ','Otok svetega Martina','Čezmorsko otočje Francije v Karibskem morju. Nizozmski del otoka Sv. Martina ima kodo SX.'),('MG','MDG',450,'Madagascar ','Madagaskar',''),('MH','MHL',584,'Marshall Islands ','Maršalovi otoki','Majhno otočje v Tihem oceanu.'),('MK','MKD',807,'Macedonia, the former Yugoslav Republic of ','Makedonija','ISO naziv države glede na spor o nazivu države. Uradno domače ime države: Republika Makedonija.'),('ML','MLI',466,'Mali ','Mali',''),('MM','MMR',104,'Myanmar ','Mjanmar','Bivši naziv: Burma (BU).'),('MN','MNG',496,'Mongolia ','Mongolija',''),('MO','MAC',446,'Macao ','Makao','Bivši ISO naziv države: Macau.'),('MP','MNP',580,'Northern Mariana Islands ','Severni Marianski otoki','Ameriško otočje v severnem Tihem oceanu.'),('MQ','MTQ',474,'Martinique ','Martinik','Čezmorski otok Francije v malih Antilih v Karibsekm morju.'),('MR','MRT',478,'Mauritania ','Mavretanija',''),('MS','MSR',500,'Montserrat ','Montserat','Otok v Antilih v Karibskem morju odvisen od Velike Britanije.'),('MT','MLT',470,'Malta ','Malta',''),('MU','MUS',480,'Mauritius ','Mauricius (Moris)','Domačini v kreolščini imenujejo otok: Moris.'),('MV','MDV',462,'Maldives ','Maldivi',''),('MW','MWI',454,'Malawi ','Malavi',''),('MX','MEX',484,'Mexico ','Mehika',''),('MY','MYS',458,'Malaysia ','Malezija',''),('MZ','MOZ',508,'Mozambique ','Mozambik',''),('NA','NAM',516,'Namibia ','Namibija',''),('NC','NCL',540,'New Caledonia ','Nova Kaledonija','Čezmorsko otočje Francije v Pacifiku.'),('NE','NER',562,'Niger ','Niger ',''),('NF','NFK',574,'Norfolk Island ','Otok Norflok','Del Avstralije s samoupravo.'),('NG','NGA',566,'Nigeria ','Nigerija',''),('NI','NIC',558,'Nicaragua ','Nikaragva',''),('NL','NLD',528,'Netherlands ','Nizozemska',''),('NO','NOR',578,'Norway ','Norveška',''),('NP','NPL',524,'Nepal ','Nepal',''),('NR','NRU',520,'Nauru ','Nauru','Otoška država v Južnem Tihem oceanu.'),('NU','NIU',570,'Niue ','Niu','Otoška država v Južnem Tihem oceanu.'),('NZ','NZL',554,'New Zealand ','Nova Zelandija',''),('OM','OMN',512,'Oman ','Oman',''),('PA','PAN',591,'Panama ','Panama',''),('PE','PER',604,'Peru ','Peru',''),('PF','PYF',258,'French Polynesia ','Francoska Polinezija','Čezmorsko otočje Francije v južnem Tihem oceanu. Koda po francoskem nazivu: Polynésie française.'),('PG','PNG',598,'Papua New Guinea ','Papua Nova Gvineja',''),('PH','PHL',608,'Philippines ','Filipini',''),('PK','PAK',586,'Pakistan ','Pakistan',''),('PL','POL',616,'Poland ','Poljska',''),('PM','SPM',666,'Saint Pierre and Miquelon ','Sveta Pierre in Miquelon','Čezmorsko otočje Francije ob Kanadi in Grenlandiji.'),('PN','PCN',612,'Pitcairn ','Pitcairnovi otoki','Čezmorsko otočje Velike Britanije v Tihem oceanu.'),('PR','PRI',630,'Puerto Rico ','Portoriko',''),('PS','PSE',275,'Palestinian Territory, Occupied ','Palestina','Sestavljena iz Zahodnega brega in Gaze.'),('PT','PRT',620,'Portugal ','Portugalska',''),('PW','PLW',585,'Palau ','Palau ','Majhna otoška država v Tihem oceanu.'),('PY','PRY',600,'Paraguay ','Paragvaj',''),('QA','QAT',634,'Qatar ','Katar',''),('RE','REU',638,'Réunion ','Francoska skupnost Reunion','Čezmorska otoška skupnost Francije v Indijskem oceanu.'),('RO','ROU',642,'Romania ','Romunija',''),('RS','SRB',688,'Serbia ','Srbija','Koda po uradnem nazivu: Republika Srbija.'),('RU','RUS',643,'Russian Federation ','Ruska federacija',''),('RW','RWA',646,'Rwanda ','Ruanda',''),('SA','SAU',682,'Saudi Arabia ','Savdska Arabija',''),('SB','SLB',90,'Solomon Islands ','Solomonovi otoki','Koda izhaja iz starega naziva: British Solomon Islands.'),('SC','SYC',690,'Seychelles ','Sejšeli',''),('SD','SDN',729,'Sudan ','Sudan',''),('SE','SWE',752,'Sweden ','Švedska',''),('SG','SGP',702,'Singapore ','Singapur',''),('SH','SHN',654,'Saint Helena, Ascension and Tristan da Cunha ','Sveta Helena','Čezmorsko ozemlje Sveta Helena Velike Britanije v Atlantskem oceanu. Bivši ISO naziv države: Saint Helena.'),('SI','SVN',705,'Slovenia ','Slovenija',''),('SJ','SJM',744,'Svalbard and Jan Mayen ','Svalbard in Jan Majen ','Sestavljata ga dva arktična ozemlja pod suverenostjo Norveške: Svalbardski otoki in otok Jan Mayen.'),('SK','SVK',703,'Slovakia ','Slovaška','SK je prej predstavljal: Sikkim.'),('SL','SLE',694,'Sierra Leone ','Siera Leone',''),('SM','SMR',674,'San Marino ','San Marino',''),('SN','SEN',686,'Senegal ','Senegal',''),('SO','SOM',706,'Somalia ','Somalija',''),('SR','SUR',740,'Suriname ','Surinam',''),('SS','SSD',728,'South Sudan ','Južni Sudan',''),('ST','STP',678,'Sao Tome and Principe ','Sao Tome in Principe','Majhna otoška država v Gvinejskem zalivu ob Afriki.'),('SV','SLV',222,'El Salvador ','Salvador',''),('SX','SXM',534,'Sint Maarten (Dutch part) ','Otok svetega.Martina (Nizozemska)','Francoski del otoka Sv. Martina ima ISO kodo MF. Nahaja se v Karibskem morju.'),('SY','SYR',760,'Syrian Arab Republic ','Sirija',''),('SZ','SWZ',748,'Swaziland ','Svazi',''),('TC','TCA',796,'Turks and Caicos Islands ','Tirški in Kajkoški otoki','Čezmorska skupnost Velike Britanije v Karibskem morju.'),('TD','TCD',148,'Chad ','Čad','Koda po francoskem nazivu: Tchad.'),('TF','ATF',260,'French Southern Territories ','Francoska južna ozemlja','Predstavlja francoske vulkanske otoke JV od Afrike v Indijskem oceanu in del antarktike, ki Franciji niso mednarodno priznani. Koda po francokem nazivu: Terres australes françaises.'),('TG','TGO',768,'Togo ','Togo',''),('TH','THA',764,'Thailand ','Tajska',''),('TJ','TJK',762,'Tajikistan ','Tadžikistan',''),('TK','TKL',772,'Tokelau ','Tokelau','Trije koralni otoki pod upravo Nove Zelandije.'),('TL','TLS',626,'Timor-Leste ','Vzhodni Timor','Bivši naziv: East Timor (TP). Majhna otoška država v JV Aziji.'),('TM','TKM',795,'Turkmenistan ','Turkmenistan',''),('TN','TUN',788,'Tunisia ','Tunizija',''),('TO','TON',776,'Tonga ','Tonga','Majhna otoška država v Tihem oceanu.'),('TR','TUR',792,'Turkey ','Turčija',''),('TT','TTO',780,'Trinidad and Tobago ','Trinidad in Tobago',''),('TV','TUV',798,'Tuvalu ','Tuvalu','Majhna otoška država v Tihem oceanu.'),('TW','TWN',158,'Taiwan, Province of China ','Tajvan',''),('TZ','TZA',834,'Tanzania, United Republic of ','Tanzanija',''),('UA','UKR',804,'Ukraine ','Ukrajina','Bivši ISO naziv države: Ukrainian SSR. '),('UG','UGA',800,'Uganda ','Uganda',''),('UM','UMI',581,'United States Minor Outlying Islands ','ZDA zunanji otoki','Sestavljeno iz devetih manjših otokov ZDA: Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Islands, Navassa Island, Palmyra Atoll, and Wake Island.'),('US','USA',840,'United States ','Združene države Amerike',''),('UY','URY',858,'Uruguay ','Urugvaj',''),('UZ','UZB',860,'Uzbekistan ','Uzbekistan',''),('VA','VAT',336,'Holy See (Vatican City State) ','Vatikan','Bivši ISO naziv države: Vatican City State (Vatikanska mestna država).'),('VC','VCT',670,'Saint Vincent and the Grenadines ','Sveti Vincent in Grenadini','Majhna otoška država v Karibskem otočju.'),('VE','VEN',862,'Venezuela, Bolivarian Republic of ','Venezuela',''),('VG','VGB',92,'Virgin Islands, British ','Britanski Deviški otoki','Čezmorska skupnost Velike Britanije v Karibskem morju.'),('VI','VIR',850,'Virgin Islands, U.S. ','Ameriški Deviški otoki',''),('VN','VNM',704,'Viet Nam ','Vietnam',''),('VU','VUT',548,'Vanuatu ','Republika Vanuatu','Stari naziv: New Hebrides (NH).'),('WF','WLF',876,'Wallis and Futuna ','Otočje Valis in Futuna','Čezmorska skupnost Francije v Pacifiku.'),('WS','WSM',882,'Samoa ','Samoa','Koda nastala po bivšem nazivu: Western Samoa (Zahodna Samoa).'),('YE','YEM',887,'Yemen ','Jemen','Bivši ISO naziv države: Republic of Yemen, koda se je uporabljala za Severni Jemen pred letom 1990.'),('YT','MYT',175,'Mayotte ','Francoska skupnost Mejot','Čezmorska skupnost Francije ob vzhodni obali Afrike.'),('ZA','ZAF',710,'South Africa ','Južna afrika','Koda iz naziva v nizozemščini: Zuid-Afrika.'),('ZM','ZMB',894,'Zambia ','Zambija',''),('ZW','ZWE',716,'Zimbabwe ','Zimbabve','Naziv se je spremenil iz: Suthern Rhodesia (RH, Južna Rodezija).');
/*!40000 ALTER TABLE `Drzava` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Izbrani_predmeti`
--

DROP TABLE IF EXISTS `Izbrani_predmeti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Izbrani_predmeti` (
  `Vpis_studijsko_letoFK` varchar(45) COLLATE utf8_bin NOT NULL,
  `Vpis_sifra_stProgramFK` varchar(8) COLLATE utf8_bin NOT NULL,
  `Vpis_vpisna_st` int(11) NOT NULL,
  `Predmetnik_sifra_predmetaFK` int(11) NOT NULL,
  `Predmetnik_sifra_predmetnikaFK` int(11) NOT NULL,
  `Predmetnik_letnikFK` int(11) NOT NULL,
  PRIMARY KEY (`Vpis_studijsko_letoFK`,`Vpis_sifra_stProgramFK`,`Vpis_vpisna_st`,`Predmetnik_sifra_predmetaFK`,`Predmetnik_sifra_predmetnikaFK`,`Predmetnik_letnikFK`),
  KEY `fk_Vpis_has_Predmetnik_Predmetnik1_idx` (`Predmetnik_sifra_predmetaFK`,`Predmetnik_sifra_predmetnikaFK`,`Predmetnik_letnikFK`),
  KEY `fk_Vpis_has_Predmetnik_Vpis1_idx` (`Vpis_studijsko_letoFK`,`Vpis_sifra_stProgramFK`,`Vpis_vpisna_st`),
  CONSTRAINT `fk_Vpis_has_Predmetnik_Predmetnik1` FOREIGN KEY (`Predmetnik_sifra_predmetaFK`, `Predmetnik_sifra_predmetnikaFK`, `Predmetnik_letnikFK`) REFERENCES `Predmetnik` (`sifra_predmetaFK`, `sifra_predmetnikaFK`, `letnikFK`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_has_Predmetnik_Vpis1` FOREIGN KEY (`Vpis_studijsko_letoFK`, `Vpis_sifra_stProgramFK`, `Vpis_vpisna_st`) REFERENCES `Vpis` (`studijsko_letoFK`, `sifra_stProgramFK`, `vpisna_st`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Izbrani_predmeti`
--

LOCK TABLES `Izbrani_predmeti` WRITE;
/*!40000 ALTER TABLE `Izbrani_predmeti` DISABLE KEYS */;
INSERT INTO `Izbrani_predmeti` VALUES ('2015/2016','VT',63150002,63202,1,1),('2015/2016','VT',63150003,63202,1,1),('2016/2017','VT',63160001,63202,1,1),('2016/2017','VT',63160002,63202,1,1),('2016/2017','VT',63160003,63202,1,1),('2017/2018','VT',63170001,63202,1,1),('2017/2018','VT',63170002,63202,1,1),('2017/2018','VT',63170003,63202,1,1),('2017/2018','VT',63170004,63202,1,1),('2017/2018','VT',63170005,63202,1,1),('2017/2018','VT',63170006,63202,1,1),('2017/2018','VT',63170007,63202,1,1),('2017/2018','VT',63170008,63202,1,1),('2017/2018','VT',63170009,63202,1,1),('2017/2018','VT',63170010,63202,1,1),('2017/2018','VT',63170011,63202,1,1),('2017/2018','VT',63170012,63202,1,1),('2017/2018','VT',63170013,63202,1,1),('2017/2018','VT',63170014,63202,1,1),('2015/2016','VT',63150002,63203,1,1),('2015/2016','VT',63150003,63203,1,1),('2016/2017','VT',63160001,63203,1,1),('2016/2017','VT',63160002,63203,1,1),('2016/2017','VT',63160003,63203,1,1),('2017/2018','VT',63170001,63203,1,1),('2017/2018','VT',63170002,63203,1,1),('2017/2018','VT',63170003,63203,1,1),('2017/2018','VT',63170004,63203,1,1),('2017/2018','VT',63170005,63203,1,1),('2017/2018','VT',63170006,63203,1,1),('2017/2018','VT',63170007,63203,1,1),('2017/2018','VT',63170008,63203,1,1),('2017/2018','VT',63170009,63203,1,1),('2017/2018','VT',63170010,63203,1,1),('2017/2018','VT',63170011,63203,1,1),('2017/2018','VT',63170012,63203,1,1),('2017/2018','VT',63170013,63203,1,1),('2017/2018','VT',63170014,63203,1,1),('2015/2016','VT',63150002,63204,1,1),('2015/2016','VT',63150003,63204,1,1),('2016/2017','VT',63160001,63204,1,1),('2016/2017','VT',63160002,63204,1,1),('2016/2017','VT',63160003,63204,1,1),('2017/2018','VT',63170001,63204,1,1),('2017/2018','VT',63170002,63204,1,1),('2017/2018','VT',63170003,63204,1,1),('2017/2018','VT',63170004,63204,1,1),('2017/2018','VT',63170005,63204,1,1),('2017/2018','VT',63170006,63204,1,1),('2017/2018','VT',63170007,63204,1,1),('2017/2018','VT',63170008,63204,1,1),('2017/2018','VT',63170009,63204,1,1),('2017/2018','VT',63170010,63204,1,1),('2017/2018','VT',63170011,63204,1,1),('2017/2018','VT',63170012,63204,1,1),('2017/2018','VT',63170013,63204,1,1),('2017/2018','VT',63170014,63204,1,1),('2015/2016','VT',63150002,63205,1,1),('2015/2016','VT',63150003,63205,1,1),('2016/2017','VT',63160001,63205,1,1),('2016/2017','VT',63160002,63205,1,1),('2016/2017','VT',63160003,63205,1,1),('2017/2018','VT',63170001,63205,1,1),('2017/2018','VT',63170002,63205,1,1),('2017/2018','VT',63170003,63205,1,1),('2017/2018','VT',63170004,63205,1,1),('2017/2018','VT',63170005,63205,1,1),('2017/2018','VT',63170006,63205,1,1),('2017/2018','VT',63170007,63205,1,1),('2017/2018','VT',63170008,63205,1,1),('2017/2018','VT',63170009,63205,1,1),('2017/2018','VT',63170010,63205,1,1),('2017/2018','VT',63170011,63205,1,1),('2017/2018','VT',63170012,63205,1,1),('2017/2018','VT',63170013,63205,1,1),('2017/2018','VT',63170014,63205,1,1),('2015/2016','VT',63150002,63207,1,1),('2015/2016','VT',63150003,63207,1,1),('2016/2017','VT',63160001,63207,1,1),('2016/2017','VT',63160002,63207,1,1),('2016/2017','VT',63160003,63207,1,1),('2017/2018','VT',63170001,63207,1,1),('2017/2018','VT',63170002,63207,1,1),('2017/2018','VT',63170003,63207,1,1),('2017/2018','VT',63170004,63207,1,1),('2017/2018','VT',63170005,63207,1,1),('2017/2018','VT',63170006,63207,1,1),('2017/2018','VT',63170007,63207,1,1),('2017/2018','VT',63170008,63207,1,1),('2017/2018','VT',63170009,63207,1,1),('2017/2018','VT',63170010,63207,1,1),('2017/2018','VT',63170011,63207,1,1),('2017/2018','VT',63170012,63207,1,1),('2017/2018','VT',63170013,63207,1,1),('2017/2018','VT',63170014,63207,1,1),('2016/2017','VT',63150001,63208,1,2),('2016/2017','VT',63150002,63208,1,2),('2016/2017','VT',63150003,63208,1,2),('2017/2018','VT',63160001,63208,1,2),('2017/2018','VT',63160002,63208,1,2),('2017/2018','VT',63160003,63208,1,2),('2018/2019','VT',63170001,63208,1,2),('2015/2016','VT',63150002,63209,1,1),('2015/2016','VT',63150003,63209,1,1),('2016/2017','VT',63160001,63209,1,1),('2016/2017','VT',63160002,63209,1,1),('2016/2017','VT',63160003,63209,1,1),('2017/2018','VT',63170001,63209,1,1),('2017/2018','VT',63170002,63209,1,1),('2017/2018','VT',63170003,63209,1,1),('2017/2018','VT',63170004,63209,1,1),('2017/2018','VT',63170005,63209,1,1),('2017/2018','VT',63170006,63209,1,1),('2017/2018','VT',63170007,63209,1,1),('2017/2018','VT',63170008,63209,1,1),('2017/2018','VT',63170009,63209,1,1),('2017/2018','VT',63170010,63209,1,1),('2017/2018','VT',63170011,63209,1,1),('2017/2018','VT',63170012,63209,1,1),('2017/2018','VT',63170013,63209,1,1),('2017/2018','VT',63170014,63209,1,1),('2015/2016','VT',63150002,63212,1,1),('2015/2016','VT',63150003,63212,1,1),('2016/2017','VT',63160001,63212,1,1),('2016/2017','VT',63160002,63212,1,1),('2016/2017','VT',63160003,63212,1,1),('2017/2018','VT',63170001,63212,1,1),('2017/2018','VT',63170002,63212,1,1),('2017/2018','VT',63170003,63212,1,1),('2017/2018','VT',63170004,63212,1,1),('2017/2018','VT',63170005,63212,1,1),('2017/2018','VT',63170006,63212,1,1),('2017/2018','VT',63170007,63212,1,1),('2017/2018','VT',63170008,63212,1,1),('2017/2018','VT',63170009,63212,1,1),('2017/2018','VT',63170010,63212,1,1),('2017/2018','VT',63170011,63212,1,1),('2017/2018','VT',63170012,63212,1,1),('2017/2018','VT',63170013,63212,1,1),('2017/2018','VT',63170014,63212,1,1),('2016/2017','VT',63150001,63213,1,2),('2016/2017','VT',63150002,63213,1,2),('2016/2017','VT',63150003,63213,1,2),('2017/2018','VT',63160001,63213,1,2),('2017/2018','VT',63160002,63213,1,2),('2017/2018','VT',63160003,63213,1,2),('2017/2018','VT',63150001,63214,1,3),('2017/2018','VT',63150002,63214,1,3),('2017/2018','VT',63150003,63214,1,3),('2018/2019','VT',63170009,63214,1,3),('2015/2016','VT',63150002,63215,1,1),('2015/2016','VT',63150003,63215,1,1),('2016/2017','VT',63160001,63215,1,1),('2016/2017','VT',63160002,63215,1,1),('2016/2017','VT',63160003,63215,1,1),('2017/2018','VT',63170001,63215,1,1),('2017/2018','VT',63170002,63215,1,1),('2017/2018','VT',63170003,63215,1,1),('2017/2018','VT',63170004,63215,1,1),('2017/2018','VT',63170005,63215,1,1),('2017/2018','VT',63170006,63215,1,1),('2017/2018','VT',63170007,63215,1,1),('2017/2018','VT',63170008,63215,1,1),('2017/2018','VT',63170009,63215,1,1),('2017/2018','VT',63170010,63215,1,1),('2017/2018','VT',63170011,63215,1,1),('2017/2018','VT',63170012,63215,1,1),('2017/2018','VT',63170013,63215,1,1),('2017/2018','VT',63170014,63215,1,1),('2016/2017','VT',63150001,63216,1,2),('2016/2017','VT',63150002,63216,1,2),('2016/2017','VT',63150003,63216,1,2),('2017/2018','VT',63160001,63216,1,2),('2017/2018','VT',63160002,63216,1,2),('2017/2018','VT',63160003,63216,1,2),('2018/2019','VT',63170001,63216,1,2),('2016/2017','VT',63150001,63217,1,2),('2016/2017','VT',63150002,63217,1,2),('2016/2017','VT',63150003,63217,1,2),('2017/2018','VT',63160001,63217,1,2),('2017/2018','VT',63160002,63217,1,2),('2017/2018','VT',63160003,63217,1,2),('2018/2019','VT',63170001,63217,1,2),('2016/2017','VT',63150001,63218,1,2),('2016/2017','VT',63150002,63218,1,2),('2016/2017','VT',63150003,63218,1,2),('2017/2018','VT',63160001,63218,1,2),('2017/2018','VT',63160002,63218,1,2),('2017/2018','VT',63160003,63218,1,2),('2018/2019','VT',63170001,63218,1,2),('2016/2017','VT',63150001,63219,2,2),('2016/2017','VT',63150003,63219,2,2),('2017/2018','VT',63160001,63219,2,2),('2017/2018','VT',63160003,63219,2,2),('2018/2019','VT',63170001,63219,2,2),('2016/2017','VT',63150002,63220,2,2),('2017/2018','VT',63160002,63220,2,2),('2016/2017','VT',63150001,63225,3,2),('2016/2017','VT',63150002,63225,3,2),('2017/2018','VT',63160001,63225,3,2),('2017/2018','VT',63160002,63225,3,2),('2017/2018','VT',63150001,63226,4,3),('2017/2018','VT',63150002,63226,4,3),('2018/2019','VT',63170001,63241,3,2),('2018/2019','VT',63170001,63242,3,2),('2016/2017','VT',63150003,63248,3,2),('2017/2018','VT',63160003,63248,3,2),('2017/2018','VT',63150003,63249,4,3),('2017/2018','VT',63150003,63250,4,3),('2018/2019','VT',63170009,63251,3,3),('2017/2018','VT',63150003,63251,4,3),('2017/2018','VT',63150001,63252,4,3),('2017/2018','VT',63150002,63252,4,3),('2017/2018','VT',63150001,63253,4,3),('2017/2018','VT',63150002,63253,4,3),('2018/2019','VT',63170009,63254,3,3),('2017/2018','VT',63150001,63254,4,3),('2017/2018','VT',63150002,63254,4,3),('2017/2018','VT',63150003,63254,4,3),('2017/2018','VT',63150001,63255,4,3),('2017/2018','VT',63150002,63255,4,3),('2017/2018','VT',63150003,63255,4,3),('2017/2018','VT',63150001,63256,1,3),('2017/2018','VT',63150002,63256,1,3),('2017/2018','VT',63150003,63256,1,3),('2018/2019','VT',63170009,63256,1,3),('2018/2019','VT',63170009,63260,4,3),('2018/2019','VT',63170009,63261,4,3),('2017/2018','VT',63150002,63262,3,3),('2018/2019','VT',63170009,63262,3,3),('2017/2018','VT',63150001,63266,3,3),('2017/2018','VT',63150003,63269,3,3),('2015/2016','VT',63150002,63277,1,1),('2015/2016','VT',63150003,63277,1,1),('2016/2017','VT',63160001,63277,1,1),('2016/2017','VT',63160002,63277,1,1),('2016/2017','VT',63160003,63277,1,1),('2017/2018','VT',63170001,63277,1,1),('2017/2018','VT',63170002,63277,1,1),('2017/2018','VT',63170003,63277,1,1),('2017/2018','VT',63170004,63277,1,1),('2017/2018','VT',63170005,63277,1,1),('2017/2018','VT',63170006,63277,1,1),('2017/2018','VT',63170007,63277,1,1),('2017/2018','VT',63170008,63277,1,1),('2017/2018','VT',63170009,63277,1,1),('2017/2018','VT',63170010,63277,1,1),('2017/2018','VT',63170011,63277,1,1),('2017/2018','VT',63170012,63277,1,1),('2017/2018','VT',63170013,63277,1,1),('2017/2018','VT',63170014,63277,1,1),('2015/2016','VT',63150002,63278,1,1),('2015/2016','VT',63150003,63278,1,1),('2016/2017','VT',63160001,63278,1,1),('2016/2017','VT',63160002,63278,1,1),('2016/2017','VT',63160003,63278,1,1),('2017/2018','VT',63170001,63278,1,1),('2017/2018','VT',63170002,63278,1,1),('2017/2018','VT',63170003,63278,1,1),('2017/2018','VT',63170004,63278,1,1),('2017/2018','VT',63170005,63278,1,1),('2017/2018','VT',63170006,63278,1,1),('2017/2018','VT',63170007,63278,1,1),('2017/2018','VT',63170008,63278,1,1),('2017/2018','VT',63170009,63278,1,1),('2017/2018','VT',63170010,63278,1,1),('2017/2018','VT',63170011,63278,1,1),('2017/2018','VT',63170012,63278,1,1),('2017/2018','VT',63170013,63278,1,1),('2017/2018','VT',63170014,63278,1,1),('2016/2017','VT',63150001,63279,1,2),('2016/2017','VT',63150002,63279,1,2),('2016/2017','VT',63150003,63279,1,2),('2017/2018','VT',63160001,63279,1,2),('2017/2018','VT',63160002,63279,1,2),('2017/2018','VT',63160003,63279,1,2),('2018/2019','VT',63170001,63279,1,2),('2016/2017','VT',63150001,63280,1,2),('2016/2017','VT',63150002,63280,1,2),('2016/2017','VT',63150003,63280,1,2),('2017/2018','VT',63160001,63280,1,2),('2017/2018','VT',63160002,63280,1,2),('2017/2018','VT',63160003,63280,1,2),('2018/2019','VT',63170001,63280,1,2),('2017/2018','VT',63150001,63281,1,3),('2017/2018','VT',63150002,63281,1,3),('2017/2018','VT',63150003,63281,1,3),('2018/2019','VT',63170009,63281,1,3),('2016/2017','VT',63150001,63283,1,2),('2016/2017','VT',63150002,63283,1,2),('2016/2017','VT',63150003,63283,1,2),('2017/2018','VT',63160001,63283,1,2),('2017/2018','VT',63160002,63283,1,2),('2017/2018','VT',63160003,63283,1,2),('2018/2019','VT',63170001,63283,1,2),('2017/2018','VT',63150001,63287,4,3),('2017/2018','VT',63150002,63287,4,3),('2017/2018','VT',63150003,63287,4,3);
/*!40000 ALTER TABLE `Izbrani_predmeti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Izpit`
--

DROP TABLE IF EXISTS `Izpit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Izpit` (
  `sifra` int(11) NOT NULL AUTO_INCREMENT,
  `rok` int(11) NOT NULL,
  `Predmet_sifra_predmeta` int(11) NOT NULL,
  `datum` date NOT NULL,
  `lokacija` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `ura` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `profesor_ime` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`sifra`),
  UNIQUE KEY `šifra_UNIQUE` (`sifra`),
  KEY `fk_Izpit_Predmet1` (`Predmet_sifra_predmeta`),
  CONSTRAINT `fk_Izpit_Predmet1` FOREIGN KEY (`Predmet_sifra_predmeta`) REFERENCES `Predmet` (`sifra_predmeta`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Izpit`
--

LOCK TABLES `Izpit` WRITE;
/*!40000 ALTER TABLE `Izpit` DISABLE KEYS */;
INSERT INTO `Izpit` VALUES (30,1,63215,'2016-05-03','PA,PB,P1','12:00','630011 Dejan Lavbič'),(31,2,63215,'2016-05-10','PA,PB,P1','12:00','630011 Dejan Lavbič'),(32,2,63215,'2016-05-24','PA,P1,PB','12:00','630011 Dejan Lavbič'),(33,1,63255,'2017-05-30','PA,PB,P1','12:00','630011 Dejan Lavbič'),(34,2,63215,'2017-05-09','PA,P1,PB','12:00','630011 Dejan Lavbič'),(35,3,63215,'2017-05-23','PA,PB,P2','12:00','630011 Dejan Lavbič'),(36,4,63215,'2017-06-07','PA,PB,P1','12:00','630011 Dejan Lavbič'),(37,1,63215,'2018-05-03','PA,PB,P1','12:00','630011 Dejan Lavbič'),(38,2,63215,'2018-05-31','PA,PB,P1','12:00','630011 Dejan Lavbič'),(39,2,63215,'2018-05-23','PA,PB,P1','12:00','630011 Dejan Lavbič'),(40,4,63215,'2018-06-05','PA,PB,P1','12:00','630011 Dejan Lavbič'),(41,5,63215,'2018-07-24','PA,PB,P1','12:00','630011 Dejan Lavbič'),(42,5,63215,'2017-07-11','PA,PB,P1','','630011 Dejan Lavbič'),(101,2,63207,'2018-06-18','P8,P13','','630006 Bojan Orel'),(102,1,63202,'2018-05-20','P19,P17','','630002 Polona Oblak'),(103,2,63215,'2018-05-29','P9,P5','','630011 Dejan Lavbič'),(104,1,63207,'2017-06-13','P17,P10','','630006 Bojan Orel'),(105,2,63202,'2018-05-27','P18,P13','','630002 Polona Oblak'),(106,3,63202,'2018-09-02','P18,P14','','630002 Polona Oblak'),(107,1,63202,'2016-01-24','P19,P16','','630002 Polona Oblak'),(108,2,63202,'2016-01-28','P16,P13','','630002 Polona Oblak'),(109,1,63203,'2016-01-19','P18,P14','','630003 Gašper Fijavž'),(110,1,63204,'2016-01-25','P11,P8','','630004 Nikolaj Zimic'),(111,1,63205,'2016-02-01','P20,P17','','630005 Irena Drevenšek Olenik'),(112,2,63205,'2016-02-08','P17,P13','','630005 Irena Drevenšek Olenik'),(113,3,63205,'2016-08-29','P21,P18','','630005 Irena Drevenšek Olenik'),(114,1,63207,'2016-02-03','P9,P5','','630006 Bojan Orel'),(115,1,63209,'2016-06-22','P4,PB','','630008 Zoran Bosnić; 630007 Marko Bajec; 630012 Uroš Lotrič'),(116,1,63212,'2016-06-26','P1,PB','','630009 Branko Šter'),(117,1,63215,'2016-06-19','PB','','630011 Dejan Lavbič'),(118,1,63277,'2016-07-03','P1',NULL,'630028 Viljan Mahnič'),(119,1,63278,'2016-07-08','P1',NULL,'630032 Boštjan Slivnik'),(120,1,63208,'2017-01-22','P4','','630007 Marko Bajec'),(121,1,63213,'2016-07-08','P1',NULL,'630010 Aleksandar Jurišić'),(122,1,63216,'2017-01-23','P12,P9','','630012 Uroš Lotrič'),(123,1,63217,'2017-01-26','P6,P4','','630013 Borut Robič'),(124,1,63218,'2017-01-29','P6,P4','','630014 Patricio Bulič'),(125,1,63219,'2017-01-25','P12,P6','','630015 Nežka Mramor Kosta'),(126,1,63225,'2017-02-05','P1','','630019 Bogdan Filipič'),(127,1,63279,'2017-06-25','P4,P2','','630033 Igor Kononenko'),(128,1,63280,'2017-07-08','P1',NULL,'630013 Borut Robič'),(129,1,63283,'2017-07-12','P1',NULL,'630013 Borut Robič'),(130,1,63214,'2018-01-25','P1',NULL,'630008 Zoran Bosnić'),(131,1,63226,'2018-01-29','P5,P1','','630020 Matjaž Kukar'),(132,1,63252,'2018-02-05','P1',NULL,'630007 Marko Bajec'),(133,1,63255,'2018-02-08','P1',NULL,'630011 Dejan Lavbič'),(134,1,63254,'2018-01-29','P2,P4','','630027 Matjaž Branko Jurič'),(135,2,63254,'2018-02-06','PB,PA','','630027 Matjaž Branko Jurič'),(136,1,63202,'2014-05-20','P19,P17','','630002 Polona Oblak');
/*!40000 ALTER TABLE `Izpit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Kandidat`
--

DROP TABLE IF EXISTS `Kandidat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Kandidat` (
  `ime` varchar(45) COLLATE utf8_bin NOT NULL,
  `priimek` varchar(45) COLLATE utf8_bin NOT NULL,
  `Vpis_sifra_stProgramFK` varchar(8) COLLATE utf8_bin NOT NULL,
  `mail` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `vpisna_st` int(11) NOT NULL,
  `geslo` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `izkoriscenost_zetona` int(11) NOT NULL,
  `upIme` varchar(45) COLLATE utf8_bin NOT NULL,
  KEY `fk_Kandidat_Vpis1_idx` (`Vpis_sifra_stProgramFK`),
  KEY `fk_Kandidat_Oseba1_idx` (`upIme`),
  CONSTRAINT `fk_Kandidat_Oseba1` FOREIGN KEY (`upIme`) REFERENCES `Oseba` (`upIme`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Kandidat_Vpis1` FOREIGN KEY (`Vpis_sifra_stProgramFK`) REFERENCES `Vpis` (`sifra_stProgramFK`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Kandidat`
--

LOCK TABLES `Kandidat` WRITE;
/*!40000 ALTER TABLE `Kandidat` DISABLE KEYS */;
/*!40000 ALTER TABLE `Kandidat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Letnik`
--

DROP TABLE IF EXISTS `Letnik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Letnik` (
  `letnik` int(11) NOT NULL,
  PRIMARY KEY (`letnik`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Letnik`
--

LOCK TABLES `Letnik` WRITE;
/*!40000 ALTER TABLE `Letnik` DISABLE KEYS */;
INSERT INTO `Letnik` VALUES (1),(2),(3);
/*!40000 ALTER TABLE `Letnik` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nacin_studija`
--

DROP TABLE IF EXISTS `Nacin_studija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Nacin_studija` (
  `nacin_studija` int(11) NOT NULL,
  `opis` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `ang_opis` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`nacin_studija`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nacin_studija`
--

LOCK TABLES `Nacin_studija` WRITE;
/*!40000 ALTER TABLE `Nacin_studija` DISABLE KEYS */;
INSERT INTO `Nacin_studija` VALUES (1,'redni','full-time'),(3,'izredni','part-time');
/*!40000 ALTER TABLE `Nacin_studija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nivo_studija`
--

DROP TABLE IF EXISTS `Nivo_studija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Nivo_studija` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `opis` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nivo_studija`
--

LOCK TABLES `Nivo_studija` WRITE;
/*!40000 ALTER TABLE `Nivo_studija` DISABLE KEYS */;
INSERT INTO `Nivo_studija` VALUES (1,'Dodiplomski študij/Uni'),(2,'Dodiplomski študij/Vsš'),(3,'Magistrski študij'),(4,'Doktorski študij');
/*!40000 ALTER TABLE `Nivo_studija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nosilec_predmeta`
--

DROP TABLE IF EXISTS `Nosilec_predmeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Nosilec_predmeta` (
  `sifra_opcije` int(11) NOT NULL,
  `sifra_predmetaFK` int(11) NOT NULL,
  `sifra_profesorjaFK1` int(11) NOT NULL,
  `sifra_profesorjaFK2` int(11) DEFAULT NULL,
  `sifra_profesorjaFK3` int(11) DEFAULT NULL,
  PRIMARY KEY (`sifra_opcije`),
  KEY `fk_Nosilec_predmeta_Profesor_idx` (`sifra_profesorjaFK1`),
  KEY `fk_Nosilec_predmeta_Predmet1_idx` (`sifra_predmetaFK`),
  KEY `fk_Nosilec_predmeta_Profesor1_idx` (`sifra_profesorjaFK2`),
  KEY `fk_Nosilec_predmeta_Profesor2_idx` (`sifra_profesorjaFK3`),
  CONSTRAINT `fk_Nosilec_predmeta_Predmet1` FOREIGN KEY (`sifra_predmetaFK`) REFERENCES `Predmet` (`sifra_predmeta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Nosilec_predmeta_Profesor` FOREIGN KEY (`sifra_profesorjaFK1`) REFERENCES `Profesor` (`sifra_profesorja`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Nosilec_predmeta_Profesor1` FOREIGN KEY (`sifra_profesorjaFK2`) REFERENCES `Profesor` (`sifra_profesorja`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Nosilec_predmeta_Profesor2` FOREIGN KEY (`sifra_profesorjaFK3`) REFERENCES `Profesor` (`sifra_profesorja`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nosilec_predmeta`
--

LOCK TABLES `Nosilec_predmeta` WRITE;
/*!40000 ALTER TABLE `Nosilec_predmeta` DISABLE KEYS */;
INSERT INTO `Nosilec_predmeta` VALUES (1,63241,630001,NULL,NULL),(2,63258,630001,NULL,NULL),(3,63708,630001,NULL,NULL),(4,63202,630002,NULL,NULL),(5,63701,630002,NULL,NULL),(6,63203,630003,NULL,NULL),(7,63241,630003,NULL,NULL),(8,63242,630003,NULL,NULL),(9,63705,630003,NULL,NULL),(10,63204,630004,NULL,NULL),(11,63259,630004,NULL,NULL),(12,63205,630005,NULL,NULL),(13,63207,630006,NULL,NULL),(14,63208,630007,NULL,NULL),(15,63252,630007,NULL,NULL),(16,63707,630007,NULL,NULL),(17,63209,630008,NULL,NULL),(18,63214,630008,NULL,NULL),(19,63212,630009,NULL,NULL),(20,63214,630010,NULL,NULL),(21,63710,630010,NULL,NULL),(22,63215,630011,NULL,NULL),(23,63255,630011,NULL,NULL),(24,63216,630012,NULL,NULL),(25,63261,630012,NULL,NULL),(26,63217,630013,NULL,NULL),(27,63280,630013,NULL,NULL),(28,63283,630013,NULL,NULL),(29,63219,630015,NULL,NULL),(30,63218,630014,NULL,NULL),(31,63260,630014,NULL,NULL),(32,63220,630016,NULL,NULL),(33,63221,630017,NULL,NULL),(34,63222,630018,NULL,NULL),(35,63223,630018,NULL,NULL),(36,63224,630018,NULL,NULL),(37,63225,630019,NULL,NULL),(38,63226,630020,NULL,NULL),(39,63248,630021,NULL,NULL),(40,63250,630023,NULL,NULL),(41,63249,630024,NULL,NULL),(42,63251,630025,NULL,NULL),(43,63251,630026,NULL,NULL),(44,63254,630027,NULL,NULL),(45,63256,630028,NULL,NULL),(46,63277,630028,NULL,NULL),(47,63257,630029,NULL,NULL),(48,63262,630029,NULL,NULL),(49,63263,630030,NULL,NULL),(50,63266,630030,NULL,NULL),(51,63264,630031,NULL,NULL),(52,63706,630031,NULL,NULL),(53,63265,630032,NULL,NULL),(54,63278,630032,NULL,NULL),(55,63266,630033,NULL,NULL),(56,63279,630033,NULL,NULL),(57,63267,630034,NULL,NULL),(58,63268,630035,NULL,NULL),(59,63269,630036,NULL,NULL),(60,63270,630037,NULL,NULL),(61,63271,630038,NULL,NULL),(62,63281,630039,NULL,NULL),(63,63284,630040,NULL,NULL),(64,63701,630041,NULL,NULL),(65,63702,630042,NULL,NULL),(66,63703,630043,NULL,NULL),(67,63709,630044,NULL,NULL),(68,63213,630010,NULL,NULL);
/*!40000 ALTER TABLE `Nosilec_predmeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Obcina`
--

DROP TABLE IF EXISTS `Obcina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Obcina` (
  `sifra_obcine` int(11) NOT NULL,
  `ime_obcine` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`sifra_obcine`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Obcina`
--

LOCK TABLES `Obcina` WRITE;
/*!40000 ALTER TABLE `Obcina` DISABLE KEYS */;
INSERT INTO `Obcina` VALUES (1,'Ajdovščina '),(2,'Beltinci '),(3,'Bled '),(4,'Bohinj '),(5,'Borovnica '),(6,'Bovec '),(7,'Brda '),(8,'Brezovica '),(9,'Brežice '),(10,'Tišina '),(11,'Celje '),(12,'Cerklje na Gorenjskem '),(13,'Cerknica '),(14,'Cerkno '),(15,'Črenšovci '),(16,'Črna na Koroškem '),(17,'Črnomelj '),(18,'Destrnik '),(19,'Divača '),(20,'Dobrepolje '),(21,'Dobrova - Polhov Gradec '),(22,'Dol pri Ljubljani '),(23,'Domžale '),(24,'Dornava '),(25,'Dravograd '),(26,'Duplek '),(27,'Gorenja vas - Poljane '),(28,'Gorišnica '),(29,'Gornja Radgona '),(30,'Gornji Grad '),(31,'Gornji Petrovci '),(32,'Grosuplje '),(33,'Šalovci '),(34,'Hrastnik '),(35,'Hrpelje - Kozina '),(36,'Idrija '),(37,'Ig '),(38,'Ilirska Bistrica '),(39,'Ivančna Gorica '),(40,'Izola '),(41,'Jesenice '),(42,'Juršinci '),(43,'Kamnik '),(44,'Kanal '),(45,'Kidričevo '),(46,'Kobarid '),(47,'Kobilje '),(48,'Kočevje '),(49,'Komen '),(50,'Koper '),(51,'Kozje '),(52,'Kranj '),(53,'Kranjska Gora '),(54,'Krško '),(55,'Kungota '),(56,'Kuzma '),(57,'Laško '),(58,'Lenart '),(59,'Lendava '),(60,'Litija '),(61,'Ljubljana '),(62,'Ljubno '),(63,'Ljutomer '),(64,'Logatec '),(65,'Loška dolina '),(66,'Loški Potok '),(67,'Luče '),(68,'Lukovica '),(69,'Majšperk '),(70,'Maribor '),(71,'Medvode '),(72,'Mengeš '),(73,'Metlika '),(74,'Mežica '),(75,'Miren - Kostanjevica '),(76,'Mislinja '),(77,'Moravče '),(78,'Moravske Toplice '),(79,'Mozirje '),(80,'Murska Sobota '),(81,'Muta '),(82,'Naklo '),(83,'Nazarje '),(84,'Nova Gorica '),(85,'Novo mesto '),(86,'Odranci '),(87,'Ormož '),(88,'Osilnica '),(89,'Pesnica '),(90,'Piran '),(91,'Pivka '),(92,'Podčetrtek '),(93,'Podvelka '),(94,'Postojna '),(95,'Preddvor '),(96,'Ptuj '),(97,'Puconci '),(98,'Rače - Fram '),(99,'Radeče '),(100,'Radenci '),(101,'Radlje ob Dravi '),(102,'Radovljica '),(103,'Ravne na Koroškem '),(104,'Ribnica '),(105,'Rogašovci '),(106,'Rogaška Slatina '),(107,'Rogatec '),(108,'Ruše '),(109,'Semič '),(110,'Sevnica '),(111,'Sežana '),(112,'Slovenj Gradec '),(113,'Slovenska Bistrica '),(114,'Slovenske Konjice '),(115,'Starše '),(116,'Sveti Jurij ob Ščavnici '),(117,'Šenčur '),(118,'Šentilj '),(119,'Šentjernej '),(120,'Šentjur pri Celju '),(121,'Škocjan '),(122,'Škofja Loka '),(123,'Škofljica '),(124,'Šmarje pri Jelšah '),(125,'Šmartno ob Paki '),(126,'Šoštanj '),(127,'Štore '),(128,'Tolmin '),(129,'Trbovlje '),(130,'Trebnje '),(131,'Tržič '),(132,'Turnišče '),(133,'Velenje '),(134,'Velike Lašče '),(135,'Videm '),(136,'Vipava '),(137,'Vitanje '),(138,'Vodice '),(139,'Vojnik '),(140,'Vrhnika '),(141,'Vuzenica '),(142,'Zagorje ob Savi '),(143,'Zavrč '),(144,'Zreče '),(146,'Železniki '),(147,'Žiri '),(148,'Benedikt '),(149,'Bistrica ob Sotli '),(150,'Bloke '),(151,'Braslovče '),(152,'Cankova '),(153,'Cerkvenjak '),(154,'Dobje '),(155,'Dobrna '),(156,'Dobrovnik '),(157,'Dolenjske Toplice '),(158,'Grad '),(159,'Hajdina '),(160,'Hoče - Slivnica '),(161,'Hodoš '),(162,'Horjul '),(163,'Jezersko '),(164,'Komenda '),(165,'Kostel '),(166,'Križevci '),(167,'Lovrenc na Pohorju '),(168,'Markovci '),(169,'Miklavž na Dravskem polju'),(170,'Mirna Peč '),(171,'Oplotnica '),(172,'Podlehnik '),(173,'Polzela '),(174,'Prebold '),(175,'Prevalje '),(176,'Razkrižje '),(177,'Ribnica na Pohorju '),(178,'Selnica ob Dravi '),(179,'Sodražica '),(180,'Solčava '),(181,'Sveta Ana '),(182,'Sveti Andraž v Slov. Goricah '),(183,'Šempeter - Vrtojba '),(184,'Tabor '),(185,'Trnovska vas '),(186,'Trzin '),(187,'Velika Polana '),(188,'Veržej '),(189,'Vransko '),(190,'Žalec '),(191,'Žetale '),(192,'Žirovnica '),(193,'Žužemberk '),(194,'Šmartno pri Litiji '),(195,'Apače '),(196,'Cirkulane '),(197,'Kostanjevica na Krki '),(198,'Makole '),(199,'Mokronog - Trebelno '),(200,'Poljčane '),(201,'Renče - Vogrsko '),(202,'Središče ob Dravi '),(203,'Straža '),(204,'Sv. Trojica v Slov. Goricah '),(205,'Sveti Tomaž '),(206,'Šmarješke Toplice '),(207,'Gorje '),(208,'Log - Dragomer '),(209,'Rečica ob Savinji '),(210,'Sveti Jurij v Slov. Goricah '),(211,'Šentrupert '),(212,'Mirna '),(213,'Ankaran');
/*!40000 ALTER TABLE `Obcina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Oblika_studija`
--

DROP TABLE IF EXISTS `Oblika_studija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Oblika_studija` (
  `oblika_studija` int(11) NOT NULL,
  `opis` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `ang_opis` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`oblika_studija`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Oblika_studija`
--

LOCK TABLES `Oblika_studija` WRITE;
/*!40000 ALTER TABLE `Oblika_studija` DISABLE KEYS */;
INSERT INTO `Oblika_studija` VALUES (1,'na lokaciji','on site'),(2,'na daljavo','distance learning'),(3,'e-študij','e-learning');
/*!40000 ALTER TABLE `Oblika_studija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Oseba`
--

DROP TABLE IF EXISTS `Oseba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Oseba` (
  `upIme` varchar(45) COLLATE utf8_bin NOT NULL,
  `geslo` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `vloga` int(11) DEFAULT NULL,
  PRIMARY KEY (`upIme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Oseba`
--

LOCK TABLES `Oseba` WRITE;
/*!40000 ALTER TABLE `Oseba` DISABLE KEYS */;
INSERT INTO `Oseba` VALUES ('630011@profesor.uni-lj.si','pro',2),('630013@profesor.uni-lj.si','pro',2),('630028@profesor.uni-lj.si','pro',2),('admin@admin','admin',4),('an5555@student.uni-lj.si','geslo',1),('an6543@student.uni-lj.si','geslo',1),('fh7777@student.uni-lj.si','geslo',1),('fn0987@student.uni-lj.si','geslo',1),('im7744@student.uni-lj.si','geslo',1),('in1234@student.uni-lj.si','geslo',1),('jh5432@student.uni-lj.si','geslo',1),('jn4444@student.uni-lj.si','geslo',1),('jz7676@student.uni-lj.si','geslo',1),('ls6546@student.uni-lj.si','geslo',1),('mg7878@student.uni-lj.si','geslo',1),('mh9999@student.uni-lj.si','geslo',1),('mk0000@student.uni-lj.si','geslo',1),('mm5678@student.uni-lj.si','geslo',1),('mn4321@student.uni-lj.si','geslo',1),('mp6666@student.uni-lj.si','geslo',1),('mz7654@student.uni-lj.si','geslo',1),('nt7878@student.uni-lj.si','geslo',1),('pro@pro','pro',2),('ref@ref','ref',3),('ts5678@student.uni-lj.si','geslo',1),('zh1234@student.uni-lj.si','geslo',1);
/*!40000 ALTER TABLE `Oseba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posta`
--

DROP TABLE IF EXISTS `Posta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Posta` (
  `postna_stevilka` int(11) NOT NULL,
  `ime_poste` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`postna_stevilka`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posta`
--

LOCK TABLES `Posta` WRITE;
/*!40000 ALTER TABLE `Posta` DISABLE KEYS */;
INSERT INTO `Posta` VALUES (1000,'Ljubljana - dostava'),(1001,'Ljubljana - poštni predali'),(1210,'Ljubljana - Šentvid'),(1211,'Ljubljana - Šmartno'),(1215,'Medvode'),(1216,'Smlednik'),(1217,'Vodice'),(1218,'Komenda'),(1219,'Laze v Tuhinju'),(1221,'Motnik'),(1222,'Trojane'),(1223,'Blagovica'),(1225,'Lukovica'),(1230,'Domžale'),(1231,'Ljubljana - Črnuče'),(1233,'Dob'),(1234,'Mengeš'),(1235,'Radomlje'),(1236,'Trzin'),(1241,'Kamnik'),(1242,'Stahovica'),(1251,'Moravče'),(1252,'Vače'),(1260,'Ljubljana - Polje'),(1261,'Ljubljana - Dobrunje'),(1262,'Dol pri Ljubljani'),(1270,'Litija'),(1272,'Polšnik'),(1273,'Dole pri Litiji'),(1274,'Gabrovka'),(1275,'Šmartno pri Litiji'),(1276,'Primskovo '),(1281,'Kresnice'),(1282,'Sava'),(1290,'Grosuplje'),(1291,'Škofljica'),(1292,'Ig'),(1293,'Šmarje - Sap'),(1294,'Višnja Gora'),(1295,'Ivančna Gorica'),(1296,'Šentvid pri Stični'),(1301,'Krka'),(1303,'Zagradec'),(1310,'Ribnica'),(1311,'Turjak'),(1312,'Videm - Dobrepolje'),(1313,'Struge'),(1314,'Rob'),(1315,'Velike Lašče'),(1316,'Ortnek'),(1317,'Sodražica'),(1318,'Loški Potok'),(1319,'Draga'),(1330,'Kočevje'),(1331,'Dolenja vas'),(1332,'Stara Cerkev'),(1336,'Vas'),(1337,'Osilnica'),(1338,'Kočevska Reka'),(1351,'Brezovica pri Ljubljani'),(1352,'Preserje'),(1353,'Borovnica'),(1354,'Horjul'),(1355,'Polhov Gradec'),(1356,'Dobrova'),(1357,'Notranje Gorice'),(1360,'Vrhnika'),(1370,'Logatec'),(1372,'Hotedršica'),(1373,'Rovte'),(1380,'Cerknica'),(1381,'Rakek'),(1382,'Begunje pri Cerknici'),(1384,'Grahovo'),(1385,'Nova vas'),(1386,'Stari trg pri Ložu'),(1410,'Zagorje ob Savi'),(1411,'Izlake'),(1412,'Kisovec'),(1413,'Čemšenik'),(1414,'Podkum'),(1420,'Trbovlje'),(1423,'Dobovec'),(1430,'Hrastnik'),(1431,'Dol pri Hrastniku'),(1432,'Zidani Most'),(1433,'Radeče'),(1434,'Loka pri Zidanem Mostu'),(1500,'Ljubljana'),(1501,'Ljubljana'),(1502,'Ljubljana'),(1503,'Ljubljana'),(1504,'Ljubljana'),(1505,'Ljubljana'),(1506,'Ljubljana'),(1507,'Ljubljana'),(1508,'Ljubljana'),(1509,'Ljubljana'),(1510,'Ljubljana'),(1511,'Ljubljana'),(1512,'Ljubljana'),(1513,'Ljubljana'),(1514,'Ljubljana'),(1516,'Ljubljana'),(1517,'Ljubljana'),(1518,'Ljubljana'),(1519,'Ljubljana'),(1520,'Ljubljana'),(1521,'Ljubljana'),(1522,'Ljubljana'),(1523,'Ljubljana'),(1524,'Ljubljana'),(1525,'Ljubljana'),(1526,'Ljubljana'),(1527,'Ljubljana'),(1528,'Ljubljana'),(1529,'Ljubljana'),(1532,'Ljubljana'),(1533,'Ljubljana'),(1534,'Ljubljana'),(1535,'Ljubljana'),(1536,'Ljubljana'),(1537,'Ljubljana'),(1538,'Ljubljana'),(1540,'Ljubljana'),(1542,'Ljubljana'),(1543,'Ljubljana'),(1544,'Ljubljana'),(1545,'Ljubljana'),(1546,'Ljubljana'),(1547,'Ljubljana'),(1550,'Ljubljana'),(1600,'Ljubljana'),(1603,'Ljubljana'),(2000,'Maribor - dostava'),(2001,'Maribor - poštni predali'),(2201,'Zgornja Kungota'),(2204,'Miklavž na Dravskem polju'),(2205,'Starše'),(2206,'Marjeta na Dravskem polju'),(2208,'Pohorje'),(2211,'Pesnica pri Mariboru'),(2212,'Šentilj v Slovenskih goricah'),(2213,'Zgornja Velka'),(2214,'Sladki Vrh'),(2215,'Ceršak'),(2221,'Jarenina'),(2222,'Jakobski Dol'),(2223,'Jurovski Dol'),(2229,'Malečnik'),(2230,'Lenart v Slovenskih goricah'),(2231,'Pernica'),(2232,'Voličina'),(2233,'Sv. Ana v Slovenskih goricah'),(2234,'Benedikt'),(2235,'Sv. Trojica v Slovenskih goricah'),(2236,'Cerkvenjak'),(2241,'Spodnji Duplek'),(2242,'Zgornja Korena'),(2250,'Ptuj'),(2252,'Dornava'),(2253,'Destrnik'),(2254,'Trnovska vas'),(2255,'Vitomarci'),(2256,'Juršinci'),(2257,'Polenšak'),(2258,'Sveti Tomaž'),(2259,'Ivanjkovci'),(2270,'Ormož'),(2272,'Gorišnica'),(2273,'Podgorci'),(2274,'Velika Nedelja'),(2275,'Miklavž pri Ormožu'),(2276,'Kog'),(2277,'Središče ob Dravi'),(2281,'Markovci'),(2282,'Cirkulane'),(2283,'Zavrč'),(2284,'Videm pri Ptuju'),(2285,'Zgornji Leskovec'),(2286,'Podlehnik'),(2287,'Žetale'),(2288,'Hajdina'),(2289,'Stoperce'),(2310,'Slovenska Bistrica'),(2311,'Hoče'),(2312,'Orehova vas'),(2313,'Fram'),(2314,'Zgornja Polskava'),(2315,'Šmartno na Pohorju'),(2316,'Zgornja Ložnica'),(2317,'Oplotnica'),(2318,'Laporje'),(2319,'Poljčane'),(2321,'Makole'),(2322,'Majšperk'),(2323,'Ptujska Gora'),(2324,'Lovrenc na Dravskem polju'),(2325,'Kidričevo'),(2326,'Cirkovce'),(2327,'Rače'),(2331,'Pragersko'),(2341,'Limbuš'),(2342,'Ruše'),(2343,'Fala'),(2344,'Lovrenc na Pohorju'),(2345,'Bistrica ob Dravi'),(2351,'Kamnica'),(2352,'Selnica ob Dravi'),(2353,'Sv. Duh na Ostrem Vrhu'),(2354,'Bresternica'),(2360,'Radlje ob Dravi'),(2361,'Ožbalt'),(2362,'Kapla'),(2363,'Podvelka'),(2364,'Ribnica na Pohorju'),(2365,'Vuhred'),(2366,'Muta'),(2367,'Vuzenica'),(2370,'Dravograd'),(2371,'Trbonje'),(2372,'Libeliče'),(2373,'Šentjanž pri Dravogradu'),(2380,'Slovenj Gradec'),(2381,'Podgorje pri Slovenj Gradcu'),(2382,'Mislinja'),(2383,'Šmartno pri Slovenj Gradcu'),(2390,'Ravne na Koroškem'),(2391,'Prevalje'),(2392,'Mežica'),(2393,'Črna na Koroškem'),(2394,'Kotlje'),(2500,'Maribor'),(2501,'Maribor'),(2502,'Maribor'),(2503,'Maribor'),(2504,'Maribor'),(2505,'Maribor'),(2506,'Maribor'),(2507,'Maribor'),(2508,'Maribor'),(2509,'Maribor'),(2600,'Maribor'),(2603,'Maribor'),(3000,'Celje - dostava'),(3001,'Celje - poštni predali'),(3201,'Šmartno v Rožni dolini'),(3202,'Ljubečna'),(3203,'Nova Cerkev'),(3204,'Dobrna'),(3205,'Vitanje'),(3206,'Stranice'),(3210,'Slovenske Konjice'),(3211,'Škofja vas'),(3212,'Vojnik'),(3213,'Frankolovo'),(3214,'Zreče'),(3215,'Loče'),(3220,'Štore'),(3221,'Teharje'),(3222,'Dramlje'),(3223,'Loka pri Žusmu'),(3224,'Dobje pri Planini'),(3225,'Planina pri Sevnici'),(3230,'Šentjur'),(3231,'Grobelno'),(3232,'Ponikva'),(3233,'Kalobje'),(3240,'Šmarje pri Jelšah'),(3241,'Podplat'),(3250,'Rogaška Slatina'),(3252,'Rogatec'),(3253,'Pristava pri Mestinju'),(3254,'Podčetrtek'),(3255,'Buče'),(3256,'Bistrica ob Sotli'),(3257,'Podsreda'),(3260,'Kozje'),(3261,'Lesično'),(3262,'Prevorje'),(3263,'Gorica pri Slivnici'),(3264,'Sveti Štefan'),(3270,'Laško'),(3271,'Šentrupert'),(3272,'Rimske Toplice'),(3273,'Jurklošter'),(3301,'Petrovče'),(3302,'Griže'),(3303,'Gomilsko'),(3304,'Tabor'),(3305,'Vransko'),(3310,'Žalec'),(3311,'Šempeter v Savinjski dolini'),(3312,'Prebold'),(3313,'Polzela'),(3314,'Braslovče'),(3320,'Velenje - dostava'),(3322,'Velenje - poštni predali'),(3325,'Šoštanj'),(3326,'Topolšica'),(3327,'Šmartno ob Paki'),(3330,'Mozirje'),(3331,'Nazarje'),(3332,'Rečica ob Savinji'),(3333,'Ljubno ob Savinji'),(3334,'Luče'),(3335,'Solčava'),(3341,'Šmartno ob Dreti'),(3342,'Gornji Grad'),(3502,'Celje'),(3503,'Velenje'),(3504,'Velenje'),(3505,'Celje'),(3600,'Celje'),(4000,'Kranj - dostava'),(4001,'Kranj - poštni predali'),(4201,'Zgornja Besnica'),(4202,'Naklo'),(4203,'Duplje'),(4204,'Golnik'),(4205,'Preddvor'),(4206,'Zgornje Jezersko'),(4207,'Cerklje na Gorenjskem'),(4208,'Šenčur'),(4209,'Žabnica'),(4210,'Brnik - aerodrom'),(4211,'Mavčiče'),(4212,'Visoko'),(4220,'Škofja Loka'),(4223,'Poljane nad Škofjo Loko'),(4224,'Gorenja vas'),(4225,'Sovodenj'),(4226,'Žiri'),(4227,'Selca'),(4228,'Železniki'),(4229,'Sorica'),(4240,'Radovljica'),(4243,'Brezje'),(4244,'Podnart'),(4245,'Kropa'),(4246,'Kamna Gorica'),(4247,'Zgornje Gorje'),(4248,'Lesce'),(4260,'Bled'),(4263,'Bohinjska Bela'),(4264,'Bohinjska Bistrica'),(4265,'Bohinjsko jezero'),(4267,'Srednja vas v Bohinju'),(4270,'Jesenice'),(4273,'Blejska Dobrava'),(4274,'Žirovnica'),(4275,'Begunje na Gorenjskem'),(4276,'Hrušica'),(4280,'Kranjska Gora'),(4281,'Mojstrana'),(4282,'Gozd Martuljek'),(4283,'Rateče - Planica'),(4290,'Tržič'),(4294,'Križe'),(4501,'Naklo'),(4502,'Kranj'),(4600,'Kranj'),(5000,'Nova Gorica - dostava'),(5001,'Nova Gorica - poštni predali'),(5210,'Deskle'),(5211,'Kojsko'),(5212,'Dobrovo v Brdih'),(5213,'Kanal'),(5214,'Kal nad Kanalom'),(5215,'Ročinj'),(5216,'Most na Soči'),(5220,'Tolmin'),(5222,'Kobarid'),(5223,'Breginj'),(5224,'Srpenica'),(5230,'Bovec'),(5231,'Log pod Mangartom'),(5232,'Soča'),(5242,'Grahovo ob Bači'),(5243,'Podbrdo'),(5250,'Solkan'),(5251,'Grgar'),(5252,'Trnovo pri Gorici'),(5253,'Čepovan'),(5261,'Šempas'),(5262,'Črniče'),(5263,'Dobravlje'),(5270,'Ajdovščina'),(5271,'Vipava'),(5272,'Podnanos'),(5273,'Col'),(5274,'Črni Vrh nad Idrijo'),(5275,'Godovič'),(5280,'Idrija'),(5281,'Spodnja Idrija'),(5282,'Cerkno'),(5283,'Slap ob Idrijci'),(5290,'Šempeter pri Gorici'),(5291,'Miren'),(5292,'Renče'),(5293,'Volčja Draga'),(5294,'Dornberk'),(5295,'Branik'),(5296,'Kostanjevica na Krasu'),(5297,'Prvačina'),(5600,'Nova Gorica'),(6000,'Koper - Capodistria - dostava'),(6001,'Koper - Capodistria - poštni predali'),(6210,'Sežana'),(6215,'Divača'),(6216,'Podgorje'),(6217,'Vremski Britof'),(6219,'Lokev'),(6221,'Dutovlje'),(6222,'Štanjel'),(6223,'Komen'),(6224,'Senožeče'),(6225,'Hruševje'),(6230,'Postojna'),(6232,'Planina'),(6240,'Kozina'),(6242,'Materija'),(6243,'Obrov'),(6244,'Podgrad'),(6250,'Ilirska Bistrica'),(6253,'Knežak'),(6254,'Jelšane'),(6255,'Prem'),(6256,'Košana'),(6257,'Pivka'),(6258,'Prestranek'),(6271,'Dekani'),(6272,'Gračišče'),(6273,'Marezige'),(6274,'Šmarje'),(6275,'Črni Kal'),(6276,'Pobegi'),(6280,'Ankaran - Ancarano'),(6281,'Škofije'),(6310,'Izola - Isola'),(6320,'Portorož - Portorose'),(6323,'Strunjan - Strugnano (sezonska pošta)'),(6330,'Piran - Pirano'),(6333,'Sečovlje - Sicciole'),(6501,'Koper'),(6502,'Koper'),(6503,'Koper'),(6504,'Koper'),(6505,'Koper'),(6600,'Koper'),(8000,'Novo mesto - dostava'),(8001,'Novo mesto - poštni predali'),(8210,'Trebnje'),(8211,'Dobrnič'),(8212,'Velika Loka'),(8213,'Veliki Gaber'),(8216,'Mirna Peč'),(8220,'Šmarješke Toplice'),(8222,'Otočec'),(8230,'Mokronog'),(8231,'Trebelno '),(8232,'Šentrupert'),(8233,'Mirna'),(8250,'Brežice'),(8251,'Čatež ob Savi'),(8253,'Artiče'),(8254,'Globoko'),(8255,'Pišece'),(8256,'Sromlje '),(8257,'Dobova'),(8258,'Kapele'),(8259,'Bizeljsko'),(8261,'Jesenice na Dolenjskem'),(8262,'Krška vas'),(8263,'Cerklje ob Krki'),(8270,'Krško'),(8272,'Zdole '),(8273,'Leskovec pri Krškem'),(8274,'Raka'),(8275,'Škocjan'),(8276,'Bučka '),(8280,'Brestanica'),(8281,'Senovo'),(8282,'Koprivnica'),(8283,'Blanca'),(8290,'Sevnica'),(8292,'Zabukovje '),(8293,'Studenec'),(8294,'Boštanj'),(8295,'Tržišče'),(8296,'Krmelj'),(8297,'Šentjanž'),(8310,'Šentjernej'),(8311,'Kostanjevica na Krki'),(8312,'Podbočje'),(8321,'Brusnice'),(8322,'Stopiče'),(8323,'Uršna sela'),(8330,'Metlika'),(8331,'Suhor'),(8332,'Gradac'),(8333,'Semič'),(8340,'Črnomelj'),(8341,'Adlešiči'),(8342,'Stari trg ob Kolpi'),(8343,'Dragatuš'),(8344,'Vinica'),(8350,'Dolenjske Toplice'),(8351,'Straža'),(8360,'Žužemberk'),(8361,'Dvor'),(8362,'Hinje'),(8501,'Novo mesto'),(8600,'Novo mesto'),(9000,'Murska Sobota - dostava'),(9001,'Murska Sobota - poštni predali'),(9201,'Puconci'),(9202,'Mačkovci'),(9203,'Petrovci'),(9204,'Šalovci'),(9205,'Hodoš - Hodos'),(9206,'Križevci'),(9207,'Prosenjakovci - Partosfalva'),(9208,'Fokovci'),(9220,'Lendava - Lendva'),(9221,'Martjanci'),(9222,'Bogojina'),(9223,'Dobrovnik - Dobronak '),(9224,'Turnišče'),(9225,'Velika Polana'),(9226,'Moravske Toplice'),(9227,'Kobilje'),(9231,'Beltinci'),(9232,'Črenšovci'),(9233,'Odranci'),(9240,'Ljutomer'),(9241,'Veržej'),(9242,'Križevci pri Ljutomeru'),(9243,'Mala Nedelja'),(9244,'Sv. Jurij ob Ščavnici'),(9245,'Spodnji Ivanjci'),(9250,'Gornja Radgona'),(9251,'Tišina'),(9252,'Radenci'),(9253,'Apače'),(9261,'Cankova'),(9262,'Rogašovci'),(9263,'Kuzma'),(9264,'Grad'),(9265,'Bodonci'),(9501,'Murska Sobota'),(9502,'Radenci'),(9600,'Murska Sobota');
/*!40000 ALTER TABLE `Posta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Predmet`
--

DROP TABLE IF EXISTS `Predmet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Predmet` (
  `sifra_predmeta` int(11) NOT NULL,
  `ime_predmeta` varchar(100) COLLATE utf8_bin NOT NULL,
  `KT_tocke` int(11) DEFAULT NULL,
  PRIMARY KEY (`sifra_predmeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Predmet`
--

LOCK TABLES `Predmet` WRITE;
/*!40000 ALTER TABLE `Predmet` DISABLE KEYS */;
INSERT INTO `Predmet` VALUES (63202,'Osnove matematične analize',6),(63203,'Diskretne strukture',6),(63204,'Osnove digitalnih vezij',6),(63205,'Fizika',6),(63207,'Linearna algebra',6),(63208,'Osnove podatkovnih baz',6),(63209,'Računalniške komunikacije',6),(63212,'Arhitektura računalniških sistemov',6),(63213,'Verjetnost in statistika',6),(63214,'Osnove umetne inteligence',6),(63215,'Osnove informacijskih sistemov',6),(63216,'Teorija informacij in sistemov',6),(63217,'Operacijski sistemi',6),(63218,'Organizacija računalniških sistemov',6),(63219,'Matematično modeliranje',6),(63220,'Principi programskih jezikov',6),(63221,'Računalniške tehnologije ',6),(63222,'Angleški jezik nivo A',3),(63223,'Angleški jezik nivo B',3),(63224,'Angleški jezik nivo C',3),(63225,'Izbrana poglavja iz računalništva in informatike',6),(63226,'Tehnologija upravljanja podatkov',6),(63241,'Računalništvo v praksi 1',3),(63242,'Računalništvo v praksi 2',3),(63248,'Ekonomika in podjetništvo',6),(63249,'Elektronsko poslovanje',6),(63250,'Organizacija in management',6),(63251,'Uvod v odkrivanje znanj iz podatkov',6),(63252,'Razvoj informacijskih sistemov',6),(63253,'Planiranje in upravljanje informatike',6),(63254,'Postopki razvoja programske opreme',6),(63255,'Spletno programiranje',6),(63256,'Tehnologija programske opreme',6),(63257,'Modeliranje računalniških omrežij',6),(63258,'Komunikacijski protokoli',6),(63259,'Brezžična in mobilna omrežja',6),(63260,'Digitalno načrtovanje',6),(63261,'Porazdeljeni sistemi',6),(63262,'Zanesljivost in zmogljivost računalniških sistemov',6),(63263,'Analiza algoritmov in hevristično reševanje problemov',6),(63264,'Sistemska programska oprema',6),(63265,'Prevajalniki',6),(63266,'Inteligentni sistemi',6),(63267,'Umetno zaznavanje',6),(63268,'Razvoj inteligentnih sistemov',6),(63269,'Računalniška grafika in tehnologija iger',6),(63270,'Multimedijski sistemi',6),(63271,'Osnove oblikovanja',6),(63277,'Programiranje 1',6),(63278,'Programiranje 2',6),(63279,'Algoritmi in podatkovne strukture 1',6),(63280,'Algoritmi in podatkovne strukture 2',6),(63281,'Diplomski seminar',6),(63283,'Izračunljivost in računska zahtevnost',6),(63284,'Tehnične veščine',3),(63287,'Programiranje specifičnih platform',6),(63701,'Uvod v računalništvo',6),(63702,'Programiranje 1',6),(63703,'Računalniška arhitektura',6),(63704,'Matematika',6),(63705,'Diskretne strukture',6),(63706,'Programiranje 2',6),(63707,'Osnove podatkovni baz',6),(63708,'Računalniške komunikacije',6),(63709,'Operacijski sistemi',6),(63710,'Osnove verjetnosti in statistike',6);
/*!40000 ALTER TABLE `Predmet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Predmetnik`
--

DROP TABLE IF EXISTS `Predmetnik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Predmetnik` (
  `sifra_predmetaFK` int(11) NOT NULL,
  `sifra_predmetnikaFK` int(11) NOT NULL,
  `letnikFK` int(11) NOT NULL,
  `sifra_stProgramFK` varchar(8) COLLATE utf8_bin NOT NULL,
  `studijsko_letoFK` varchar(45) COLLATE utf8_bin NOT NULL,
  `Nosilec_predmeta_sifra_opcije` int(11) NOT NULL,
  PRIMARY KEY (`sifra_predmetaFK`,`sifra_predmetnikaFK`,`letnikFK`,`sifra_stProgramFK`,`studijsko_letoFK`),
  KEY `fk_Predmetnik_Del_predmetnika1_idx` (`sifra_predmetnikaFK`),
  KEY `fk_Predmetnik_Letnik1_idx` (`letnikFK`),
  KEY `fk_Predmetnik_Studijski_program1_idx` (`sifra_stProgramFK`),
  KEY `fk_Predmetnik_Studijsko_leto1_idx` (`studijsko_letoFK`),
  KEY `fk_Predmetnik_Nosilec_predmeta1_idx` (`Nosilec_predmeta_sifra_opcije`),
  CONSTRAINT `fk_Predmetnik_Del_predmetnika1` FOREIGN KEY (`sifra_predmetnikaFK`) REFERENCES `Del_predmetnika` (`sifra_predmetnika`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Letnik1` FOREIGN KEY (`letnikFK`) REFERENCES `Letnik` (`letnik`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Nosilec_predmeta1` FOREIGN KEY (`Nosilec_predmeta_sifra_opcije`) REFERENCES `Nosilec_predmeta` (`sifra_opcije`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Predmet1` FOREIGN KEY (`sifra_predmetaFK`) REFERENCES `Predmet` (`sifra_predmeta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Studijski_program1` FOREIGN KEY (`sifra_stProgramFK`) REFERENCES `Studijski_program` (`sifra_stProgram`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Studijsko_leto1` FOREIGN KEY (`studijsko_letoFK`) REFERENCES `Studijsko_leto` (`studijsko_leto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Predmetnik`
--

LOCK TABLES `Predmetnik` WRITE;
/*!40000 ALTER TABLE `Predmetnik` DISABLE KEYS */;
INSERT INTO `Predmetnik` VALUES (63253,3,3,'VT','2015/2016',1),(63253,3,3,'VT','2016/2017',1),(63253,3,3,'VT','2017/2018',1),(63253,3,3,'VT','2018/2019',1),(63253,4,3,'VT','2015/2016',1),(63253,4,3,'VT','2016/2017',1),(63253,4,3,'VT','2017/2018',1),(63253,4,3,'VT','2018/2019',1),(63287,3,3,'VT','2015/2016',1),(63287,3,3,'VT','2016/2017',1),(63287,3,3,'VT','2017/2018',1),(63287,3,3,'VT','2018/2019',1),(63287,4,3,'VT','2015/2016',1),(63287,4,3,'VT','2016/2017',1),(63287,4,3,'VT','2017/2018',1),(63287,4,3,'VT','2018/2019',1),(63704,1,1,'VU','2015/2016',1),(63704,1,1,'VU','2016/2017',1),(63704,1,1,'VU','2017/2018',1),(63704,1,1,'VU','2018/2019',1),(63258,3,3,'VT','2015/2016',2),(63258,3,3,'VT','2016/2017',2),(63258,3,3,'VT','2017/2018',2),(63258,3,3,'VT','2018/2019',2),(63258,4,3,'VT','2015/2016',2),(63258,4,3,'VT','2016/2017',2),(63258,4,3,'VT','2017/2018',2),(63258,4,3,'VT','2018/2019',2),(63708,1,1,'VU','2015/2016',3),(63708,1,1,'VU','2016/2017',3),(63708,1,1,'VU','2017/2018',3),(63708,1,1,'VU','2018/2019',3),(63202,1,1,'VT','2015/2016',4),(63202,1,1,'VT','2016/2017',4),(63202,1,1,'VT','2017/2018',4),(63202,1,1,'VT','2018/2019',4),(63701,1,1,'VU','2015/2016',5),(63701,1,1,'VU','2016/2017',5),(63701,1,1,'VU','2017/2018',5),(63701,1,1,'VU','2018/2019',5),(63203,1,1,'VT','2015/2016',6),(63203,1,1,'VT','2016/2017',6),(63203,1,1,'VT','2017/2018',6),(63203,1,1,'VT','2018/2019',6),(63241,3,2,'VT','2015/2016',7),(63241,3,2,'VT','2016/2017',7),(63241,3,2,'VT','2017/2018',7),(63241,3,2,'VT','2018/2019',7),(63241,3,3,'VT','2015/2016',7),(63241,3,3,'VT','2016/2017',7),(63241,3,3,'VT','2017/2018',7),(63241,3,3,'VT','2018/2019',7),(63242,3,2,'VT','2015/2016',8),(63242,3,2,'VT','2016/2017',8),(63242,3,2,'VT','2017/2018',8),(63242,3,2,'VT','2018/2019',8),(63242,3,3,'VT','2015/2016',8),(63242,3,3,'VT','2016/2017',8),(63242,3,3,'VT','2017/2018',8),(63242,3,3,'VT','2018/2019',8),(63705,1,1,'VU','2015/2016',9),(63705,1,1,'VU','2016/2017',9),(63705,1,1,'VU','2017/2018',9),(63705,1,1,'VU','2018/2019',9),(63204,1,1,'VT','2015/2016',10),(63204,1,1,'VT','2016/2017',10),(63204,1,1,'VT','2017/2018',10),(63204,1,1,'VT','2018/2019',10),(63259,3,3,'VT','2015/2016',11),(63259,3,3,'VT','2016/2017',11),(63259,3,3,'VT','2017/2018',11),(63259,3,3,'VT','2018/2019',11),(63259,4,3,'VT','2015/2016',11),(63259,4,3,'VT','2016/2017',11),(63259,4,3,'VT','2017/2018',11),(63259,4,3,'VT','2018/2019',11),(63205,1,1,'VT','2015/2016',12),(63205,1,1,'VT','2016/2017',12),(63205,1,1,'VT','2017/2018',12),(63205,1,1,'VT','2018/2019',12),(63207,1,1,'VT','2015/2016',13),(63207,1,1,'VT','2016/2017',13),(63207,1,1,'VT','2017/2018',13),(63207,1,1,'VT','2018/2019',13),(63208,1,2,'VT','2015/2016',14),(63208,1,2,'VT','2016/2017',14),(63208,1,2,'VT','2017/2018',14),(63208,1,2,'VT','2018/2019',14),(63252,3,3,'VT','2015/2016',15),(63252,3,3,'VT','2016/2017',15),(63252,3,3,'VT','2017/2018',15),(63252,3,3,'VT','2018/2019',15),(63252,4,3,'VT','2015/2016',15),(63252,4,3,'VT','2016/2017',15),(63252,4,3,'VT','2017/2018',15),(63252,4,3,'VT','2018/2019',15),(63707,1,1,'VU','2015/2016',16),(63707,1,1,'VU','2016/2017',16),(63707,1,1,'VU','2017/2018',16),(63707,1,1,'VU','2018/2019',16),(63209,1,1,'VT','2015/2016',17),(63209,1,1,'VT','2016/2017',17),(63209,1,1,'VT','2017/2018',17),(63209,1,1,'VT','2018/2019',17),(63214,1,3,'VT','2015/2016',18),(63214,1,3,'VT','2016/2017',18),(63214,1,3,'VT','2017/2018',18),(63214,1,3,'VT','2018/2019',18),(63212,1,1,'VT','2015/2016',19),(63212,1,1,'VT','2016/2017',19),(63212,1,1,'VT','2017/2018',19),(63212,1,1,'VT','2018/2019',19),(63710,1,1,'VU','2015/2016',21),(63710,1,1,'VU','2016/2017',21),(63710,1,1,'VU','2017/2018',21),(63710,1,1,'VU','2018/2019',21),(63215,1,1,'VT','2015/2016',22),(63215,1,1,'VT','2016/2017',22),(63215,1,1,'VT','2017/2018',22),(63215,1,1,'VT','2018/2019',22),(63255,3,3,'VT','2015/2016',23),(63255,3,3,'VT','2016/2017',23),(63255,3,3,'VT','2017/2018',23),(63255,3,3,'VT','2018/2019',23),(63255,4,3,'VT','2015/2016',23),(63255,4,3,'VT','2016/2017',23),(63255,4,3,'VT','2017/2018',23),(63255,4,3,'VT','2018/2019',23),(63216,1,2,'VT','2015/2016',24),(63216,1,2,'VT','2016/2017',24),(63216,1,2,'VT','2017/2018',24),(63216,1,2,'VT','2018/2019',24),(63261,3,3,'VT','2015/2016',25),(63261,3,3,'VT','2016/2017',25),(63261,3,3,'VT','2017/2018',25),(63261,3,3,'VT','2018/2019',25),(63261,4,3,'VT','2015/2016',25),(63261,4,3,'VT','2016/2017',25),(63261,4,3,'VT','2017/2018',25),(63261,4,3,'VT','2018/2019',25),(63217,1,2,'VT','2015/2016',26),(63217,1,2,'VT','2016/2017',26),(63217,1,2,'VT','2017/2018',26),(63217,1,2,'VT','2018/2019',26),(63280,1,2,'VT','2015/2016',27),(63280,1,2,'VT','2016/2017',27),(63280,1,2,'VT','2017/2018',27),(63280,1,2,'VT','2018/2019',27),(63283,1,2,'VT','2015/2016',28),(63283,1,2,'VT','2016/2017',28),(63283,1,2,'VT','2017/2018',28),(63283,1,2,'VT','2018/2019',28),(63219,2,2,'VT','2015/2016',29),(63219,2,2,'VT','2016/2017',29),(63219,2,2,'VT','2017/2018',29),(63219,2,2,'VT','2018/2019',29),(63219,2,3,'VT','2015/2016',29),(63219,2,3,'VT','2016/2017',29),(63219,2,3,'VT','2017/2018',29),(63219,2,3,'VT','2018/2019',29),(63218,1,2,'VT','2015/2016',30),(63218,1,2,'VT','2016/2017',30),(63218,1,2,'VT','2017/2018',30),(63218,1,2,'VT','2018/2019',30),(63260,3,3,'VT','2015/2016',31),(63260,3,3,'VT','2016/2017',31),(63260,3,3,'VT','2017/2018',31),(63260,3,3,'VT','2018/2019',31),(63260,4,3,'VT','2015/2016',31),(63260,4,3,'VT','2016/2017',31),(63260,4,3,'VT','2017/2018',31),(63260,4,3,'VT','2018/2019',31),(63220,2,2,'VT','2015/2016',32),(63220,2,2,'VT','2016/2017',32),(63220,2,2,'VT','2017/2018',32),(63220,2,2,'VT','2018/2019',32),(63220,2,3,'VT','2015/2016',32),(63220,2,3,'VT','2016/2017',32),(63220,2,3,'VT','2017/2018',32),(63220,2,3,'VT','2018/2019',32),(63221,2,2,'VT','2015/2016',33),(63221,2,2,'VT','2016/2017',33),(63221,2,2,'VT','2017/2018',33),(63221,2,2,'VT','2018/2019',33),(63221,2,3,'VT','2015/2016',33),(63221,2,3,'VT','2016/2017',33),(63221,2,3,'VT','2017/2018',33),(63221,2,3,'VT','2018/2019',33),(63222,3,2,'VT','2015/2016',34),(63222,3,2,'VT','2016/2017',34),(63222,3,2,'VT','2017/2018',34),(63222,3,2,'VT','2018/2019',34),(63222,3,3,'VT','2015/2016',34),(63222,3,3,'VT','2016/2017',34),(63222,3,3,'VT','2017/2018',34),(63222,3,3,'VT','2018/2019',34),(63223,3,2,'VT','2015/2016',35),(63223,3,2,'VT','2016/2017',35),(63223,3,2,'VT','2017/2018',35),(63223,3,2,'VT','2018/2019',35),(63223,3,3,'VT','2015/2016',35),(63223,3,3,'VT','2016/2017',35),(63223,3,3,'VT','2017/2018',35),(63223,3,3,'VT','2018/2019',35),(63224,3,2,'VT','2015/2016',36),(63224,3,2,'VT','2016/2017',36),(63224,3,2,'VT','2017/2018',36),(63224,3,2,'VT','2018/2019',36),(63224,3,3,'VT','2015/2016',36),(63224,3,3,'VT','2016/2017',36),(63224,3,3,'VT','2017/2018',36),(63224,3,3,'VT','2018/2019',36),(63225,3,2,'VT','2015/2016',37),(63225,3,2,'VT','2016/2017',37),(63225,3,2,'VT','2017/2018',37),(63225,3,2,'VT','2018/2019',37),(63225,3,3,'VT','2015/2016',37),(63225,3,3,'VT','2016/2017',37),(63225,3,3,'VT','2017/2018',37),(63225,3,3,'VT','2018/2019',37),(63226,3,3,'VT','2015/2016',38),(63226,3,3,'VT','2016/2017',38),(63226,3,3,'VT','2017/2018',38),(63226,3,3,'VT','2018/2019',38),(63226,4,3,'VT','2015/2016',38),(63226,4,3,'VT','2016/2017',38),(63226,4,3,'VT','2017/2018',38),(63226,4,3,'VT','2018/2019',38),(63248,3,2,'VT','2015/2016',39),(63248,3,2,'VT','2016/2017',39),(63248,3,2,'VT','2017/2018',39),(63248,3,2,'VT','2018/2019',39),(63248,3,3,'VT','2015/2016',39),(63248,3,3,'VT','2016/2017',39),(63248,3,3,'VT','2017/2018',39),(63248,3,3,'VT','2018/2019',39),(63250,3,3,'VT','2015/2016',40),(63250,3,3,'VT','2016/2017',40),(63250,3,3,'VT','2017/2018',40),(63250,3,3,'VT','2018/2019',40),(63250,4,3,'VT','2015/2016',40),(63250,4,3,'VT','2016/2017',40),(63250,4,3,'VT','2017/2018',40),(63250,4,3,'VT','2018/2019',40),(63249,3,3,'VT','2015/2016',41),(63249,3,3,'VT','2016/2017',41),(63249,3,3,'VT','2017/2018',41),(63249,3,3,'VT','2018/2019',41),(63249,4,3,'VT','2015/2016',41),(63249,4,3,'VT','2016/2017',41),(63249,4,3,'VT','2017/2018',41),(63249,4,3,'VT','2018/2019',41),(63251,3,3,'VT','2015/2016',42),(63251,3,3,'VT','2016/2017',42),(63251,3,3,'VT','2017/2018',42),(63251,3,3,'VT','2018/2019',42),(63251,4,3,'VT','2015/2016',42),(63251,4,3,'VT','2016/2017',42),(63251,4,3,'VT','2017/2018',42),(63251,4,3,'VT','2018/2019',42),(63254,3,3,'VT','2015/2016',44),(63254,3,3,'VT','2016/2017',44),(63254,3,3,'VT','2017/2018',44),(63254,3,3,'VT','2018/2019',44),(63254,4,3,'VT','2015/2016',44),(63254,4,3,'VT','2016/2017',44),(63254,4,3,'VT','2017/2018',44),(63254,4,3,'VT','2018/2019',44),(63256,1,3,'VT','2015/2016',45),(63256,1,3,'VT','2016/2017',45),(63256,1,3,'VT','2017/2018',45),(63256,1,3,'VT','2018/2019',45),(63277,1,1,'VT','2015/2016',46),(63277,1,1,'VT','2016/2017',46),(63277,1,1,'VT','2017/2018',46),(63277,1,1,'VT','2018/2019',46),(63257,3,3,'VT','2015/2016',47),(63257,3,3,'VT','2016/2017',47),(63257,3,3,'VT','2017/2018',47),(63257,3,3,'VT','2018/2019',47),(63257,4,3,'VT','2015/2016',47),(63257,4,3,'VT','2016/2017',47),(63257,4,3,'VT','2017/2018',47),(63257,4,3,'VT','2018/2019',47),(63262,3,3,'VT','2015/2016',48),(63262,3,3,'VT','2016/2017',48),(63262,3,3,'VT','2017/2018',48),(63262,3,3,'VT','2018/2019',48),(63262,4,3,'VT','2015/2016',48),(63262,4,3,'VT','2016/2017',48),(63262,4,3,'VT','2017/2018',48),(63262,4,3,'VT','2018/2019',48),(63263,3,3,'VT','2015/2016',49),(63263,3,3,'VT','2016/2017',49),(63263,3,3,'VT','2017/2018',49),(63263,3,3,'VT','2018/2019',49),(63263,4,3,'VT','2015/2016',49),(63263,4,3,'VT','2016/2017',49),(63263,4,3,'VT','2017/2018',49),(63263,4,3,'VT','2018/2019',49),(63266,3,3,'VT','2015/2016',50),(63266,3,3,'VT','2016/2017',50),(63266,3,3,'VT','2017/2018',50),(63266,3,3,'VT','2018/2019',50),(63266,4,3,'VT','2015/2016',50),(63266,4,3,'VT','2016/2017',50),(63266,4,3,'VT','2017/2018',50),(63266,4,3,'VT','2018/2019',50),(63264,3,3,'VT','2015/2016',51),(63264,3,3,'VT','2016/2017',51),(63264,3,3,'VT','2017/2018',51),(63264,3,3,'VT','2018/2019',51),(63264,4,3,'VT','2015/2016',51),(63264,4,3,'VT','2016/2017',51),(63264,4,3,'VT','2017/2018',51),(63264,4,3,'VT','2018/2019',51),(63706,1,1,'VU','2015/2016',52),(63706,1,1,'VU','2016/2017',52),(63706,1,1,'VU','2017/2018',52),(63706,1,1,'VU','2018/2019',52),(63265,3,3,'VT','2015/2016',53),(63265,3,3,'VT','2016/2017',53),(63265,3,3,'VT','2017/2018',53),(63265,3,3,'VT','2018/2019',53),(63265,4,3,'VT','2015/2016',53),(63265,4,3,'VT','2016/2017',53),(63265,4,3,'VT','2017/2018',53),(63265,4,3,'VT','2018/2019',53),(63278,1,1,'VT','2015/2016',54),(63278,1,1,'VT','2016/2017',54),(63278,1,1,'VT','2017/2018',54),(63278,1,1,'VT','2018/2019',54),(63279,1,2,'VT','2015/2016',56),(63279,1,2,'VT','2016/2017',56),(63279,1,2,'VT','2017/2018',56),(63279,1,2,'VT','2018/2019',56),(63267,3,3,'VT','2015/2016',57),(63267,3,3,'VT','2016/2017',57),(63267,3,3,'VT','2017/2018',57),(63267,3,3,'VT','2018/2019',57),(63267,4,3,'VT','2015/2016',57),(63267,4,3,'VT','2016/2017',57),(63267,4,3,'VT','2017/2018',57),(63267,4,3,'VT','2018/2019',57),(63268,3,3,'VT','2015/2016',58),(63268,3,3,'VT','2016/2017',58),(63268,3,3,'VT','2017/2018',58),(63268,3,3,'VT','2018/2019',58),(63268,4,3,'VT','2015/2016',58),(63268,4,3,'VT','2016/2017',58),(63268,4,3,'VT','2017/2018',58),(63268,4,3,'VT','2018/2019',58),(63269,3,3,'VT','2015/2016',59),(63269,3,3,'VT','2016/2017',59),(63269,3,3,'VT','2017/2018',59),(63269,3,3,'VT','2018/2019',59),(63269,4,3,'VT','2015/2016',59),(63269,4,3,'VT','2016/2017',59),(63269,4,3,'VT','2017/2018',59),(63269,4,3,'VT','2018/2019',59),(63270,3,3,'VT','2015/2016',60),(63270,3,3,'VT','2016/2017',60),(63270,3,3,'VT','2017/2018',60),(63270,3,3,'VT','2018/2019',60),(63270,4,3,'VT','2015/2016',60),(63270,4,3,'VT','2016/2017',60),(63270,4,3,'VT','2017/2018',60),(63270,4,3,'VT','2018/2019',60),(63271,3,3,'VT','2015/2016',61),(63271,3,3,'VT','2016/2017',61),(63271,3,3,'VT','2017/2018',61),(63271,3,3,'VT','2018/2019',61),(63271,4,3,'VT','2015/2016',61),(63271,4,3,'VT','2016/2017',61),(63271,4,3,'VT','2017/2018',61),(63271,4,3,'VT','2018/2019',61),(63281,1,3,'VT','2015/2016',62),(63281,1,3,'VT','2016/2017',62),(63281,1,3,'VT','2017/2018',62),(63281,1,3,'VT','2018/2019',62),(63284,3,2,'VT','2015/2016',63),(63284,3,2,'VT','2016/2017',63),(63284,3,2,'VT','2017/2018',63),(63284,3,2,'VT','2018/2019',63),(63284,3,3,'VT','2015/2016',63),(63284,3,3,'VT','2016/2017',63),(63284,3,3,'VT','2017/2018',63),(63284,3,3,'VT','2018/2019',63),(63702,1,1,'VU','2015/2016',65),(63702,1,1,'VU','2016/2017',65),(63702,1,1,'VU','2017/2018',65),(63702,1,1,'VU','2018/2019',65),(63703,1,1,'VU','2015/2016',66),(63703,1,1,'VU','2016/2017',66),(63703,1,1,'VU','2017/2018',66),(63703,1,1,'VU','2018/2019',66),(63709,1,1,'VU','2015/2016',67),(63709,1,1,'VU','2016/2017',67),(63709,1,1,'VU','2017/2018',67),(63709,1,1,'VU','2018/2019',67),(63213,1,2,'VT','2015/2016',68),(63213,1,2,'VT','2016/2017',68),(63213,1,2,'VT','2017/2018',68),(63213,1,2,'VT','2018/2019',68);
/*!40000 ALTER TABLE `Predmetnik` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Prijavljeni_na_izpit`
--

DROP TABLE IF EXISTS `Prijavljeni_na_izpit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Prijavljeni_na_izpit` (
  `sifra_prijave` int(11) NOT NULL AUTO_INCREMENT,
  `Izpit_šifra` int(11) NOT NULL,
  `Student_vpisna_st` int(11) NOT NULL,
  `ocena` varchar(2) COLLATE utf8_bin DEFAULT NULL,
  `tocke_na_izpitu` varchar(3) COLLATE utf8_bin DEFAULT NULL,
  `odjava` int(11) NOT NULL,
  `cas_odjave` datetime DEFAULT NULL,
  `odjavitelj` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`sifra_prijave`),
  UNIQUE KEY `sifra_prijave_UNIQUE` (`sifra_prijave`),
  KEY `fk_Prijavljeni_na_izpit_Student1_idx` (`Student_vpisna_st`),
  KEY `fk_Prijavljeni_na_izpit_Izpit1` (`Izpit_šifra`),
  CONSTRAINT `fk_Prijavljeni_na_izpit_Izpit1` FOREIGN KEY (`Izpit_šifra`) REFERENCES `Izpit` (`sifra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prijavljeni_na_izpit_Student1` FOREIGN KEY (`Student_vpisna_st`) REFERENCES `Student` (`vpisna_st`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=939120 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prijavljeni_na_izpit`
--

LOCK TABLES `Prijavljeni_na_izpit` WRITE;
/*!40000 ALTER TABLE `Prijavljeni_na_izpit` DISABLE KEYS */;
INSERT INTO `Prijavljeni_na_izpit` VALUES (1,37,63170013,NULL,NULL,0,NULL,NULL),(2,37,63170012,'10',NULL,0,NULL,NULL),(3,37,63170011,NULL,NULL,0,NULL,NULL),(4,37,63170010,'5',NULL,0,NULL,NULL),(5,37,63170009,'5',NULL,0,NULL,NULL),(6,38,63170009,'5',NULL,0,NULL,NULL),(7,37,63170008,'5',NULL,0,NULL,NULL),(8,38,63170008,'5',NULL,0,NULL,NULL),(9,39,63170008,'5',NULL,0,NULL,NULL),(10,30,63150001,'5',NULL,0,NULL,NULL),(11,31,63150001,'5',NULL,0,NULL,NULL),(12,32,63150001,'5',NULL,0,NULL,NULL),(13,42,63150002,'5',NULL,0,NULL,NULL),(14,30,63150002,'5',NULL,0,NULL,NULL),(15,34,63150002,'5',NULL,0,NULL,NULL),(16,35,63150002,'5',NULL,0,NULL,NULL),(17,36,63150002,'5',NULL,0,NULL,NULL),(20,37,63150002,'5',NULL,0,NULL,NULL),(21,38,63150002,'5',NULL,0,NULL,NULL),(108,107,63150003,'5','45',0,NULL,NULL),(109,108,63150003,'7','66',0,NULL,NULL),(110,109,63150003,'8','77',0,NULL,NULL),(111,110,63150003,'9','80',0,NULL,NULL),(112,111,63150003,'5','30',0,NULL,NULL),(113,112,63150003,'6','50',0,NULL,NULL),(114,113,63150003,'10','100',0,NULL,NULL),(115,114,63150003,'9','85',0,NULL,NULL),(116,115,63150003,'9','85',0,NULL,NULL),(117,116,63150003,'8','76',0,NULL,NULL),(118,117,63150003,'7','66',0,NULL,NULL),(119,118,63150003,'7','66',0,NULL,NULL),(120,119,63150003,'9','85',0,NULL,NULL),(121,120,63150003,'9','85',0,NULL,NULL),(122,121,63150003,'9','85',0,NULL,NULL),(123,122,63150003,'9','85',0,NULL,NULL),(124,123,63150003,'9','85',0,NULL,NULL),(125,124,63150003,'9','85',0,NULL,NULL),(126,125,63150003,'9','85',0,NULL,NULL),(127,126,63150003,'9','85',0,NULL,NULL),(128,127,63150003,'9','85',0,NULL,NULL),(129,128,63150003,'9','85',0,NULL,NULL),(130,129,63150003,'9','85',0,NULL,NULL),(132,130,63150003,'9','85',0,NULL,NULL),(133,131,63150003,'10','85',0,NULL,NULL),(134,132,63150003,'8','85',0,NULL,NULL),(135,133,63150003,'8','85',0,NULL,NULL),(136,134,63150003,'5','55',0,NULL,NULL),(137,135,63150003,'9','85',0,NULL,NULL),(138,136,63150003,'5','45',0,NULL,NULL),(3833,40,63170007,NULL,NULL,1,'2018-06-01 11:54:15','mp6666@student.uni-lj.si'),(62158,40,63170010,NULL,NULL,0,NULL,NULL),(65720,41,63170009,NULL,NULL,1,'2018-06-01 11:55:56','an5555@student.uni-lj.si'),(77823,40,63150001,NULL,NULL,0,NULL,NULL),(88305,40,63170009,NULL,NULL,1,'2018-06-01 11:44:51','an5555@student.uni-lj.si'),(131098,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(155784,41,63170009,NULL,NULL,1,'2018-06-01 11:55:56','an5555@student.uni-lj.si'),(194185,40,63170007,NULL,NULL,1,'2018-06-01 11:54:15','mp6666@student.uni-lj.si'),(287246,41,63170009,NULL,NULL,1,'2018-06-01 11:55:56','an5555@student.uni-lj.si'),(315619,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(331379,41,63170007,NULL,NULL,1,'2018-06-01 11:34:48','mp6666@student.uni-lj.si'),(387358,41,63170009,NULL,NULL,0,NULL,NULL),(399192,40,63170007,NULL,NULL,1,'2018-06-01 11:54:15','mp6666@student.uni-lj.si'),(440163,41,63170007,NULL,NULL,1,'2018-06-01 11:34:48','mp6666@student.uni-lj.si'),(501823,40,63170009,NULL,NULL,1,'2018-06-01 11:44:51','an5555@student.uni-lj.si'),(548692,40,63170007,NULL,NULL,1,'2018-06-01 11:54:15','mp6666@student.uni-lj.si'),(572088,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(591756,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(686783,40,63170009,NULL,NULL,1,'2018-06-01 11:44:51','an5555@student.uni-lj.si'),(718993,40,63170007,NULL,NULL,1,'2018-06-01 11:54:15','mp6666@student.uni-lj.si'),(720246,41,63170009,NULL,NULL,1,'2018-06-01 11:55:56','an5555@student.uni-lj.si'),(758421,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(773052,40,63170009,NULL,NULL,1,'2018-06-01 11:44:51','an5555@student.uni-lj.si'),(785418,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(795946,40,63170007,NULL,NULL,0,NULL,NULL),(830590,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si'),(928106,40,63170007,NULL,NULL,1,'2018-06-01 11:54:15','mp6666@student.uni-lj.si'),(939119,40,63170014,NULL,NULL,1,'2018-06-01 11:01:37','mg7878@student.uni-lj.si');
/*!40000 ALTER TABLE `Prijavljeni_na_izpit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profesor`
--

DROP TABLE IF EXISTS `Profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profesor` (
  `sifra_profesorja` int(11) NOT NULL,
  `ime` varchar(45) COLLATE utf8_bin NOT NULL,
  `priimek` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`sifra_profesorja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profesor`
--

LOCK TABLES `Profesor` WRITE;
/*!40000 ALTER TABLE `Profesor` DISABLE KEYS */;
INSERT INTO `Profesor` VALUES (630001,'Mojca','Ciglarič'),(630002,'Polona','Oblak'),(630003,'Gašper','Fijavž'),(630004,'Nikolaj','Zimic'),(630005,'Irena','Drevenšek Olenik'),(630006,'Bojan','Orel'),(630007,'Marko','Bajec'),(630008,'Zoran','Bosnić'),(630009,'Branko','Šter'),(630010,'Aleksandar','Jurišić'),(630011,'Dejan','Lavbič'),(630012,'Uroš','Lotrič'),(630013,'Borut','Robič'),(630014,'Patricio','Bulič'),(630015,'Nežka','Mramor Kosta'),(630016,'Andrej','Bauer'),(630017,'Rok','Žitko'),(630018,'Marina','Štros Bračko'),(630019,'Bogdan','Filipič'),(630020,'Matjaž','Kukar'),(630021,'Jaka','Lindič'),(630022,'Darja','Peljhan'),(630023,'Tomaž','Hovelja'),(630024,'Denis','Trček'),(630025,'Blaž','Zupan'),(630026,'Rok','Rupnik'),(630027,'Matjaž','Branko Jurič'),(630028,'Viljan','Mahnič'),(630029,'Miha','Mraz'),(630030,'Marko','Robnik Šikonja'),(630031,'Tomaž','Dobravec'),(630032,'Boštjan','Slivnik'),(630033,'Igor','Kononenko'),(630034,'Matej','Kristan'),(630035,'Danijel','Skočaj'),(630036,'Matija','Marolt'),(630037,'Luka','Šajn'),(630038,'Narvika','Bovcon'),(630039,'Franc','Solina'),(630040,'Uroš','Čibej'),(630041,'Aleksander','Sadikov'),(630042,'Janez','Demšar'),(630043,'Igor','Škraba'),(630044,'Peter','Peer');
/*!40000 ALTER TABLE `Profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `priimek` varchar(45) COLLATE utf8_bin NOT NULL,
  `ime` varchar(45) COLLATE utf8_bin NOT NULL,
  `emso` varchar(13) COLLATE utf8_bin DEFAULT NULL,
  `vpisna_st` int(11) NOT NULL,
  `stalni_postna_stevilka` int(11) DEFAULT NULL,
  `stalni_obcina_koda` int(11) DEFAULT NULL,
  `stalni_drzava_koda` varchar(2) COLLATE utf8_bin DEFAULT NULL,
  `stalni_naslov_ulica` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `stalni_naslov_hisnast` int(11) DEFAULT NULL,
  `davcna` int(11) DEFAULT NULL,
  `mail` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `tel_st` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `spol` int(11) DEFAULT NULL,
  `datum_rojstva` date DEFAULT NULL,
  `kraj_rojstva` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `zacasni_postna_stevilka` int(11) DEFAULT NULL,
  `zacasni_obcina_koda` int(11) DEFAULT NULL,
  `zacasni_drzava_koda` varchar(2) COLLATE utf8_bin DEFAULT NULL,
  `zacasni_naslov_ulica` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `zacasni_naslov_hisnast` int(11) DEFAULT NULL,
  `Drzava_rojstva` varchar(2) COLLATE utf8_bin DEFAULT NULL,
  `Obcina_rojstva` int(11) DEFAULT NULL,
  `naslov_vrocanje` int(11) DEFAULT NULL,
  `Oseba_upIme` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`vpisna_st`),
  UNIQUE KEY `vpisna_st_UNIQUE` (`vpisna_st`),
  UNIQUE KEY `emso_UNIQUE` (`emso`),
  KEY `fk_Student_Posta1_idx` (`stalni_postna_stevilka`),
  KEY `fk_Student_Obcina1_idx` (`stalni_obcina_koda`),
  KEY `fk_Student_Drzava1_idx` (`stalni_drzava_koda`),
  KEY `fk_Student_Drzava2_idx` (`zacasni_drzava_koda`),
  KEY `fk_Student_Obcina2_idx` (`zacasni_obcina_koda`),
  KEY `fk_Student_Obcina3_idx` (`Obcina_rojstva`),
  KEY `fk_Student_Posta2_idx` (`zacasni_postna_stevilka`),
  KEY `fk_Student_Drzava3_idx` (`Drzava_rojstva`),
  KEY `fk_Student_Oseba1_idx` (`Oseba_upIme`),
  CONSTRAINT `fk_Student_Drzava1` FOREIGN KEY (`stalni_drzava_koda`) REFERENCES `Drzava` (`dvomestna_koda`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Drzava2` FOREIGN KEY (`zacasni_drzava_koda`) REFERENCES `Drzava` (`dvomestna_koda`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Drzava3` FOREIGN KEY (`Drzava_rojstva`) REFERENCES `Drzava` (`dvomestna_koda`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Obcina1` FOREIGN KEY (`stalni_obcina_koda`) REFERENCES `Obcina` (`sifra_obcine`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Obcina2` FOREIGN KEY (`zacasni_obcina_koda`) REFERENCES `Obcina` (`sifra_obcine`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Obcina3` FOREIGN KEY (`Obcina_rojstva`) REFERENCES `Obcina` (`sifra_obcine`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Oseba1` FOREIGN KEY (`Oseba_upIme`) REFERENCES `Oseba` (`upIme`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Posta1` FOREIGN KEY (`stalni_postna_stevilka`) REFERENCES `Posta` (`postna_stevilka`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Posta2` FOREIGN KEY (`zacasni_postna_stevilka`) REFERENCES `Posta` (`postna_stevilka`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES ('Štrukelj','Luka','123228',63150001,1000,61,'SI','Pot v gore ',10,32424,'luka.strukelj@gmail.com','031 055 787',2,'1997-02-02','Ljubljana',1000,5,'SI','Marsova',1,'SI',5,1,'ls6546@student.uni-lj.si'),('Zrnec','Jurij','123229',63150002,4000,52,'SI','Pot v gore',11,32424,'jurij.zrnec@gmail.com','031 454 656',2,'1997-02-02','Ljubljana',1000,5,'SI','Marsova',2,'SI',5,1,'jz7676@student.uni-lj.si'),('Mlakar','Iztok','123230',63150003,8270,54,'SI','Pot v gore',12,32424,'iztok.mlakar@gmail.com','031 054 778',2,'1997-02-02','Ljubljana',1000,5,'SI','Marsova',3,'SI',5,1,'im7744@student.uni-lj.si'),('Habjan','Žiga','123225',63160001,1000,61,'SI','Pot v gore',61,32424,'ziga.habjan@gmail.com','031 055 787',2,'1998-02-02','Ljubljana',1000,5,'SI','Marsova',4,'SI',5,1,'zh1234@student.uni-lj.si'),('Šubic','Terezija','123226',63160002,4000,52,'SI','Pot v gore',70,32424,'terezija.subic@gmail.com','031 454 656',1,'1998-02-02','Ljubljana',1000,61,'SI','Jurckova',22,'SI',5,1,'ts5678@student.uni-lj.si'),('Trdina','Nejc','123227',63160003,8270,54,'SI','Pot v gore',5,32424,'nejc.trdina@gmail.com','031 054 778',2,'1998-02-02','Ljubljana',1000,5,'SI','Marsova',51,'SI',5,1,'nt7878@student.uni-lj.si'),('Horvat','Jožef','4294967295',63170001,5270,1,'SI','Marsova',33,43830463,'jozef.horvat@gmail.com','031 456 789',2,'1999-02-02','Ljubljana',1000,5,'SI','Pot v gore',2,'SI',5,0,'jh5432@student.uni-lj.si'),('Novak','Marija','123212',63170002,6280,213,'SI','Marsova',10,32424,'marija.novak@gmail.com','031 987 321',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',21,'SI',5,1,'mn4321@student.uni-lj.si'),('Novak','Franc','123213',63170003,4260,3,'SI','Marsova',16,32424,'franc.novak@gmail.com','031 222 331',2,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',22,'SI',5,1,'fn0987@student.uni-lj.si'),('Horvat','Marija','123214',63170004,5230,6,'SI','Marsova',8,32424,'marija.horvat@gmail.com','031 111 222',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',81,'SI',5,1,'mh9999@student.uni-lj.si'),('Kranjc','Marija','123215',63170005,3000,11,'SI','Marsova',122,32424,'marija.kranjc@gmail.com','031 779 987',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',23,'SI',5,1,'mk0000@student.uni-lj.si'),('Horvat','Franc','123216',63170006,2393,16,'SI','Marsova',56,32424,'franc.horvat@gmail.com','031 789 687',2,'1999-02-02','Ljubljana',1000,61,'SI','Jurckova ',222,'SI',5,1,'fh7777@student.uni-lj.si'),('Puškar','Marija','123217',63170007,5280,36,'SI','Marsova',78,32424,'marija.potocnik@gmail.com','031 687 532',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',81,'SI',5,1,'mp6666@student.uni-lj.si'),('Novak','Jože','123218',63170008,1292,37,'SI','Marsova',22,32424,'joze.novak@gmail.com','031 456 789',2,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',333,'SI',5,1,'jn4444@student.uni-lj.si'),('Novak','Ana','123219',63170009,1430,34,'SI','Delavska',26,32424,'ana.novak@gmail.com','031 777 353',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',110,'SI',5,0,'an5555@student.uni-lj.si'),('Novak','Andrej','123220',63170010,6310,40,'SI','Delavska',45,32424,'andrej.novak@gmail.com','031 555 353',2,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',111,'SI',5,1,'an6543@student.uni-lj.si'),('Zupanc','Marija','123221',63170011,1241,43,'SI','Delavska',3,32424,'marija.zupancic@gmail.com','031 010 505',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',113,'SI',5,1,'mz7654@student.uni-lj.si'),('Novak','Ivan','123222',63170012,1330,48,'SI','Delavska',61,32424,'ivan.novak@gmail.com','031 550 441',2,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',114,'SI',5,1,'in1234@student.uni-lj.si'),('Mlakar','Marija','123223',63170013,1218,164,'SI','Delavska',70,32424,'marija.mlakar@gmail.com','031 650 782',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova ',115,'SI',5,1,'mm5678@student.uni-lj.si'),('Golob','Marija','123224',63170014,2325,45,'SI','Delavska',5,32424,'marija.golob@gmail.com','031 504 867',1,'1999-02-02','Ljubljana',1000,5,'SI','Marsova',116,'SI',5,1,'mg7878@student.uni-lj.si');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Studijski_program`
--

DROP TABLE IF EXISTS `Studijski_program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Studijski_program` (
  `sifra_stProgram` varchar(8) COLLATE utf8_bin NOT NULL,
  `naziv` varchar(45) COLLATE utf8_bin NOT NULL,
  `stopnja` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `semestri` int(11) DEFAULT NULL,
  `sifra_evs` int(11) DEFAULT NULL,
  PRIMARY KEY (`sifra_stProgram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Studijski_program`
--

LOCK TABLES `Studijski_program` WRITE;
/*!40000 ALTER TABLE `Studijski_program` DISABLE KEYS */;
INSERT INTO `Studijski_program` VALUES ('02','RAČUNALN. IN INFORM. -VIS','71 - visokošolski (univerzitetni) študij',8,1000462),('03','RAČUNALN. IN INFORM. -VŠ','61 - višješolski študij',4,1000463),('7002801','PEDAGOŠKO RAČ . IN INF. MAG-2. st.','L - druga stopnja: magistrski',4,1000977),('71','RAČUNALN. IN INFORM. -MAG','F - (predbolonjski): magistrski',4,1000481),('7E','RAČUNALN. IN INFORM. -DR','G - (predbolonjski): doktorski',4,1000478),('HB','RAČUNAL. IN INFORMATIKA VS','B - (predbolonjski): visokošolski strokovni',6,1000477),('Izmenjav','Predmetnik za tuje študente na izmenjavi','',0,1000461),('KPOO','Računalništvo in matematika MAG 2. st.','L - druga stopnja: magistrski',4,1000934),('L1','RAČUNALN. IN INFORM. MAG 2 .ST','L - druga stopnja: magistrski',4,1000471),('L2','RAČUNAL.IN INFORMATIKA UN','C - (predbolonjski): univerzitetni',9,1000475),('L3','INFORMAC. SISTEMI IN ODLOČANJE','F - (predbolonjski): magistrski',4,1000480),('LE','INF. SISTEMI IN ODLOČANJE - DR','G - (predbolonjski): doktorski',4,1000479),('MM','Multimedija UN 1. st.','K - prva stopnja: univerzitetni',6,1001001),('P7','RAČUNAL. IN MATEMATIKA UN','C - (predbolonjski): univerzitetni',8,1000425),('VT','RAČUNALN. IN INFORM. UN-1.ST','K - prva stopnja: univerzitetni',6,1000468),('VU','RAČUNALN. IN INFORM. VS-1.ST','J - prva stopnja: visokošolski strokovni',6,1000470),('VV','RAČUNAL. IN MATEMA. UN-1. ST.','K - prva stopnja: univerzitetni',6,1000407),('X5','Kognitivna znanost MAG 2. st.','L - druga stopnja: magistrski',4,1000472),('X6','RAČUNALN. IN INFORM. DR-3 ST.','M - tretja stopnja: doktorski',6,1000474),('XU','Humanistika in družb.-DR. 3','M - tretja stopnja: doktorski',6,1000460),('Z2','Upravna informatika UN 1. st.','K - prva stopnja: univerzitetni',6,1000469);
/*!40000 ALTER TABLE `Studijski_program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Studijsko_leto`
--

DROP TABLE IF EXISTS `Studijsko_leto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Studijsko_leto` (
  `studijsko_leto` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`studijsko_leto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Studijsko_leto`
--

LOCK TABLES `Studijsko_leto` WRITE;
/*!40000 ALTER TABLE `Studijsko_leto` DISABLE KEYS */;
INSERT INTO `Studijsko_leto` VALUES ('2010/2011'),('2011/2012'),('2012/2013'),('2013/2014'),('2014/2015'),('2015/2016'),('2016/2017'),('2017/2018'),('2018/2019');
/*!40000 ALTER TABLE `Studijsko_leto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vpis`
--

DROP TABLE IF EXISTS `Vpis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vpis` (
  `je_potrjen` int(11) NOT NULL,
  `letnikFK` int(11) NOT NULL,
  `vrsta_vpisaFK` int(10) unsigned zerofill NOT NULL,
  `nacin_studijaFK` int(11) NOT NULL,
  `oblika_studijaFK` int(11) NOT NULL,
  `studijsko_letoFK` varchar(45) COLLATE utf8_bin NOT NULL,
  `sifra_stProgramFK` varchar(8) COLLATE utf8_bin NOT NULL,
  `vpisna_st` int(11) NOT NULL,
  PRIMARY KEY (`studijsko_letoFK`,`sifra_stProgramFK`,`vpisna_st`),
  KEY `fk_Vpis_Vrsta_vpisa1_idx` (`vrsta_vpisaFK`),
  KEY `fk_Vpis_Nacin_studija1_idx` (`nacin_studijaFK`),
  KEY `fk_Vpis_Oblika_studija1_idx` (`oblika_studijaFK`),
  KEY `fk_Vpis_Studijsko_leto1_idx` (`studijsko_letoFK`),
  KEY `fk_Vpis_Studijski_program1_idx` (`sifra_stProgramFK`),
  KEY `fk_Vpis_Student1_idx` (`vpisna_st`),
  KEY `fk_Vpis_Letnik1` (`letnikFK`),
  CONSTRAINT `fk_Vpis_Letnik1` FOREIGN KEY (`letnikFK`) REFERENCES `Letnik` (`letnik`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Nacin_studija1` FOREIGN KEY (`nacin_studijaFK`) REFERENCES `Nacin_studija` (`nacin_studija`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Oblika_studija1` FOREIGN KEY (`oblika_studijaFK`) REFERENCES `Oblika_studija` (`oblika_studija`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Student1` FOREIGN KEY (`vpisna_st`) REFERENCES `Student` (`vpisna_st`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Studijski_program1` FOREIGN KEY (`sifra_stProgramFK`) REFERENCES `Studijski_program` (`sifra_stProgram`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Studijsko_leto1` FOREIGN KEY (`studijsko_letoFK`) REFERENCES `Studijsko_leto` (`studijsko_leto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Vrsta_vpisa1` FOREIGN KEY (`vrsta_vpisaFK`) REFERENCES `Vrsta_vpisa` (`vrsta_vpisa`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vpis`
--

LOCK TABLES `Vpis` WRITE;
/*!40000 ALTER TABLE `Vpis` DISABLE KEYS */;
INSERT INTO `Vpis` VALUES (1,1,0000000001,1,1,'2015/2016','VT',63150002),(1,1,0000000001,1,1,'2015/2016','VT',63150003),(1,2,0000000001,1,1,'2016/2017','VT',63150001),(1,2,0000000001,1,1,'2016/2017','VT',63150002),(1,2,0000000001,1,1,'2016/2017','VT',63150003),(1,1,0000000001,1,1,'2016/2017','VT',63160001),(1,1,0000000001,1,1,'2016/2017','VT',63160002),(1,1,0000000001,1,1,'2016/2017','VT',63160003),(1,3,0000000001,1,1,'2017/2018','VT',63150001),(1,3,0000000001,1,1,'2017/2018','VT',63150002),(1,3,0000000001,1,1,'2017/2018','VT',63150003),(1,2,0000000001,1,1,'2017/2018','VT',63160001),(1,2,0000000001,1,1,'2017/2018','VT',63160002),(1,2,0000000001,1,1,'2017/2018','VT',63160003),(1,1,0000000001,1,1,'2017/2018','VT',63170001),(1,1,0000000001,1,1,'2017/2018','VT',63170002),(1,1,0000000001,1,1,'2017/2018','VT',63170003),(1,1,0000000001,1,1,'2017/2018','VT',63170004),(1,1,0000000001,1,1,'2017/2018','VT',63170005),(1,1,0000000001,1,1,'2017/2018','VT',63170006),(1,1,0000000009,1,1,'2017/2018','VT',63170007),(1,1,0000000001,1,1,'2017/2018','VT',63170008),(1,1,0000000001,1,1,'2017/2018','VT',63170009),(1,1,0000000001,1,1,'2017/2018','VT',63170010),(1,1,0000000001,1,1,'2017/2018','VT',63170011),(1,1,0000000001,1,1,'2017/2018','VT',63170012),(1,1,0000000001,1,1,'2017/2018','VT',63170013),(1,1,0000000001,1,1,'2017/2018','VT',63170014),(1,2,0000000005,1,1,'2018/2019','VT',63150003),(1,2,0000000005,1,1,'2018/2019','VT',63170001),(1,3,0000000005,1,1,'2018/2019','VT',63170009);
/*!40000 ALTER TABLE `Vpis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vrsta_vpisa`
--

DROP TABLE IF EXISTS `Vrsta_vpisa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vrsta_vpisa` (
  `vrsta_vpisa` int(10) unsigned zerofill NOT NULL,
  `opis` mediumtext COLLATE utf8_bin,
  `na_voljo` int(11) NOT NULL DEFAULT '1',
  `neomejeno` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`vrsta_vpisa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vrsta_vpisa`
--

LOCK TABLES `Vrsta_vpisa` WRITE;
/*!40000 ALTER TABLE `Vrsta_vpisa` DISABLE KEYS */;
INSERT INTO `Vrsta_vpisa` VALUES (0000000001,'01 Prvi vpis v letnik/dodatno leto',1,0),(0000000002,'02 Ponavljanje letnika',1,0),(0000000003,'03 Nadaljevanje letnika',1,0),(0000000004,'04 Podaljšanje statusa študenta',1,0),(0000000005,'05 Vpis po merilih za prehode v višji letnik',1,0),(0000000006,'06 Vpis v semester skupnega št. programa',1,0),(0000000007,'07 Vpis po merilih za prehode v isti letnik',1,0),(0000000009,'09 Brez statusa',1,0),(0000000098,'98 Vpis za zaključek',1,0);
/*!40000 ALTER TABLE `Vrsta_vpisa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zeton`
--

DROP TABLE IF EXISTS `Zeton`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Zeton` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Studijsko_letoFK` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `vrsta_vpisa` varchar(45) COLLATE utf8_bin NOT NULL,
  `Nivo_studijaFK` varchar(45) COLLATE utf8_bin NOT NULL,
  `Nacin_studijaFK` int(11) NOT NULL,
  `letnikFK` int(11) DEFAULT NULL,
  `prosto_izbirni` int(11) DEFAULT '0',
  `izkoriscen` int(11) NOT NULL,
  `vpisna_stFK` int(11) NOT NULL,
  `visoko_povprecje` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Zeton_Student1` (`vpisna_stFK`),
  KEY `Studijsko_letoFK` (`Studijsko_letoFK`),
  CONSTRAINT `fk_Zeton_Student1` FOREIGN KEY (`vpisna_stFK`) REFERENCES `Student` (`vpisna_st`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zeton`
--

LOCK TABLES `Zeton` WRITE;
/*!40000 ALTER TABLE `Zeton` DISABLE KEYS */;
INSERT INTO `Zeton` VALUES (41,'2018/2019','0000000005','1',1,3,1,0,63160001,NULL),(48,'2010/2011','0000000001','1',1,1,NULL,0,63170014,NULL),(59,'2018/2019','0000000005','VT',1,2,NULL,1,63150003,NULL),(68,'2018/2019','0000000005','VT',1,3,NULL,1,63170009,1),(91,'2018/2019','0000000005','VT',1,2,NULL,1,63170003,NULL),(94,'2018/2019','0000000005','VT',1,2,NULL,1,63170002,NULL),(96,'2018/2019','0000000005','VT',1,2,NULL,1,63170014,NULL),(106,'2018/2019','0000000005','VT',1,3,NULL,1,63160001,NULL),(111,'2018/2019','0000000005','VT',1,2,NULL,0,63170012,NULL),(112,'2018/2019','0000000005','VT',1,2,NULL,1,63170001,NULL),(113,'2018/2019','0000000005','VT',1,3,1,1,63170013,NULL),(114,'2018/2019','0000000005','VT',1,3,0,1,63160003,NULL),(117,'2018/2019','0000000005','VT',1,2,NULL,1,63170004,NULL),(118,'2018/2019','0000000005','VT',1,3,1,1,63170005,NULL),(119,'2018/2019','0000000005','VT',1,3,0,1,63170010,NULL),(120,'2018/2019','0000000005','VT',1,2,NULL,1,63170006,NULL),(124,'2018/2019','0000000005','VT',1,2,NULL,1,63170006,NULL),(125,'2018/2019','0000000005','VT',1,2,NULL,1,63170006,NULL),(126,'2018/2019','0000000005','VT',1,3,NULL,1,63160002,NULL),(128,'2018/2019','0000000005','VT',1,3,1,1,63160002,NULL);
/*!40000 ALTER TABLE `Zeton` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-07 22:46:00
