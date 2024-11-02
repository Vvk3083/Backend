// // const fs = require('node:fs/promises');
// const fs = require('node:fs');
// const http = require('http');
// fs.writeFile("hey.txt","",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.appendFile("hey.txt","mai acha hu",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })
// // fs.unlink("hello.txt",function(err){
// //     if(err) console.error(err.message);
// //     else console.log("done");
// // })
// // fs.rm("./copy",{recursive:true},function(err){
// //     if(err) console.error(err.message);
// //     else console.log("done");
// // })
// const server =http.createServer(function(req,res){
//     res.end("hello world");
// })
// server.listen(3000);
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// // Middlewares  request aur response ke beech mein communication handle karta hai. Socho ise ek chowkidaar ki tarah jo gate ke andar jaane se pehle aur baahar aane se pehle sab cheezein check karta hai.
// // Ek common use case JavaScript mein express.js framework ke saath hai. Imagine tum ek website bana rahe ho jahan users apne profile ko update kar sakte hain. Lekin tum chahte ho ki sirf logged-in users hi apna profile update kar sakein. Ab yeh middleware ki madad se aasan ho jaata hai.
// // Jab user apna profile update karne ki request bhejta hai, woh request sabse pehle middleware ke through jaati hai. Yeh middleware check karta hai ki user logged-in hai ya nahi. Agar user logged-in hai toh request aage badhti hai aur profile update ho jaata hai. Lekin agar user logged-in nahi hai toh middleware request ko rok deta hai aur user ko login karne ke liye kehta hai.
// // Toh, Middlewares ka basic kaam hai request aur response ke beech mein aane wali cheezon ko control karna, jaise authentication, logging, data validation, etc.
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get("/",function(req,res){
    res.send("champion");
})
app.listen(3000);