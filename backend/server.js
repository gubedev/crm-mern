const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const config = require("./config")
const connectDB = require("./utils/db")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: "./.env" })
connectDB()

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  })
}

const port = process.env.NODE_ENV === "DEV" ? process.env.DEV_PORT : process.env.PORT
app.listen(port, () => console.log(`${config.APP_NAME} ${config.APP_VERSION} is running on port ${port}!`))

module.exports = app
