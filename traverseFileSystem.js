const   fs = require('fs'),
        dir = process.argv[2];

console.log('traversing files system from ' + dir)

var depth = 2,
    walk = function(directory, depth, int){
        let files = fs.readdirSync(directory)
        
        let prefix = new Array(int).join('  ');
        for(let i = 0; i<files.length; i++){
            let fullPath = directory + '\\' + files[i];

            console.log(prefix + fullPath);                
            
            try{
                if(depth > 0 && fs.statSync(fullPath).isDirectory()){
                    walk(fullPath, depth-1, int+1);
                }
            }catch(e)
            {
               // console.log(e);
            }
        }

        console.log('');
    }


walk(dir, 2, 0);

