var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Squidward11",
    database: "employee_trackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("######### THE EMPLOYEE DATABASE #########")
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Role",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "END PROGRAM"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewAll();
                    break;
                case "View All Employees By Department":
                    byDepartment();
                    break;
                case "View All Employees By Role":
                    byRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee Manager":
                    updateManager();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                default:
                    connection.end();
            }
        });

    function viewAll() {
        connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.name FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id)", function(err, res) {
            if (err)
                throw err;
            console.table(res);
            runSearch();
        });
    };

    function byDepartment() {
        inquirer.prompt({
            type: "list",
            message: "Which department's employees would you like to view?",
            name: "departmentChoice",
            choices: ["Purchasing", "R&D", "Marketing", "HR", ]
        }).then(function(answer) {
            if (answer.departmentChoice === "Purchasing" || "R&D" || "Marketing" || "HR") {
                connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.name FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id) WHERE name = ?", [answer.departmentChoice], function(err, res) {
                    if (err)
                        throw err;
                    console.table(res);
                    runSearch();
                });
            }
        });
    }

    function byRole() {
        inquirer.prompt({
            name: "roleChoice",
            type: "list",
            message: "Which role would you like to see employees for?",
            choices: [
                "Purchasing Manager",
                "Product Developer",
                "Brand Manager",
                "Food Scientist",
                "Marketing Manager",
                "HR Associate",
                "SVP HR",
                "SVP Purchasing",
            ]
        }).then(function(answer) {
            if (answer.role === "Purchasing Manager" || "Product Developer" || "Brand Manager" || "Food Scientist" || "Marketing Manager" || "HR Associate" || "SVP HR" || "SVP Purchasing") {
                connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.name FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id) WHERE title = ?", [answer.roleChoice], function(err, res) {
                    if (err)
                        throw err;
                    console.table(res);
                    runSearch();
                });
            }
        });
    }
}

function addEmployee() {
    inquirer.prompt([{
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
        }, {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        }, {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: [
                "Purchasing Manager",
                "Product Developer",
                "Brand Manager",
                "Food Scientist",
                "Marketing Manager",
                "HR Associate",
                "SVP HR",
                "SVP Purchasing",
            ]
        }, {
            name: "manager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: ["James Candy", "Johanna Jones", "Willy James", "Jen Joiner", "Kevin Balls", "Doesn't have a manager"]
        }])
        .then(function(answer) {
            var role_id;
            if (answer.role === "Purchasing Manager") {
                role_id = 1;
            } else if (answer.role === "Product Developer") {
                role_id = 2;
            } else if (answer.role === "Brand Manager") {
                role_id = 3;
            } else if (answer.role === "Food Scientist") {
                role_id = 4;
            } else if (answer.role === "Marketing Manager") {
                role_id = 5;
            } else if (answer.role === "HR Associate") {
                role_id = 6;
            } else if (answer.role === "SVP HR") {
                role_id = 7;
            } else if (answer.role === "SVP Purchasing") {
                role_id = 8;
            }

            var managerId;
            if (answer.manager === "James Candy") {
                managerId = 1;
            } else if (answer.manager === "Johanna Jones") {
                managerId = 6;
            } else if (answer.manager === "Jen Joiner") {
                managerId = 8;
            } else if (answer.manager === "Kevin Balls") {
                managerId = 9;
            } else if (answer.manager === "Willy James") {
                managerId = 4;
            } else if (answer.manager === "Doesn't have a manager") {
                managerId = null;
            }
            connection.query("INSERT INTO employee SET ?", {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: role_id,
                    manager_id: managerId
                },
                function(err, res) {
                    if (err) throw err;
                    console.log("Employee has successfully been added to the database!");
                    runSearch();
                });
        });
}

function updateManager() {
    connection.query("SELECT first_name, last_name FROM employee", function(err, result) {
        if (err)
            throw err;
        var managerArray = [];
        for (var i = 0; i < result.length; i++) {
            var choices = result[i].first_name + " " + result[i].last_name;
            managerArray.push(choices);
        }
        inquirer.prompt([{
            name: "person",
            type: "list",
            message: "Which employee's manager would you like to update?",
            choices: managerArray
        }, {
            name: "newManager",
            type: "list",
            message: "Who is their new manager?",
            choices: ["James Candy", "Johanna Jones", "Willy James", "Jen Joiner", "Kevin Balls", "Doesn't have a manager"]
        }]).then(function(answer) {
            var managerId;
            if (answer.manager === "James Candy") {
                managerId = 1;
            } else if (answer.manager === "Johanna Jones") {
                managerId = 6;
            } else if (answer.manager === "Jen Joiner") {
                managerId = 8;
            } else if (answer.manager === "Kevin Balls") {
                managerId = 9;
            } else if (answer.manager === "Willy James") {
                managerId = 4;
            } else if (answer.manager === "Doesn't have a manager") {
                managerId = null;
            }
            var first_name = answer.person.split(" ");
            connection.query(`UPDATE employee SET role_id = ${role_id} WHERE first_name = '${first_name[0]}'`, {
                manager_id: managerId
            }, function(err, res) {
                if (err)
                    throw err;
                console.log("***** You updated their manager... congrats!. *****")
                runSearch();
            })
        })
    })
}

function updateRole() {
    connection.query("SELECT first_name, last_name FROM employee", function(err, result) {
        if (err)
            throw err;
        var choiceArray = [];
        for (var i = 0; i < result.length; i++) {
            var choices = result[i].first_name + " " + result[i].last_name;
            choiceArray.push(choices);
        }
        inquirer.prompt([{
            name: "person",
            type: "list",
            message: "Which employee's role would you like to update?",
            choices: choiceArray
        }, {
            name: "newRole",
            type: "list",
            message: "What is their new role?",
            choices: [
                "Purchasing Manager",
                "Product Developer",
                "Brand Manager",
                "Food Scientist",
                "Marketing Manager",
                "HR Associate",
                "SVP HR",
                "SVP Purchasing",
            ]
        }]).then(function(answer) {
            if (answer.role === "Purchasing Manager") {
                role_id = 1;
            } else if (answer.role === "Product Developer") {
                role_id = 2;
            } else if (answer.role === "Brand Manager") {
                role_id = 3;
            } else if (answer.role === "Food Scientist") {
                role_id = 4;
            } else if (answer.role === "Marketing Manager") {
                role_id = 5;
            } else if (answer.role === "HR Associate") {
                role_id = 6;
            } else if (answer.role === "SVP HR") {
                role_id = 7;
            } else if (answer.role === "SVP Purchasing") {
                role_id = 8;
            }
            var first_name = answer.person.split(" ");
            connection.query("UPDATE employee SET role_id = `${role_id}` WHERE first_name = `${first_name[0]}`", {
                role_id: role_id
            }, function(err, res) {
                if (err)
                    throw err;
                console.log("***** You updated their role... congrats! *****")
                runSearch();
            })
        })
    })
}