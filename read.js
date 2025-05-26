
const fs = require('node:fs');

  // readFile Function call
  fs.readFile('output.txt', (err, fileText)=>{
    // check for any errors
    if(err){
      console.error(err);
      return;
    }
    // output the readfile contents to the console
    console.log("File Contents:");
    console.log(fileText.toString());

    console.log("File Read Successfully");
  });



  