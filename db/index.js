const mongo = require("./connect");


module.exports = {
    postFilm: function(film) {
        const db = mongo.instance().db('kevinDatabase');
        const resp = db.collection("films").insertOne(film);
        return resp;
    }
}