// npm start (command to start server)
require('dotenv').config();
const express = require("express"); // load express
const mongoose = require("mongoose"); // Takes the url from .env
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const bodyParser = require("body-parser"); // parse the request body
const cors = require("cors"); // enable CORS
const { getHoldingsSummary } = require("./utils/holdingsSummary");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express(); // create application

app.use(cors()); // enable CORS
app.use(bodyParser.json()); // parse JSON request body


app.get("/allHoldings", async(req,res) => {
    let allHoldings =  await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions", async(req,res) => {
    let allPositions =  await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
    const newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();
    res.json({ message: "Order created successfully!" });
});

app.get("/holdingsSummary", async (req, res) => {
    const allHoldings = await HoldingsModel.find({});
    const summary = getHoldingsSummary(allHoldings);
    res.json(summary);
});



app.listen(PORT, () => { // trigers the start of application
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB connected!");
});


