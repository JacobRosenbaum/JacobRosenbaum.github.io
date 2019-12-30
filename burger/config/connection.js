var mysql = require("mysql");
if (process.env.JAWS_URL) {
    connection = mysql.createConnection(process.env.JAWS_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Squidward11",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;