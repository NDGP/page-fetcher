const fs  = require('fs');
const request = require('request');

const fetch = (url, file) => {
request(url, (error, response, body) => {
  fs.writeFile(file, body, (err) => {
    if (err) console.log("error");
    console.log(`file saved, file size is ${body.length} bites`)
  })

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //('body:', body); // Print the HTML for the Google homepage.
});

}

let args = process.argv.slice(2)
let url = args[0]
let file = args[1]

fetch(url, file)