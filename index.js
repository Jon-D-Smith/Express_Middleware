const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('tiny'))



app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/dogs', (req, res) => {
    res.send('woof woof')
})

app.listen(port, () => {
    console.log(`Connected on port ${port}`)
})