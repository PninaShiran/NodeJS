const { Users } = require("../model")

exports.post = async(req,res)=>{
    let arr = await Users.find();
    let user = req.body;
    user.customerId = arr.length+1;
    const newUser = new Users(user);
    await newUser.save();
    res.status(200).send(newUser);
}

exports.checkUser = async(req,res)=>{
    let name = req.body.name;
    let password = req.body.password;
    const user = await Users.findOne({name:name,password:password});
    if(user===null)
        res.status(500).send("המשתמש אינו קיים!");
    else
        res.status(200).send(user);
}