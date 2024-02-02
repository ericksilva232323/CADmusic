-- DDL - Estrutura

drop database if exists playlist;
create database playlist;
use playlist;

create table fichaplay(
    id integer not null auto_increment primary key auto_increment,
    artist varchar(50) not null,
    art varchar(50) not null,
    duration varchar(4) not null,
    album varchar(50) not null
);
describe fichaplay;

-- DML -  Popular com daods de teste
insert into fichaplay(artist, art, duration, album) values
("Smino", "Louphoria (feat. Cuza)", "03:46", "Luv4Rent"),
("SiR", "Love You", "03:06", "Seven Sundays"),
("Don Toliver", "If I Had", "03:28", "Love Sick"),
("SiR", "Cadillac Dreams (feat BIG K.R.I.T.)", "4:37", "HER");

select * from fichaplay;