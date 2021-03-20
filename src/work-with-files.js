const fs = require('fs');

const data = fs.readFileSync('src/test.txt', 'utf-8');
console.log(data);
fs.writeFileSync('src/test.txt', 'Перезаписал получается');
fs.readFile('src/test.txt', 'utf-8', (err, data) => {
    console.log('Асинхронное чтение файла', data);
    err && console.log(err);
});
console.log('Чтение async');
fs.writeFile('src/test.txt', 'Новая запись', (err, data) => {
    console.log(data);
    err && console.log(err);
})
console.log('Запись async');

/* Удаление файла*/
fs.writeFileSync('src/test2.txt', 'test', () => {}); // Создать файл
fs.unlink('src/test2.txt', () => {}); // Удалить файл
fs.mkdirSync('test-dir2'); // Создать папку
fs.rmdirSync('test-dir2'); // Удалить папку

fs.mkdir('src/test-folder', () => {
    fs.writeFile('src/test-folder/test2.txt', 'test', () => {
        console.log('Все сработало!');
    });
});