const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/post-location', (req, res) => {
    console.log("Request: ", req.query);
    res.send({
        "success": true
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})