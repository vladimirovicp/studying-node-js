const fs = require("fs");
const buf = new Buffer(1024);

console.log("Собираюсь открыть существующий файл");
fs.open('./private/files/test2.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("Файл успешно открыт!");
    console.log("Иду читать файл");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Печатайте только прочитанные байты, чтобы избежать мусора.
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
});
