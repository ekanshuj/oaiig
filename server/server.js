const express = require("express");
const app = express();

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

const imageRoute = require("./routes/imageRoute");
app.use("/api/v1", imageRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { });