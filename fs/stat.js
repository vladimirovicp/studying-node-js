const fs = require("fs");

console.log("Собираюсь получить информацию о файле!");
fs.stat('./private/files/test2.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Информация о файле успешно получена!");

    // Проверим тип файла
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});
