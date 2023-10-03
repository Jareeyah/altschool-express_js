const express = require("express");

const itemRouter = require("./routers/router");

const PORT = 9000;

const app = express();

app.use("/items", itemRouter);

app.get("/", (req, res) => {
	res.end("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server created successfully on ${PORT}`);
});