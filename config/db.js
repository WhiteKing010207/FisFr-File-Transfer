require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Database connection
        await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database connected");
    } catch (err) {
        console.error("Connection failed", err);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectDB;

