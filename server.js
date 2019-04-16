const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
// const http = require("http").Server(app)
// const io = require("socket.io")(http)

// io.on("connection", (socket) => {
//   console.log("user connected");
//   socket.send("Hello user")
// })


app.use(bodyParser.json());

const books = require("./routes/api/books")

mongoose.connect("mongodb://localhost/googlebooks", {useNewUrlParser : true})
  .then(() => console.log("Connected to Mongodb"))
  .catch(err => console.log(err));


// Routes
app.use("/api/books", books)

const PORT = process.env.PORT || 5000;


// http.listen(PORT, () => console.log(`Server running on port ${PORT}`))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
