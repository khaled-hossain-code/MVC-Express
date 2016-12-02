var user = require('../models/user');

module.exports = {
    
    log: (req, res, next)=>{
        console.log(req.path);
        next();
    },

    index: (req,res,next)=>{
        res.send(user);
    },

    add: (req, res, next)=>{
        user.push(req.body);
        res.status(200).json([{message: "user added"}]);
    }
}