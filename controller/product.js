const { Products } = require("../model");

exports.get = async(req,res)=>{
    const products = await Products.find();
    res.status(200).send(products);
}

exports.post = async(req,res)=>{
    let arr = await Products.find();
    let product = req.body;
    product.id = arr[arr.length-1].id+1;
    const newProduct = new Products(product);
    await newProduct.save();
    res.status(200).send(newProduct);
}

exports.delete = async(req,res)=>{
    let id = req.params.id;
   await Products.deleteOne({id:id});
   let arr = await Products.find();
//    for(let i=Number(id); i<arr.length; i++){
//       await Products.updateOne({id:(i+1)},{id:(i-1)});
//    } 
   res.status(200).send("the product was deleted!");
}