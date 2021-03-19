const obj = require('./my-modul');
const events = require('events');
const util = require('util');

// console.log('Путь до папки ' + __dirname);
// console.log('Путь до файла ' + __filename);
// console.log(obj.user);
// obj.func();

// const myEmit = new events.EventEmitter();

// myEmit.on('some_event', (text) => {
//     console.log(text);
// });

// myEmit.emit('some_event', 'Обработчик событий');

const Cars = function(model) {
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars('BWM');
const audi = new Cars('Audi');
const volvo = new Cars('Volvo');

const cars = [bmw, audi, volvo];

cars.forEach(item => item.on('speed', text => {
    console.log(item.model + ' speed ' + text)
}))

bmw.emit('speed', '254 km');