const fs = require('fs');

// - `create.js` - реализовать функцию, которая создает новый файл `fresh.txt`
// с содержимым `Я свеж и молод` внутри папки `files` (если файл уже существует `Ошибка` с сообщением
// `Операция FS не удалась` быть брошенным)

const create = async () => {
    fs.open('./node-nodejs-basics/fs/files/fresh.txt', 'wx', (err,fd)=>{
        if(err){
            if (err.code === 'EEXIST') {
                console.error('myfile уже существует');
                return;
            }
        } else{
            console.log('Сработало')
        }
    })


};

//await create();

create();
