
const MongoClient = require("mongodb").MongoClient;

const dbName = "meanGames";
const dburl = "mongodb://localhost:27017/" + dbName;
var _connection = null;

var open = function () {
    MongoClient.connect(dburl, { useUnifiedTopology: true }, function (err, client) {
        if (err) {
            console.log("DB connection failed");
            return;
        }

        _connection = client.db(dbName);
        console.log("DB connection opened at ", _connection);
    });
};

const get = function () {
    return _connection;
};

module.exports = {
    open: open,
    get: get
};


