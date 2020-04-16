const mongoose = require("mongoose");
const config = require("config")
const db = config.get("mongoURI")

// Async Connection To Our Database
const connectDB = async () => {
 try {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected...")
 } catch(err) {
     console.error(err.message)
     // Exit Process With Failure
     process.exit(1)
 }
}

module.exports = connectDB
