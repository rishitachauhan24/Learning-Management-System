const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env['MONGO-URI'];
        if (!uri) {
            throw new Error("MONGO_URI check environment variables on your deployment platform");
        }
        await mongoose.connect(uri)

        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB