const { Orders } = require("../model");

exports.post =  async(req,res)=>{
    let arr = await Orders.find();
    let order = req.body;
    order.id = arr.length+1;
    const newOrder = new Orders(order);
    await newOrder.save();
    res.status(200).send(newOrder);
}