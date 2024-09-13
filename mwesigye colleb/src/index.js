const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const pug = require('pug');
const path = require('path');
const FlightBooking = require('./mongodb');

const templatePath = path.join(__dirname, '../views');
app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.render("index");
});

app.post('/submit', async (req, res) => {
    console.log("Received data:", req.body);
    try {
        const flightBookingData = new FlightBooking(req.body);
        await flightBookingData.save();
       // display the successful element from the pug file
       res.render("index", { success: true, message: "Form submitted successfully" });
    } catch (error) {
        console.error("Error saving to database:", error);
        res.status(500).json({ success: false, message: 'Error saving data' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});