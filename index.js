const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv').config();
const port = process.env.PORT || 3000;
const reqPath = path.join(__dirname, '/views');
const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const db = require('./db/db.js');

app.set('view engine', 'ejs');
app.set('views', reqPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(reqPath));
app.use('/', router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server listening on port http://localhost:${port}`);
    }
})