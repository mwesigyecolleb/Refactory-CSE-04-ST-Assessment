const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/flightBooking')

.then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Error connecting to MongoDB");
});

const flightBooking = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pobox: {
        type: String,
        required: true
    },
    emergency: {
        type: String,
        required: true
    },
    passport: {
        type: String,
        required: true
    },
    departureCity: {
        type: String,
        required: true
    },
    destinationCity: {
        type: String,
        required: true
    },     
})

const FlightBooking = new mongoose.model("FlightBooking", flightBooking);

module.exports = FlightBooking;
