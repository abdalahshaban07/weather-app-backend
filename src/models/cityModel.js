const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String },
    mainWeather: { type: String },
    temp: { type: Number },
    pressure: { type: Number },
    humidity: { type: Number },
    speedOfWind: { type: Number },
    degOfWind: { type: Number },
    country: { type: String },
    sunrise: { type: String },
    sunset: { type: String }

});

module.exports = mongoose.model("City", citySchema);