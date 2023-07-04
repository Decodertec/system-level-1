const fs = require("fs");

function writeFile() {
  // Set the file name and content
  const fileName = "myfile.txt";
  const fileContent = "Newton School";

  // Create the file with the given name and content
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("File created successfully!");
    }
  });
}

// Call the function to create the file
writeFile();
