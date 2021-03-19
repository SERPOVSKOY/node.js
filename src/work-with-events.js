/* ============= Работа с событиями ============= */
const events = require('events'); // встроенный пакет
const util = require('util'); // встроенный пакет


/* добавление, вызов события */
const myEmit = new events.EventEmitter(); // инстанс класса по функции констрокору
myEmit.on('some_event', (text) => {
    console.log(text);
});
myEmit.emit('some_event', 'Обработчик событий');


const Cars = function(model) {
    this.model = model;
};
util.inherits(Cars, events.EventEmitter); // метод наследования
const bmw = new Cars('BWM');
const audi = new Cars('Audi');
const volvo = new Cars('Volvo');
const cars = [bmw, audi, volvo];
cars.forEach(item => item.on('speed', text => {
    console.log(item.model + ' speed ' + text)
}))
bmw.emit('speed', '254 km');
audi.emit('speed', '300 km');
volvo.emit('speed', '200 km');