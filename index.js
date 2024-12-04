const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const app = express();

app.use(bodyParser.json());

const bookings = [];

app.post('/api/book', async (req, res) => {
    const { roomId, customerName, checkInDate, checkOutDate } = req.body;

    // Execute Cardano CLI to interact with smart contract
    const datum = JSON.stringify({ roomId, customerName, checkInDate, checkOutDate });
    exec(`cardano-cli transaction submit --tx-file ${datum}`, (error, stdout) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            res.status(500).send('Booking failed.');
        } else {
            bookings.push({ roomId, customerName, checkInDate, checkOutDate });
            res.status(200).send('Booking successful.');
        }
    });
});

app.get('/api/bookings', (req, res) => {
    res.status(200).json(bookings);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
