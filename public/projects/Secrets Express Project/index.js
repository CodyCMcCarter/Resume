//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var result = "";

app.use(bodyParser.urlencoded({ extended: true }));

function CheckPassword(req, res, next) {
    var password = req.body.password;
    if(password === "ILoveProgramming") {
        result = __dirname + "/public/secret.html";
    } else {
        result = __dirname + "/public/index.html";
    }
    next();
}

app.use(CheckPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    res.sendFile(result);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
