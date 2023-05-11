let fs = require("fs");

fs.readFile('./private/files/test2.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Данные в файле: " + data.toString());
});
