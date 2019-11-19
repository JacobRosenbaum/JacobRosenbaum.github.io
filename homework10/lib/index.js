const inquirer = require("inquirer");
const fs = require("fs");

function promptManager() {
    console.log("Please build your team.");
    return inquirer.prompt([{
            type: "input",
            message: "Who is your manager?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is your manager's ID?",
            name: "managerId",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "managerOffice"
        },
    ]).then(function(answers) {
        generateTeamMember();
    })
};

function generateTeamMember(answers) {
    return inquirer.prompt([{
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I'm done adding team members."]
        }])
        .then(function(answers) {
            switch (answers.teamMembers) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                default:
                    console.log("Thanks for your responses");
                    // generateHTML();
            }
        })
}

function promptEngineer(answers) {
    return inquirer.prompt([{
                type: "input",
                message: "What is your Engineer's name?",
                name: "enigneerName",
            },
            {
                type: "input",
                message: "What is your Engineer's ID?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is your Engineer's email?",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is your Engineer's Github username",
                name: "engineerGithub",
            },
        ])
        .then(function(answers) {
            generateTeamMember();
        })
};

function promptIntern(answers) {
    return inquirer.prompt([{
                type: "input",
                message: "What is your Intern's name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is your Intern's ID?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is your Intern's email?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What school does your Intern attend?",
                name: "internSchool",
            },
        ])
        .then(function(answers) {
            generateTeamMember();
        })
};

// function generateHTML(answers) {
//     fs.writeFile(`output.html`, `<!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
//         <title>Employee Summary</title>
//     </head>

//     <body style="background-color: lightgrey">
//         <div class="container">
//             <div class="jumbotron" style="background-color: red; color:white; margin-top: 50px; margin-bottom: 100px; text-align: center; margin: 0 auto; ">
//                 <h1>
//                     My Team

//                 </h1>
//             </div>
//             <div class="row" style="margin: 0 auto; margin-top: 50px;">
//                 <div class="col-lg-4">
//                     <div id="managerCard" class="card" style="width: 18rem;">
//                         <div class="card-header" style="background-color: blue; color:white;">
//                         ${answers.manangerName}    
//                         <br>
//                             <i class=" fas fa-mug-hot "></i> Manager
//                         </div>
//                         <ul class="list-group list-group-flush ">
//                             <li class="list-group-item ">ID: </li>
//                             <li class="list-group-item ">Email: </li>
//                             <li class="list-group-item ">Office Number: </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="col-lg-4">
//                     <div id="engineerCard" class="card" style="width: 18rem;">
//                         <div class="card-header" style="background-color: blue; color:white;">
//                             Name<br>
//                             <i class="fas fa-glasses"></i> Engineer
//                         </div>
//                         <ul class="list-group list-group-flush ">
//                             <li class="list-group-item ">ID: </li>
//                             <li class="list-group-item ">Email: </li>
//                             <li class="list-group-item ">Github: </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="col-lg-4">
//                     <div class="card" style="width: 18rem;">
//                         <div class="card-header" style="background-color: blue; color:white;">
//                             Name<br>
//                             <i class="fas fa-user-graduate"></i> Intern
//                         </div>
//                         <ul class="list-group list-group-flush ">
//                             <li class="list-group-item ">ID: </li>
//                             <li class="list-group-item ">Email: </li>
//                             <li class="list-group-item ">School: </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </body>

//     </html>
//     `

//     )
// };

// async function init(teamMember) {
//     const manager = await promptManager();
//     generateTeamMember();
//     if (`${choices}` === "Engineer") {
//         promptEngineer();
//     } else if (`${choices}` === "Intern") {
//         promptIntern();
//     } else if (`${choices}` === "I'm done adding team members.") {
//         console.log("Fairwell Amigo");
//     }
// }



promptManager();