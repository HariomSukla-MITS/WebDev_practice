const express = require('express');
const  morgan = require('morgan')
const app = express();

app.use(morgan('dev'))
app.set('view engine', 'ejs');

// Costom MiddileWare
app.use((req, res, next) => {
    console.log("This is middleware running");
    // res.send("This is middleware running");
    const a=2
    const b=4
    console.log(a+b)
    return next()
    
});


app.get('/', (req, res) => {
    res.render('index');
});
// app.get('/', (req, res) => {{
//     res.send('Hello World! Created By Hariom Shukla');
// }});
app.get('/about', (req, res) => {
    res.send('This is the about page. Created By Hariom Shukla');
});
app.get('/contact', (req, res) => {
    res.send('This is the contact page. Created By Hariom Shukla');
});
app.get('/profile', (req, res) => {
    res.send('This is the profile page. Created By Hariom Shukla');
});
app.listen(3000)