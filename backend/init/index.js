require('dotenv').config();
const mongoose = require("mongoose");
const HoldingsModel = require("../model/HoldingsModel");
const PositionsModel = require("../model/PositionsModel");

const { holdings } = require("./data");
const { positions } = require("./data");

const uri = process.env.MONGO_URL;

main()  
    .then(() => {
    console.log("connected to DB");
})
.catch((err) => console.log(err));

async function main() {
    mongoose.connect(uri);
}

const initDB = async () => {
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(holdings);
    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(positions); 
    console.log("data was initialized");
};

initDB();
