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
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "Update Employee Manager":
                    updateManager();
                    break;
                default:
                    connection.end();
            }
        });

    function viewAll() {
        connection.query("SELECT * FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id", function(err, res) {
            if (err)
                throw err;
            console.table(res);
            runSearch();
        });
    }

    function byDepartment() {
        inquirer.prompt({
            type: "list",
            message: "Which department's employees would you like to view?",
            name: "departmentChoice",
            choices: ["Purchasing", "R&D", "Marketing", "HR", ]
        }).then(function(answer) {
            if (answer.departmentChoice === "Purchasing" || "R&D" || "Marketing" || "HR") {
                connection.query("SELECT * FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE department.department = ?", [answer.departmentChoice], function(err, res) {
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
                connection.query("SELECT * FROM employee INNER JOIN role ON employee.role_id = role.id WHERE title = ?", [answer.roleChoice], function(err, res) {
                    if (err)
                        throw err;
                    console.table(res);
                    runSearch();
                });
            }
        });
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
                message: "What is the employee's manager's ID number?",
                choices: ["James Candy", "Johanna Jones", "Willy James", "Jen Joiner", "Kevin Balls", "null"]
            }])
            .then(function(answer) {
                connection.query("INSERT INTO employee SET ?", {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        manager_id: answer.manager
                    },
                    function(err, res) {
                        if (err) throw err;
                    }
                );
                connection.query("INSERT INTO role SET ?", {
                        title: answer.role
                    },
                    function(err, res) {
                        if (err) throw err;
                        console.table(res)
                        console.log("Employee has successfully been added to the database!");
                        runSearch();
                    }
                );
            });
    }
}