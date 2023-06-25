const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./routes/userRoutes")
const PORT = process.env.PORT || 3500
const cors = require("cors")


app.use(cors({
    origin: {
        "http://localhost:3000": true,
    }
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/mini_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to MongoDb');
}).catch((error) => {
    console.error('error connectiong to MongoDb', error)
})


app.use("/users", router)

app.listen(PORT, () => console.log(`Connected to localhost PORT ${PORT}`))