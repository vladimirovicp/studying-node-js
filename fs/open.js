const fs = require('fs')

console.log("Собираюсь открыть файл!");

fs.open('./private/files/test.txt', 'r+', (err, fd) => {
    if (err) {
        console.log("Файл не открыт!");
        return console.error('err',err);
    }
    //fd - это дескриптор файла
    console.log("Файл успешно открыт!");
})
