const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Home' })
});

app.get('/aboutUs', (req, res) => {
    res.render('pages/aboutUs', { title: 'About Us' })
})

app.get('/register', (req, res) => {
    res.render('pages/register', { title: 'Become a Member' })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`)
});