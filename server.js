const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
//const cron = require("node-cron");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

// //node-cron
// const script = require("./script");
// cron.schedule("0 2 * * *",script);

//Cors

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}

app.use(cors(corsOptions));
//Template engine
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

//Routes
app.use("/api/files", require("./routes/files"));
app.use("/files",require("./routes/show"));
app.use("/files/download",require("./routes/download"));

app.listen(PORT, ()=>{
    console.log(`Listening on post ${PORT}`);
})