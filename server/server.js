const express = require("express");
const app = express();

const path = require("path");

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.static(path.join(__dirname, './public/index.html')));
app.use(express.json());
app.use(cors());

const imageRoute = require("./routes/imageRoute");
app.use("/api/v1", imageRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { });