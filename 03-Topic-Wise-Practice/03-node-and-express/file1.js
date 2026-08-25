//APPEND
// asynchronous
const fs = require('fs');
fs.appendFile('task.txt', '\nThis is appended content.', err => {
  if (err) throw err;
  console.log('Content appended!');
});

//DELETE
fs.unlink('task1.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});
