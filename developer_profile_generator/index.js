const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const pdf = require('html-pdf');
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
let readFile;

function prompt() {
    return inquirer.prompt([{
                type: "input",
                message: "What is your Github username?",
                name: "username",
            },
            {
                type: "list",
                message: "What is your favorite color?",
                name: "color",
                choices: ["green", "blue", "purple", "red"]
            },
        ])
        .then(function({ username, color }) {
            const queryUrl = `https://api.github.com/users/${username}`;
            console.log(color);
            axios.get(queryUrl)
                .then(function(response) {
                    console.log(color);
                    fs.writeFile('github.html',
                        `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
                    <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet">
                    <title>GitHub Profile Generator</title>
                </head>
                
                <body style="background-color: lightgrey;">
                <div class="container" style= "color:white; font-family: 'Orbitron', sans-serif;">
                    <header style="text-align: center; font-size: 40px; font-weight: bold; margin-top: 50px; margin-bottom: 20px; color:black ">
                        GitHub Profile Generator
                    </header>
                    <div class="jumbotron" style="margin: 0 auto; width: 1200px; text-align: center; background-color: ${color}" >
                    <div> <img src="${response.data.avatar_url}" style="height: 250px; width: 250px;"></div>
                        <h1 class="display-4" style="margin-top:10px; ">Hi!</h1>  
                        <h2 class="display-4">My name is ${response.data.name}!</h2>
                        <h3 class="lead" style="margin-bottom:9px;margin-top:9px; font-size:25px; "> Currently at ${response.data.company}</h3>
                        <div class="row" style="font-size:20px; ">
                            <div class="col-lg-6">
                                    <i class="fas fa-location-arrow"></i>
                                    ${response.data.location}
                                </div>
                                <div class="col-lg-6">
                                    <i class="fab fa-github"></i>
                                    <a href="${response.data.html_url}" target="blank" style="color:white"> Github</a>
                            </div>
                    </div>
                </div>
                    <div style="margin-top:15px; margin-bottom:5px;  font-size:25px; color:black; text-align:center;"><b>${response.data.bio}</b></div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card" style="width: 400px; height:120px; text-align: center;background-color: ${color};margin: 0 auto;  margin-top: 30px; ">
                                <div class="card-body">
                                    <h3 class="card-title">Public Repositories</h3>
                                    <h4 class="card-subtitle" style="color:white">${response.data.public_repos}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card" style="width: 400px; height:120px; text-align: center;background-color: ${color}; margin: 0 auto; margin-top: 30px; ">
                                <div class="card-body">
                                <h3 class="card-title">Followers</h3>
                                <h4 class="card-subtitle" style="color:white">${response.data.followers}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card" style="width: 400px; height:120px; text-align: center; background-color: ${color}; margin: 0 auto; margin-top: 30px;margin-bottom: 30px; ">
                                <div class="card-body">
                                <h3 class="card-title">Github Stars</h3>
                                <h4 class="card-subtitle" style="color:white">${response.data.public_gists}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card" style="width: 400px; height:120px; text-align: center; background-color: ${color}; margin: 0 auto; margin-top: 30px;margin-bottom: 30px; ">
                                <div class="card-body">
                                <h3 class="card-title">Following</h3>
                                <h4 class="card-subtitle" style="color:white">${response.data.following}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>
                </body>
                
                </html>`, (err) => {
                            if (err)
                                throw err;
                            console.log('The file has been saved!');

                        });

                });
        });
}

async function init() {
    try {
        //await fs.unlinkSync("github.pdf");
        //await fs.unlinkSync("github.html");
        await prompt();
        var options = { format: 'Letter' };
        options = {
            height: "1200px",
            width: "1200px"
        }
        readFile = await readFileAsync('github.html', 'utf8')
    } finally {

        pdf.create(readFile, options).toFile('github.pdf', function(err, res) {
            if (err) return console.log(err);
            console.log("pdf has been created");
        });
    }
}
init();