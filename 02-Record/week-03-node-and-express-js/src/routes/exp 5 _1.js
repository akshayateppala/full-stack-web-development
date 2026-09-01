//LOCAL module
const { add, subtract } = require('./node.js');

console.log(add(2, 3)); 

//BUILD IN  module
//fs-read,write
const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello World!');
const content = fs.readFileSync('hello.txt','utf8');
console.log(content); 

//os-operating system info
const os = require('os');

console.log(os.platform()); 
console.log(os.totalmem());

//third party module
// express 
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello!'));
app.listen(3000);