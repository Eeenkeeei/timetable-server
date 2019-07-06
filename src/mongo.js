const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://eeenkeeei:shiftr123@ds347707.mlab.com:47707/heroku_ww8906l5";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
mongoClient.connect(function(err, client) {
    const db = client.db("heroku_ww8906l5");
    const collection = db.collection("users1");
    let user = {name: "Tom", age: 23};
    collection.insertOne(user, function (err, result) {
        if (err) {
            return console.log(err);
        }
        // взаимодействие с базой данных
        client.close();
    })
});
