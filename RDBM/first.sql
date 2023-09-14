
-- creating database first
create database university;


--creating Table Employees inside database University
create table Employees(
 id INT auto_increment PRIMARY
   KEY,                                  
   first_name varchar(50),
   last_name varchar(50),
   email varchar(10),
   birthdate date);



  
--Getting  all data of employee table   
select  *from employees;


-- i want to  increase length of email field 
alter table employees modify email varchar(30);

-- Inserting data into Employees table

insert into employees(first_name,last_name,email,birthdate)
 values('Milan','khatri','KCmilan@gmail.com','1993-08-10');


--selecting data of employees where  first name  greater than 5
 select  * from employees where char_length(first_name) >5;



---  Update  first name of employee where id=2
update  employees  set first_name='Johnluther' where id=2;
select * from employees;


--Delete employee redcord where first_name is Milan
delete from employees where  first_name='Milan';

--how much person age in term of days 
select first_name,datediff(current_date(),birthdate)as days  from employees;
  
  
