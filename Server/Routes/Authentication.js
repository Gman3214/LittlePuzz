const jwt = require('jsonwebtoken');
const bodyParser = require('../node_modules/body-parser');
const secret = 'thisisthesecretkeychaps'

const authVerify = (req, res, next) => {
    const jwtToken = req.headers.jwt;

    console.log(jwtToken)

    jwt.verify(jwtToken, secret, (err, user) => {
        if (err){
            console.log('did not pass')
            return res.sendStatus(403);
        }
        else{
            req.user = user;
            next();
        }
    })
}

const authSign = async (id, permissionsLevel) => {

    return await jwt.sign({id: id, pl: permissionsLevel}, secret);
}

module.exports.authSign = authSign;
module.exports.authVerify = authVerify;

