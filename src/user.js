"use strict";

const {BadRequestError, NotFoundError, InvalidCredentialsError} = require('restify-errors');

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://ROOT:shiftr123@ds347707.mlab.com:47707/heroku_ww8906l5";
const mongoClient = new MongoClient(url, {useNewUrlParser: true});
const bcrypt = require('bcryptjs');

exports.authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
        mongoClient.connect(function (err, client) {
            const db = client.db("heroku_ww8906l5");
            const collection = db.collection("users");
            console.log('user')
            collection.findOne({email}, (err, data) => { //  в data возвращается объект
                if (err) return reject(err);
                let objectToSend = null;
                if (data !== null) {
                    if (bcrypt.compareSync(password, data.password) === true) {
                        objectToSend = data;
                        // console.log(objectToSend);
                        console.log('OBJECT SEND authenticate');
                        resolve(objectToSend);
                    }
                }
                resolve(objectToSend);
            })
        });
    });
};


exports.returnUpdatedObject = (username, password) => {
    return new Promise((resolve, reject) => {
        mongoClient.connect(function (err, client) {
            const db = client.db("heroku_ww8906l5");
            const collection = db.collection("users");
            collection.findOne({username, password}, (err, data) => { //  в data возвращается объект
                if (err) return reject(err);
                let objectToSend = null;
                if (data !== null) {
                    if (password === data.password) {
                        objectToSend = data;
                        console.log('OBJECT SEND returnUpdatedObject')
                    }
                    if (password !== data.password) {
                        console.log('Старый пароль был изменен');
                    }
                }
                resolve(objectToSend);
            })
        });
    });
};
