const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const database = require("./src/config/database.js");
const authRouter = require("./src/routes/auth.js")

dotenv.config()

const app = express();
app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use('/', authRouter)

const PORT = process.env.PORT || 8000;

database()

app.listen(PORT, () => {
    console.log("server is running", PORT)
})