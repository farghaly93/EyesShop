const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
module.exports = (req, res, next) => {
    try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = token.split("iLCJQcm9qZWN0IEFkbWluaXN0cmB7HjF0b3IiXX0.O27AJdZmy_qcRclJllPUSDSbu5qNET").join("A");
    const encoded = jwt.verify(decodedToken, 'Admin Mohammad Anwar Saadawy');
    if(encoded) {
    req.user = {username: encoded.username, userId: encoded.userid};
    next();
        }
    }
    catch(err) {
        res.status(401).json({err, mess: 'Please Login as (ADMIN) first...'});
    }
}


