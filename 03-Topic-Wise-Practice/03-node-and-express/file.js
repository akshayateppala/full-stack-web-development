//READING FILE
//asynchrous
const fs = require('fs');
fs.readFile('task.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); 
});

//synchrous

try {
  const data = fs.readFileSync('task.txt', 'utf8');
  console.log(data); 
} catch (err) {
  console.error(err);
}

//WRITING FILE
//asynchronous
const content = 'This is new content for the file.';
fs.writeFile('newfile.txt', content, err => {
  if (err) throw err;
  console.log('hii hii');
});

//synchrous
try {
  fs.writeFileSync('newfile.txt', 'This is new content.');
  console.log('File saved synchronously.');
} catch (err) {
  console.error(err);
}


