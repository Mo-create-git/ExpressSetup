import express from "express";

const app = express();

const port = 5001;

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.get("/Password", (req, res) => {
    res.send("Enter your Password");
});

app.get("/username", (req, res) => {
    res.send("Enter your username");
});

app.listen(port, () => {
    console.log("Server is Running");
});
