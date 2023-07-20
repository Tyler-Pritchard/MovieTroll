const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const recordingRoute = require("./routes/recording");
const cors = require("cors");

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connection Successful!"))
    .catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/recordings", recordingRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!")
});
