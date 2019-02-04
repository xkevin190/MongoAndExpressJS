const API_PATH = "/api"
const films = require("../../resources/films")

module.exports = function (app) {
    app.get(`${API_PATH}/films`, (req, res)=>{
        res.json(films)
    });
}