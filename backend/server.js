var express = require("express");
var jsonServer = require("json-server");

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// server.get("/test", (req, res)=>{
//     res.json()
// })

var server = express();

server.use(express.json());

server.use("/", jsonServer.router("db.json"));

server.listen(5000, () => {
  console.log("Server listening on port 5000..");
});
