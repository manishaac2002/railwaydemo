const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/test-api', function (req, res) {
    console.log("test router called...");
    res.send('Hello World')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(` server is running on ${port}`);
})