const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('the first!');
//     next();
// })
// app.use((req, res, next) => {
//     console.log('number 2')
//     res.send('<h2>The Response</h2>')
// })

// =============================================

app.use('/users', (req, res, next) => {
    res.send('<h2>The Users</h2>')
})
app.use('/', (req, res, next) => {
    res.send('<h2>The Home</h2>')
})

app.listen(3000)