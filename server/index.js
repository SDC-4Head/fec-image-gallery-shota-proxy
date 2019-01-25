const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");
const proxy = require("http-proxy-middleware");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use("/rooms/:roomid", express.static(path.join(__dirname, "/../client")));

// app.use('/house', proxy({
//   target: 'http://18.223.185.89'
// }));
// app.use('/rooms/:id/photos', proxy({
//   target: 'http://54.175.98.175'
// }));
app.use(
  "/rooms/:id/photos",
  proxy({
    target: "ec2-54-202-227-148.us-west-2.compute.amazonaws.com:3000"
  })
);
// app.use('/api/reviews/rooms/:roomid', proxy({
//   target: 'http://54.202.111.150'
// }));
// app.use('/api/ratings/rooms/:roomid', proxy({
//   target: 'http://54.202.111.150'
// }));
app.use('/api/rooms/:id', proxy({
  target: "ec2-54-202-227-148.us-west-2.compute.amazonaws.com:3000"
}));

app.listen(port, () => {
  console.log("server running");
});