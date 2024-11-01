// const fs = require('node:fs/promises');
const fs = require('node:fs');
const http = require('http');
fs.writeFile("hey.txt","",function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.appendFile("hey.txt","mai acha hu",function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.copyFile("hello.txt","./copy/copy.txt",function(err){
    if(err) console.error(err.message);
    else console.log("done");
})
// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })
// fs.rm("./copy",{recursive:true},function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })
const server =http.createServer(function(req,res){
    res.end("hello world");
})
server.listen(3000);