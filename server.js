import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';//dirname(fileURLToPath(import.meta.url));
import { fileURLToPath } from "url";imp
import morgan from "morgan";
import morgan from "morgan";

const fileName= dirname(fileURLToPath(import.meta.url));
var app = express();

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
  res.sendFile(fileName+"/index.html");
})

app.listen(2000, () => {
  console.log("Server connected and listening on port 2000");
});

app.get("/",(req,res)=>{
  console.log("hello World");
})