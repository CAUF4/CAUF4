// @ts-check

/* eslint-disable no-console */
const express = require("express")

const app = express()

const PORT = 4242

app.get("/", (req, res) => {
    res.status(200).send("안녕, Node.js!")
})

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})
