const fs = require('fs'),
    filename = process.argv[2];

console.log('Will read ' + filename)

fs.readFile(filename, function(err, data){
    if(err)console.log('error', err);
    else{
        console.log(data.toString())
    }

})
