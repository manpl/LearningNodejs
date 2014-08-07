const   file = require('file'),
        dir = process.argv[2];

console.log('traversing files system from ' + dir)


file.walk(dir,function(err, dirPath, dirs, files){
    files.forEach(function(path){
        console.log(path);
    });
})


