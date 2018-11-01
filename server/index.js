const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
res.send("You are now in Docker Express! This is Awesome.")
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})