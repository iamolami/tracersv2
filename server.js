const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const morgan = require('morgan')
const app = express();
app.use(express.urlencoded({ extended: true }))

//Database Connection
connectDB();

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//Routes
app.use(require('./routes/pagesRoute'));
app.use(require('./routes/authRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`)
});