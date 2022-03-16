show databases;  --- database listing
create database ecommerce;
use ecommerce; -- ecommerce (database ) for selecting ecommerce db
drop database ecommerce;  --dropping the database
SHOW tables;    --list the tables
--Datatype
 -- number tinyint,int,bigint,float

 -- two tuples are not same in mysql 

 -- creating a table
create table users(
    id int primary key,
    name varchar(40) not null,
    password varchar(30) not null,
    email varchar(100) not null,
    phone_no char(10)
);

-- inserting data into database
insert into users(id,email,password,name) values(1,'sadab@gmail.com','123456','Sadab');

-- a table have multiple unique key but only one primary key
ALTER TABLE users MODIFY id INTEGER NOT NULL AUTO_INCREMENT; -- for adding constraint in an existing table

ALTER TABLE users MODIFY email varchar(100) not null UNIQUE; -- for adding unique constraint

-- insert multiple data in database
insert into users(email,password,name) values
('sadab1@gmail.com','123456','Sadab1'),
('sadab2@gmail.com','123456','Sadab2'),
('sadab3@gmail.com','123456','Sadab3'),
('sadab4@gmail.com','123456','Sadab4'),
('sadab5@gmail.com','123456','Sadab5'),
('sadab6@gmail.com','123456','Sadab6'),
('sadab7@gmail.com','123456','Sadab7'),
('sadab8@gmail.com','123456','Sadab8'),
('sadab9@gmail.com','123456','Sadab9'),
('sadab10@gmail.com','123456','Sadab10'),
('sadab11@gmail.com','123456','Sadab11'),
('sadab12@gmail.com','123456','Sadab12'),
('sadab13@gmail.com','123456','Sadab13'),
('sadab14@gmail.com','123456','Sadab14'),
('sadab15@gmail.com','123456','Sadab15'),
('sadab16@gmail.com','123456','Sadab16');


-- list all the tuples with all columns
select * from users;
select id,email from users;  --email , id column shows
select * from users where email='sadab@gmail.com' and password=123456; --filter tuple based on condition

UPDATE users set phone_no='123457ss ' where id=1; -- update users phone number whose id is 1
delete from users where id =5; -- delete the user whose  id is 5


--- finding second highest quantity
SELECT Distinct(Quantity) as quantity FROM OrderDetails
order by Quantity DESC
limit 1,1;



--- db design for ecommerce 

-- user (id,name,password)
-- profile (id ,img)
-- address (id,state,city,type)
-- item (name,id,price)

-- category(name,id)

-- one to one one user have only one profile

-- create table user_profile (
-- id int auto_increment primary key, 
-- img varchar(255) , 
-- fk_user int unique,
-- Foreign key(fk_user) References users(id)
-- ); 

--one to many
-- create table user_addresses (
-- id int auto_increment primary key, 
-- state varchar(255) , 
-- type varchar(20),
-- fk_user int,
-- Foreign key(fk_user) References users(id)
-- ); 


--- many to many
-- create table item (
-- id int auto_increment primary key, 
-- name varchar(255),
-- price float
-- );

-- create table category(
-- id int auto_increment primary key, 
-- name varchar(255)
-- );

-- create table item_category(
-- fk_item int,
-- fk_categ int,
-- foreign key (fk_item) references item(id),
-- foreign key (fk_categ) references category(id),
-- primary key (fk_item,fk_categ)
-- );

