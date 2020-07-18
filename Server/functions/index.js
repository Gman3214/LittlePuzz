const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const app = express();

admin.initializeApp(functions.config().firebase);


app.post('/changelevel', (req, res) => {
    admin.database().ref("users/" + req.body.userid).update(
        {
            level: req.body.level
        }
    )
});

app.post('/changerole', (req, res) => {
    admin.database().ref("users/" + req.body.userid).update(
        {
            role: req.body.role
        }
    )
});

exports.createNewUserDatabaseEntry = functions.auth.user().onCreate((user) => {

    functions.logger.log("hello there new user " + user.uid)

    admin.database().ref("users").push(
        {
            userId: user.uid,
            role: "beginner",
            level: 0,
            loginAmount: 0
        }
    )

});


