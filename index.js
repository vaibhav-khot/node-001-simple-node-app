
/*   ob1 ===Content Type text/plain add Pre tag And inside that data
     ob2 ===Content Type text/html  treate data as HTML
  */

  var fs = require("fs");

  var data = fs.readFileSync('input.txt');

  console.log(data.toString());
  console.log("Program Ended");
