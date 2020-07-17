const express = require('express');
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const validation = require('../validation');
const { authSign } = require('./authentication');

const router = express.Router();

router.use(bodyParser.json());

router.post('/register', async (req, res) => {

    let body = req.body;

    if (body.actionkey === 'regnewreg') {

        const buser = new RUser({
            email: body.email,
            google: body.google

        })

        try {
            await buser.save()
        } catch
        {
            res.send('there was an error');
        }

        res.send('user created');
    }
});

router.post('/login', async (req, res) => {

    const body = req.body;

    const exist = await BUser.findOne({ email: body.email });
       

    if (body.actionkey === 'blogin') {

        if (exist) {
            const checkpassword = await bcrypt.compare(body.password, exist.password);
            
            if (checkpassword) {

                try {
                    let token = await authSign(exist._id, exist.permissionlevel)
                    console.log(body.email + ' has logged in')
                    res.send({jwt: token});

                } catch (err) {
                    console.log(err)
                }


            } else {
                res.send('password is not correct');
            }

        } else {
            res.send("email doesnt exist please try again");

        }

    }


});



module.exports = router;