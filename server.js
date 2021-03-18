const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/movies'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/movies/index.html');
})

app.listen(PORT, () => {
    console.log('SERVIDOR INICIADO NA PORTA:' + PORT);
})