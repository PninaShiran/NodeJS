const express = require('express');
const app = express();
const cors = require('cors');
const product = require('./routing/product');
const user = require('./routing/user');
const order = require('./routing/order');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.listen(3001,()=>{
    console.log("listen port 3001");
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

main().catch(err=> console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/shopping-project');
}

app.use("/product",product);
app.use("/user",user);
app.use("/order",order);