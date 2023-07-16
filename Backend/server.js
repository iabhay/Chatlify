const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./Data/data");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
    res.send("Fetching");
});

app.get("/api/chat", (req, res)=>{
    res.send(chats);
});

app.get("/chat/:id", (req, res) => {
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server Started on ${PORT}`));