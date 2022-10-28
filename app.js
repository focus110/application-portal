const express = require("express");
const app = express();
const users = require("./routes/users");
const auth = require("./routes/auth");
const avatar = require("./routes/avatar");
const course = require("./routes/course");
const olevel = require("./routes/olevel_result");
const jambResult = require("./routes/jamb_result");
const guardianInfo = require("./routes/guardianInfo");
const cors = require("cors");

// database
const db = require("./db/db");

var corsOptions = {
  origin: "http://localhost:8081",
};

// middleware
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/avatar", avatar);
app.use("/api/course", course);
app.use("/api/olevel", olevel);
app.use("/api/jamb-result", jambResult);
app.use("/api/guardianInfo", guardianInfo);

// remove before deploy
app.get("/", (req, res) => {
  res.send("Server is running");
});

db.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
  // console.log("No re-sync db.");
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Now runnig on localhost ${PORT}.`);
});
