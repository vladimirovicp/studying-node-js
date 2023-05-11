# Задание: основы Node.js

## Описание

Ваша задача — выполнить несколько простых задач, чтобы изучить основы Node.js.

Fork [this repository](https://github.com/AlreadyBored/node-nodejs-basics)

Задания содержат несколько вложенных папок внутри `src`. Ваша задача реализовать внутри них необходимый функционал
## Технические требования

- Любые внешние инструменты и библиотеки запрещены
- Используйте 18 LTS-версию Node.js.
- Не меняйте сигнатуру предварительно написанных функций (например, не переименовывайте их, не делайте их синхронными и т. д.)
- По возможности отдавайте предпочтение асинхронному API.

## Подзадачи

### Файловая система (src/fs)

You should implement several functions in dedicated files
- `create.js` - реализовать функцию, которая создает новый файл `fresh.txt` с содержимым `Я свеж и молод` внутри папки `files` (если файл уже существует `Ошибка` с сообщением `Операция FS не удалась` быть брошенным)
- `copy.js` - реализовать функцию, которая копирует файлы из папки `files` со всем содержимым в папку `files_copy` на том же уровне (если папка `files` не существует или `files_copy` уже создана `Ошибка` с сообщением `Операция FS не удалась` должно быть выброшено)
- `rename.js` - реализовать функцию, которая переименовывает файл `wrongFilename.txt` в `правильное имя_файла` с расширением `.md` (если файла `wrongFilename.txt` нет или `правильное имя_файла.md` уже существует `Ошибка` с сообщением `Операция FS не удалась` нужно выкинуть)
- `delete.js` - реализовать функцию, которая удаляет файл `fileToRemove.txt` (если файла `fileToRemove.txt` нет, должна выдаваться `Error` с сообщением `FS operation failed`)
- `list.js` - реализовать функцию, которая выводит весь массив имен файлов из папки `files` в консоль (если папка `files` не существует, должна быть выброшена `Error` с сообщением `FS Operation failed`)
- `read.js` - реализовать функцию, выводящую содержимое файла `fileToRead.txt` в консоль (если файла `fileToRead.txt` нет, должна быть выброшена `Error` с сообщением `FS operation failed`)

### Command line interface(src/cli)

You should implement several functions in dedicated files

- `env.js` - implement function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`
- `args.js` - implement function that parses command line arguments (given in format `--propName value --prop2Name value2`, you don't need to validate it) and prints them to the console in the format `propName is value, prop2Name is value2`

### Modules(src/modules)

You should refactor file (you can add additional imports if needed)

- `cjsToEsm.cjs` - rewrite it to it's equivalent in ECMAScript notation (and rename it to `esm.mjs`)

### Hash (src/hash)

You should implement several functions in dedicated files

- `calcHash.js` - implement function that calculates SHA256 hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex`

### Streams (src/streams)

You should implement several functions in dedicated files

- `read.js` - implement function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`
- `write.js` - implement function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream
- `transform.js` - implement function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

### Zlib (src/zip)

You should implement several functions in dedicated files

- `compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API

### Worker Threads (src/wt)

You should implement several functions in dedicated files

- `worker.js` - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
- `main.js` - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from `10` to each `worker`. For example: on host machine with **4** cores you should create **4** workers and send **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
    - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
    - `data` - value from `worker` in case of success or `null` in case of error in worker

The results in the array must be in the same order that the workers were created

### Child Processes (src/cp)

You should implement several functions in dedicated files

- `cp.js` - implement function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
    - child process `stdin` should receive input from master process `stdin`
    - child process `stdout` should send data to master process `stdout`
