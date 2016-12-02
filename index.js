var express = require('express'),
    app = express(),
    bodyParser = require('body-Parser');

var userCtrl = require('./controllers/userCtrl');

var logger = (req, res, next)=>{
    console.log(`Req Path: ${req.path}`);
    console.log(`Req Header: ${req.headers}`);
    console.log(`Req Body: ${req.body}`);
    console.log(`Req Session: ${req.session}`);
    next();
}

app.use(bodyParser.json());
app.use(logger);

app.get('/',(req, res)=>{
    res.send("hello");
});

app.get('/users',  userCtrl.index);

app.post('/users', userCtrl.add);

app.listen(3000);