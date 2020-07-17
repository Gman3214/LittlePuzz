const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');  

const app = express()
const port = 9001


app.use(cors())

app.get('/', (req, res) => {
    res.send("hello")
});


app.listen(port, () => {
    console.log(`Server started on port` + port);
});