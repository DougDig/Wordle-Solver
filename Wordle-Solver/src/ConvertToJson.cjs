const fs = require('fs');

// Read the text file
fs.readFile("Word List.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Split words by new line
    const wordsArray = data.split(/\r?\n/).filter(word => word.trim() !== "");

    // Convert to JSON format
    const jsonData = JSON.stringify(wordsArray, null, 2);

    // Save as a JSON file
    fs.writeFile("words.json", jsonData, "utf8", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("JSON file created successfully!");
    });
});
