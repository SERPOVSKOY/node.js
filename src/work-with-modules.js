/* ============= Работа с модулями ============= */
const obj = require('./my-modul'); // подключение по пути до файла
const api = require('utils/utils'); // подключение из node_modules
const handleArr = require('parsing'); // подключение из node_modules модуля по найзванию папки с index.js
const pushArr = require('push-in-array'); // подключение из node_modules модуля через package.json

console.log('Путь до папки ' + __dirname); // системная переменная - путь до дирректории
console.log('Путь до файла ' + __filename); // системная переменная - путь до файла

/* вызовы */
console.log(obj.user);
obj.func();
api.connectToDB();
console.log(api.response);
const colors = ['red', 'green', 'blue'];
handleArr.pars(colors);
pushArr.push(colors, 'white');