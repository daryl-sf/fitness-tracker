const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.get('/test', (req, res) => res.json({ name: 'Daryl Findlay' }));

app.listen(port, () => console.log(`listening on port ${port}`));

