const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const api = process.env.API_URL;

var path = require('path')
const express = require('express')

const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors()),
app.use(bodyParser.json())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('./src/client/views/index.html')
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const getData = async (req, res) => {
    const { body: { url } } = req;
    const apiUrl = await fetch(`${api}?url=${url}&key=${apiKey}&lang=en`)
    const data = await apiUrl.json();
    res.send(data);
}

app.post('/api', getData)






