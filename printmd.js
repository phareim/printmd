var markdownpdf = require("markdown-pdf"); // , fs = require("fs");

console.log("\nPrinting markdown to pdf.");

if(process.argv[2] === null) {
	console.log("Please supply an input file, and an optional output file.");
	return;
}

var filename = process.argv[2];
var tofile = process.argv[2]+".pdf";

if(process.argv[3] != null) {
	tofile = process.argv[3];
};

console.log("Input file: " + filename);
console.log("output file: " + tofile);

markdownpdf().from(filename).to(tofile, function () {
  console.log("\nDone printing, bye!  (^^,) ");
});