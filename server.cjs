const express = require("express");
const app = express();
const port = 4005;
const oracledb = require("oracledb");

const cors = require('cors');
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
    return res.sendStatus(200);  
  }
  next();
});



const Common = require("./routes/Routes_Common.cjs")
const RequestManPower = require("./routes/Routes_RequestManPower.cjs")


app.use("/api/Common", Common);
app.use("/api/RequestManPower", RequestManPower);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  