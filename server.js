const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

//Current Data and Time
const date = Date.now();
const date_obj = new Date(date);
const gdate = date_obj.getDate();
const month = date_obj.getMonth();
const year = date_obj.getFullYear();
const time = date_obj.getTime();
const fileName = year + "-" + month + "-" + gdate + "-" + time;

//content
const timestamp = new Date().toISOString();

//file
fs.writeFile(`${fileName}.txt`, timestamp, function (err) {
  console.log("File Created Successfully");
});

//read file
let files = [];
fs.readdir("/", function (err, list) {
  files.push(list);
});

//get files
app.get("/", (req, res) => {
  res.json({ Files: { files } });
});

//Server started
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
