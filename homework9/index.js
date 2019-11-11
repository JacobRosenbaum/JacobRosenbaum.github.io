const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt([{
            type: "input",
            message: "What is your name",
            name: "name"
        }, {
            type: "input",
            message: "What is your Github username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your favorite color?",
            name: "color",
        },
    ])
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios.get(queryUrl)
            .then(function(response) {
                fs.writeFile('github.html',
                    `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <title>GitHub Profile Generator</title>
                </head>
                
                <body style="background-color: lightgrey;">
                    <header style="text-align: center; font-size: 40px; font-weight: bold; margin-top: 50px; ">
                        GitHub Profile Generator
                    </header>
                    <div class="card" style="width: 18rem; text-align: center; background-color: yellow; margin: 0 auto; margin-top: 20px; ">
                        <div class="card-body">
                            <div> <img src="${response.data[0].owner.avatar_url}" style="height: 175px; width: 175px;"></div>
                            <h5 class="card-title">"Hi"</h5>
                            <h5 class="card-title">"My name is "</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card" style="width: 18rem; text-align: center;background-color: yellow;margin: 0 auto;  margin-top: 30px; ">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card" style="width: 18rem; text-align: center;background-color: yellow; margin: 0 auto; margin-top: 30px; ">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card" style="width: 18rem; text-align: center; background-color: yellow; margin: 0 auto; margin-top: 30px; ">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card" style="width: 18rem; text-align: center; background-color: yellow; margin: 0 auto; margin-top: 30px; ">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                
                </html>`, (err) => {
                        if (err)
                            throw err;
                        console.log('The file has been saved!');

                    });

            });
    });