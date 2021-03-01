const { Operation } = require('./src/db.js');
const lorem = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
const randomMessage = (val) => lorem.slice(0, (Math.random() * (val-1) + 1.5) | 0)
const randomNumber = (min, max) => (Math.random() * (max - min) + (min + 0.5)) | 0

const createProducts = () =>{
    for(let j = 0; j<10; j++){
        Operation.create({
            concept: randomMessage(30),
            mount: randomNumber(50, 200),
            type: 'Ingresos',
            date: randomNumber(0, 30) + '-'+randomNumber(0, 12)+'-'+ randomNumber(2000, 2020),
        })
    }
    for(let j = 0; j<10; j++){
        Operation.create({
            concept: randomMessage(30),
            mount: randomNumber(50, 200),
            type: 'Egresos',
            date: randomNumber(0, 30) + '-'+randomNumber(0, 12)+'-'+ randomNumber(2000, 2020),
        })
    }
}

module.exports = () =>{
    createProducts()
    console.log('Operations pre-charged')
}