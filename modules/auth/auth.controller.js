const map_florist_req = require("../../helper/map_florist_req");
const floristModel = require("../../models/florist.model")
const passwordHash = require('password-hash');
const customError = require("../../helper/customError");
const jwt = require('jsonwebtoken');

function createToken(data){
    let token = jwt.sign({
        _id: data._id
    }, '1234567890-=;/../.')
    return token;
}

async function registerFlorist(req,res,next){
    // TODO username 10 ota pascha
   try{
    console.log(req.body);
    var newFlorist = new floristModel({});
    var mappedFlorist = map_florist_req(newFlorist, req.body);
    mappedFlorist.password = passwordHash.generate(req.body.password);
    const florist = await mappedFlorist.save();
    res.status(201).json(florist);

   }catch(err){
       return next(err)
   }
}

async function FloristLogin(req,res,next){
    try{
        const florist = await floristModel.findOne({
            username: req.body.username
        })
        if(!florist){
            throw new customError('Invalid credentials', 400);
        }
        var isMatched = passwordHash.verify(req.body.password, florist.password)
        if(!isMatched){
            throw new customError('Invalid credentials', 400);
        }
        florist.password = '';
        var token = createToken(florist);

        res.json({
            user: florist,
            token
        })
    }catch(err){
        return next(err);
    }
}

module.exports = {
    registerFlorist,
    FloristLogin
}