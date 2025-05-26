
const fs = require('node:fs');

//Declare data to be written
const data = "This is a string to save to text file :)"

// Writing an error to file
console.log("Writing to file");
// Function call
fs.writeFile('output.txt', data, (err)=>{
  // Check for errors
  if (err){
    console.error(err);
  }else{
    // Successful confirmation
    console.log("File Written Successfully");
  }});




  