const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorMiddleware")

connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/auth", require("./routes/authRoutes"))

app.use("/api/course", require("./routes/courseRoutes"))

app.use("/api/enrollment", require("./routes/enrollmentRoutes"))

app.get("/", (req, res) => {
    res.send("LMS Backend Running")
})

app.use(errorHandler)

const PORT = process.env.PORT || 10000

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})