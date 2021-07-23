
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => console.log('Connected...'))

const alrouter = require('./routers/alien')

app.use(express.json)

app.use('/aliens', alrouter)

/*
app.get('/', (req, res) => {
    return res.status(200).json({
        "status": true,
        "message": "Rest API"
    });
});
*/

app.listen(9000, () => {
    console.log('Server started')
})














/*
let add = function(x, y)
{
    return x + y
}
console.log(add(7,4))
sa
console.log(add(45,43), end='')
process.stdout.write("Arnav \nverma: ");

students.array.forEach(element => {
  
});
*/

