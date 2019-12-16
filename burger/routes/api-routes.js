var Burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {
    // Get all books
    app.get("/api/all", function(req, res) {
        Burger.findAll({}).then(function(results) {
            res.json(results);
        });
    });
}