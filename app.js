const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const port = 3000;



app.listen(port, () => console.log(`http://localhost:${port}`));


app.use('/', indexRouter);