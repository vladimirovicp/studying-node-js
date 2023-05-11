const fs = require("fs");

fs.open('./private/files/test2.txt', 'wx', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('myfile уже существует');
            return;
        }

        throw err;
    }

    try {
        writeMyData(fd);
    } finally {
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    }
});
