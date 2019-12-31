INSERT INTO department (name) VALUES ("Purchasing");
INSERT INTO department (name) VALUES ("R&D");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO role (title,salary,department_id) VALUES ("Purchasing Manager",85000,1);
INSERT INTO role (title,salary,department_id) VALUES ("Product Developer",70000,2);
INSERT INTO role (title,salary,department_id) VALUES ("Brand Manager",90000,3);
INSERT INTO role (title,salary,department_id) VALUES ("Food Scientist",100000,2);
INSERT INTO role (title,salary,department_id) VALUES ("Marketing Manager",105000,3);
INSERT INTO role (title,salary,department_id) VALUES ("HR Associate",120000,4);
INSERT INTO role (title,salary,department_id) VALUES ("SVP HR",200000,4);
INSERT INTO role (title,salary,department_id) VALUES ("SVP Purchasing",185000,1);

INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("James","Candy",1,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Phil","Pipes",2,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Lisa","Canan",3,2);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Willy","James",3,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Ricky","Bobby",6,6);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Johanna","Jones",4,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("George","Clooney",5,4);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Jen","Joiner",7,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Kevin","Balls",8,null);