const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "http://localhost:8080/"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} ...` );
});