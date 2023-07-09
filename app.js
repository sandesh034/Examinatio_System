const express = require("express")
const app = express()
require("./Database/connection")
const router_path = require("./Routers/router")
const PORT = process.env.PORT || 3000
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())
app.use('/', router_path)


app.listen(PORT, () => {
    console.log(`The server is started at port ${PORT}`)
})

