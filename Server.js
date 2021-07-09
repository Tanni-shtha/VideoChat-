const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require('uuid')

app.set('view engine', 'ejs');
app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
})

app.get('/:Room', (req, res) => {
    res.render('Room', { roomid: req.params.room });
})



server.listen(8000)

