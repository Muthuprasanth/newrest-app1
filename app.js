const express = require('express')
const app = express()

app.get('/gg', (req, res) => {
    console.log("mmmmmmm")
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))