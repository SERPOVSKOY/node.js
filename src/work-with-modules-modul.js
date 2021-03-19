const sayMe = () => {
    console.log('my module');
}

const user = {
    name: 'Alex',
    age: 23
}

module.exports = {
    user: user,
    func: sayMe
}