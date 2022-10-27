const express = require('express');
const morgan = require('morgan');
const app = express();
let cors =require(`cors`);
// const { pool } = require('./db');
// const { info } = require('./routes/personalInfo');

// settings
app.set('port', process.env.PORT || 4000);
app.set(`json spaces`, 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// routes
app.use(require('./routes'));
app.use(`/api/personal-info`, require(`./routes/personalInfo`));
// app.use('/api/movies', require('./routes/movies'));

// app.get(`/database`, (req, res) => {
//     pool.query();
// });

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});