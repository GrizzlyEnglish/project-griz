const express = require('express');
const app = express();
const path = require('path');

//Public assets
app.use(express.static(path.join(__dirname, '/public')));
app.use('/scripts', express.static(path.join(__dirname, '/public/js')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/img', express.static(path.join(__dirname, '/public/imgs')));

app.use('/griz', express.static(path.join(__dirname, '/griz-files/')));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res){
    return res.sendFile(path.join(__dirname + '/griz-files/griz.home.html'));
});