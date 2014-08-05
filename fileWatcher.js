const fs = require('fs'),
    filename = process.argv[2];

console.log('Will watch ' + filename)

var watcher = fs.watch(filename, function(data){
  // data is op type
    console.log(data.toString())
});
