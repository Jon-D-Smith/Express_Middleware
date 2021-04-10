const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('tiny'))

app.use((req, res, next) => {
    if (res.statusCode = 200) {
        console.log('Successfully connected to the desired page without needing a redirect.')
    }
    next();
})

app.use((req, res, next) => {
    console.log(req.method, req.path, res.statusCode)
    next()
})

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/dogs', (req, res) => {
    res.send('woof woof')
})


//404 Route
app.use((req, res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(port, () => {
    console.log(`Connected on port ${port}`)
})