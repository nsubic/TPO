-- MySQL Script generated by MySQL Workbench
-- Fri Apr 20 09:51:18 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Posta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Posta` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Posta` (
  `postna_stevilka` INT NOT NULL,
  `ime_poste` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`postna_stevilka`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Obcina`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Obcina` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Obcina` (
  `sifra_obcine` INT NOT NULL,
  `ime_obcine` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`sifra_obcine`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Drzava`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Drzava` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Drzava` (
  `dvomestna_koda` VARCHAR(2) NOT NULL,
  `trimestna_oznaka` VARCHAR(3) NOT NULL,
  `numericna_oznaka` INT NOT NULL,
  `iso_naziv` VARCHAR(45) NOT NULL,
  `slo_naziv` VARCHAR(45) NOT NULL,
  `opomba` LONGTEXT NULL,
  PRIMARY KEY (`dvomestna_koda`),
  UNIQUE INDEX `dvomestna_koda_UNIQUE` (`dvomestna_koda` ASC),
  UNIQUE INDEX `trimestna_oznaka_UNIQUE` (`trimestna_oznaka` ASC),
  UNIQUE INDEX `numericna_oznaka_UNIQUE` (`numericna_oznaka` ASC),
  UNIQUE INDEX `iso_naziv_UNIQUE` (`iso_naziv` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Oseba`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Oseba` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Oseba` (
  `upIme` VARCHAR(45) NOT NULL,
  `geslo` VARCHAR(45) NULL,
  `vloga` INT NULL,
  PRIMARY KEY (`upIme`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Student`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Student` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Student` (
  `priimek` VARCHAR(45) NOT NULL,
  `ime` VARCHAR(45) NOT NULL,
  `emso` INT UNSIGNED ZEROFILL NULL,
  `vpisna_st` INT NOT NULL,
  `stalni_postna_stevilka` INT NOT NULL,
  `stalni_obcina_koda` INT NOT NULL,
  `stalni_drzava_koda` VARCHAR(2) NOT NULL,
  `stalni_naslov_ulica` VARCHAR(45) NULL,
  `stalni_naslov_hisnast` INT NULL,
  `davcna` INT NULL,
  `mail` VARCHAR(45) NULL,
  `tel_st` VARCHAR(45) NULL,
  `spol` INT NULL,
  `datum_rojstva` DATE NULL,
  `kraj_rojstva` VARCHAR(45) NULL,
  `zacasni_postna_stevilka` INT NOT NULL,
  `zacasni_obcina_koda` INT NOT NULL,
  `zacasni_drzava_koda` VARCHAR(2) NOT NULL,
  `zacasni_naslov_ulica` VARCHAR(45) NULL,
  `zacasni_naslov_hisnast` INT NULL,
  `Drzava_rojstva` VARCHAR(2) NOT NULL,
  `Obcina_rojstva` INT NOT NULL,
  `naslov_vrocanje` INT NULL,
  `Oseba_upIme` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `emso_UNIQUE` (`emso` ASC),
  PRIMARY KEY (`vpisna_st`),
  UNIQUE INDEX `vpisna_st_UNIQUE` (`vpisna_st` ASC),
  INDEX `fk_Student_Posta1_idx` (`stalni_postna_stevilka` ASC),
  INDEX `fk_Student_Obcina1_idx` (`stalni_obcina_koda` ASC),
  INDEX `fk_Student_Drzava1_idx` (`stalni_drzava_koda` ASC),
  INDEX `fk_Student_Drzava2_idx` (`zacasni_drzava_koda` ASC),
  INDEX `fk_Student_Obcina2_idx` (`zacasni_obcina_koda` ASC),
  INDEX `fk_Student_Obcina3_idx` (`Obcina_rojstva` ASC),
  INDEX `fk_Student_Posta2_idx` (`zacasni_postna_stevilka` ASC),
  INDEX `fk_Student_Drzava3_idx` (`Drzava_rojstva` ASC),
  INDEX `fk_Student_Oseba1_idx` (`Oseba_upIme` ASC),
  CONSTRAINT `fk_Student_Posta1`
    FOREIGN KEY (`stalni_postna_stevilka`)
    REFERENCES `mydb`.`Posta` (`postna_stevilka`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Obcina1`
    FOREIGN KEY (`stalni_obcina_koda`)
    REFERENCES `mydb`.`Obcina` (`sifra_obcine`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Drzava1`
    FOREIGN KEY (`stalni_drzava_koda`)
    REFERENCES `mydb`.`Drzava` (`dvomestna_koda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Drzava2`
    FOREIGN KEY (`zacasni_drzava_koda`)
    REFERENCES `mydb`.`Drzava` (`dvomestna_koda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Obcina2`
    FOREIGN KEY (`zacasni_obcina_koda`)
    REFERENCES `mydb`.`Obcina` (`sifra_obcine`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Obcina3`
    FOREIGN KEY (`Obcina_rojstva`)
    REFERENCES `mydb`.`Obcina` (`sifra_obcine`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Posta2`
    FOREIGN KEY (`zacasni_postna_stevilka`)
    REFERENCES `mydb`.`Posta` (`postna_stevilka`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Drzava3`
    FOREIGN KEY (`Drzava_rojstva`)
    REFERENCES `mydb`.`Drzava` (`dvomestna_koda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_Oseba1`
    FOREIGN KEY (`Oseba_upIme`)
    REFERENCES `mydb`.`Oseba` (`upIme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Letnik`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Letnik` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Letnik` (
  `letnik` INT NOT NULL,
  PRIMARY KEY (`letnik`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Vrsta_vpisa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Vrsta_vpisa` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Vrsta_vpisa` (
  `vrsta_vpisa` INT UNSIGNED ZEROFILL NOT NULL,
  `opis` MEDIUMTEXT NULL,
  PRIMARY KEY (`vrsta_vpisa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Nacin_studija`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Nacin_studija` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Nacin_studija` (
  `nacin_studija` INT NOT NULL,
  `opis` VARCHAR(45) NULL,
  `ang_opis` VARCHAR(45) NULL,
  PRIMARY KEY (`nacin_studija`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Oblika_studija`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Oblika_studija` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Oblika_studija` (
  `oblika_studija` INT NOT NULL,
  `opis` VARCHAR(45) NULL,
  `ang_opis` VARCHAR(45) NULL,
  PRIMARY KEY (`oblika_studija`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Studijsko_leto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Studijsko_leto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Studijsko_leto` (
  `studijsko_leto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`studijsko_leto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Studijski_program`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Studijski_program` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Studijski_program` (
  `sifra_stProgram` VARCHAR(8) NOT NULL,
  `naziv` VARCHAR(45) NOT NULL,
  `stopnja` VARCHAR(45) NULL,
  `semestri` INT NULL,
  `sifra_evs` INT NULL,
  PRIMARY KEY (`sifra_stProgram`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Vpis`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Vpis` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Vpis` (
  `je_potrjen` INT NOT NULL,
  `letnikFK` INT NOT NULL,
  `vrsta_vpisaFK` INT UNSIGNED ZEROFILL NOT NULL,
  `nacin_studijaFK` INT NOT NULL,
  `oblika_studijaFK` INT NOT NULL,
  `studijsko_letoFK` VARCHAR(45) NOT NULL,
  `sifra_stProgramFK` VARCHAR(8) NOT NULL,
  `vpisna_st` INT NOT NULL,
  PRIMARY KEY (`studijsko_letoFK`, `sifra_stProgramFK`, `vpisna_st`),
  INDEX `fk_Vpis_Vrsta_vpisa1_idx` (`vrsta_vpisaFK` ASC),
  INDEX `fk_Vpis_Nacin_studija1_idx` (`nacin_studijaFK` ASC),
  INDEX `fk_Vpis_Oblika_studija1_idx` (`oblika_studijaFK` ASC),
  INDEX `fk_Vpis_Studijsko_leto1_idx` (`studijsko_letoFK` ASC),
  INDEX `fk_Vpis_Studijski_program1_idx` (`sifra_stProgramFK` ASC),
  INDEX `fk_Vpis_Student1_idx` (`vpisna_st` ASC),
  CONSTRAINT `fk_Vpis_Letnik1`
    FOREIGN KEY (`letnikFK`)
    REFERENCES `mydb`.`Letnik` (`letnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Vrsta_vpisa1`
    FOREIGN KEY (`vrsta_vpisaFK`)
    REFERENCES `mydb`.`Vrsta_vpisa` (`vrsta_vpisa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Nacin_studija1`
    FOREIGN KEY (`nacin_studijaFK`)
    REFERENCES `mydb`.`Nacin_studija` (`nacin_studija`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Oblika_studija1`
    FOREIGN KEY (`oblika_studijaFK`)
    REFERENCES `mydb`.`Oblika_studija` (`oblika_studija`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Studijsko_leto1`
    FOREIGN KEY (`studijsko_letoFK`)
    REFERENCES `mydb`.`Studijsko_leto` (`studijsko_leto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Studijski_program1`
    FOREIGN KEY (`sifra_stProgramFK`)
    REFERENCES `mydb`.`Studijski_program` (`sifra_stProgram`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vpis_Student1`
    FOREIGN KEY (`vpisna_st`)
    REFERENCES `mydb`.`Student` (`vpisna_st`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Kandidat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Kandidat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Kandidat` (
  `ime` VARCHAR(45) NOT NULL,
  `priimek` VARCHAR(45) NOT NULL,
  `Vpis_sifra_stProgramFK` VARCHAR(8) NOT NULL,
  `mail` VARCHAR(45) NULL,
  `vpisna_st` INT NOT NULL,
  `geslo` VARCHAR(45) NULL,
  `izkoriscenost_zetona` INT NOT NULL,
  `upIme` VARCHAR(45) NOT NULL,
  INDEX `fk_Kandidat_Vpis1_idx` (`Vpis_sifra_stProgramFK` ASC),
  INDEX `fk_Kandidat_Oseba1_idx` (`upIme` ASC),
  CONSTRAINT `fk_Kandidat_Vpis1`
    FOREIGN KEY (`Vpis_sifra_stProgramFK`)
    REFERENCES `mydb`.`Vpis` (`sifra_stProgramFK`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Kandidat_Oseba1`
    FOREIGN KEY (`upIme`)
    REFERENCES `mydb`.`Oseba` (`upIme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Zeton`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Zeton` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Zeton` (
  `vrsta_vpisa` VARCHAR(45) NOT NULL,
  `izkoriscen` INT NOT NULL,
  `vpisna_stFK` INT NOT NULL,
  PRIMARY KEY (`vpisna_stFK`),
  CONSTRAINT `fk_Zeton_Student1`
    FOREIGN KEY (`vpisna_stFK`)
    REFERENCES `mydb`.`Student` (`vpisna_st`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Predmet`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Predmet` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Predmet` (
  `sifra_predmeta` INT NOT NULL,
  `ime_predmeta` VARCHAR(100) NOT NULL,
  `KT_tocke` INT NULL,
  PRIMARY KEY (`sifra_predmeta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Del_predmetnika`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Del_predmetnika` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Del_predmetnika` (
  `sifra_predmetnika` INT NOT NULL,
  `naziv` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`sifra_predmetnika`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Profesor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Profesor` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Profesor` (
  `sifra_profesorja` INT NOT NULL,
  `ime` VARCHAR(45) NOT NULL,
  `priimek` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`sifra_profesorja`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Nosilec_predmeta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Nosilec_predmeta` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Nosilec_predmeta` (
  `sifra_opcije` INT NOT NULL,
  `sifra_predmetaFK` INT NOT NULL,
  `sifra_profesorjaFK1` INT NOT NULL,
  `sifra_profesorjaFK2` INT NULL,
  `sifra_profesorjaFK3` INT NULL,
  PRIMARY KEY (`sifra_opcije`),
  INDEX `fk_Nosilec_predmeta_Profesor_idx` (`sifra_profesorjaFK1` ASC),
  INDEX `fk_Nosilec_predmeta_Predmet1_idx` (`sifra_predmetaFK` ASC),
  INDEX `fk_Nosilec_predmeta_Profesor1_idx` (`sifra_profesorjaFK2` ASC),
  INDEX `fk_Nosilec_predmeta_Profesor2_idx` (`sifra_profesorjaFK3` ASC),
  CONSTRAINT `fk_Nosilec_predmeta_Profesor`
    FOREIGN KEY (`sifra_profesorjaFK1`)
    REFERENCES `mydb`.`Profesor` (`sifra_profesorja`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Nosilec_predmeta_Predmet1`
    FOREIGN KEY (`sifra_predmetaFK`)
    REFERENCES `mydb`.`Predmet` (`sifra_predmeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Nosilec_predmeta_Profesor1`
    FOREIGN KEY (`sifra_profesorjaFK2`)
    REFERENCES `mydb`.`Profesor` (`sifra_profesorja`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Nosilec_predmeta_Profesor2`
    FOREIGN KEY (`sifra_profesorjaFK3`)
    REFERENCES `mydb`.`Profesor` (`sifra_profesorja`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Predmetnik`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Predmetnik` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Predmetnik` (
  `sifra_predmetaFK` INT NOT NULL,
  `sifra_predmetnikaFK` INT NOT NULL,
  `letnikFK` INT NOT NULL,
  `sifra_stProgramFK` VARCHAR(8) NOT NULL,
  `studijsko_letoFK` VARCHAR(45) NOT NULL,
  `Nosilec_predmeta_sifra_opcije` INT NOT NULL,
  PRIMARY KEY (`sifra_predmetaFK`, `sifra_predmetnikaFK`, `letnikFK`, `sifra_stProgramFK`, `studijsko_letoFK`),
  INDEX `fk_Predmetnik_Del_predmetnika1_idx` (`sifra_predmetnikaFK` ASC),
  INDEX `fk_Predmetnik_Letnik1_idx` (`letnikFK` ASC),
  INDEX `fk_Predmetnik_Studijski_program1_idx` (`sifra_stProgramFK` ASC),
  INDEX `fk_Predmetnik_Studijsko_leto1_idx` (`studijsko_letoFK` ASC),
  INDEX `fk_Predmetnik_Nosilec_predmeta1_idx` (`Nosilec_predmeta_sifra_opcije` ASC),
  CONSTRAINT `fk_Predmetnik_Predmet1`
    FOREIGN KEY (`sifra_predmetaFK`)
    REFERENCES `mydb`.`Predmet` (`sifra_predmeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Del_predmetnika1`
    FOREIGN KEY (`sifra_predmetnikaFK`)
    REFERENCES `mydb`.`Del_predmetnika` (`sifra_predmetnika`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Letnik1`
    FOREIGN KEY (`letnikFK`)
    REFERENCES `mydb`.`Letnik` (`letnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Studijski_program1`
    FOREIGN KEY (`sifra_stProgramFK`)
    REFERENCES `mydb`.`Studijski_program` (`sifra_stProgram`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Studijsko_leto1`
    FOREIGN KEY (`studijsko_letoFK`)
    REFERENCES `mydb`.`Studijsko_leto` (`studijsko_leto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Predmetnik_Nosilec_predmeta1`
    FOREIGN KEY (`Nosilec_predmeta_sifra_opcije`)
    REFERENCES `mydb`.`Nosilec_predmeta` (`sifra_opcije`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Izpit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Izpit` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Izpit` (
  `šifra` INT NOT NULL AUTO_INCREMENT,
  `rok` INT NOT NULL,
  `Predmet_sifra_predmeta` INT NOT NULL,
  `datum` DATE NOT NULL,
  PRIMARY KEY (`šifra`),
  UNIQUE INDEX `šifra_UNIQUE` (`šifra` ASC),
  CONSTRAINT `fk_Izpit_Predmet1`
    FOREIGN KEY (`Predmet_sifra_predmeta`)
    REFERENCES `mydb`.`Predmet` (`sifra_predmeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Prijavljeni_na_izpit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Prijavljeni_na_izpit` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Prijavljeni_na_izpit` (
  `Izpit_šifra` INT NOT NULL,
  `Student_vpisna_st` INT NOT NULL,
  `ocena` INT NULL,
  PRIMARY KEY (`Izpit_šifra`, `Student_vpisna_st`),
  INDEX `fk_Prijavljeni_na_izpit_Student1_idx` (`Student_vpisna_st` ASC),
  CONSTRAINT `fk_Prijavljeni_na_izpit_Izpit1`
    FOREIGN KEY (`Izpit_šifra`)
    REFERENCES `mydb`.`Izpit` (`šifra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prijavljeni_na_izpit_Student1`
    FOREIGN KEY (`Student_vpisna_st`)
    REFERENCES `mydb`.`Student` (`vpisna_st`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
