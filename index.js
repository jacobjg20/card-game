//Dependencies
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;
const options = {
    root: path.join(__dirname)
};
//enables the app to use a tools from bodyParser
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

//Instantiates and starts table
var Table = require('./table.js')
var table = new Table();

//loop for apps inner tick rate
function gameState(){
    setTimeout(function () {  
        gameState(); 
    }, 3000 );
}
gameState();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//starts server
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

//links to user pages
app.get('/', function(req, res) {

    let fileName = '/index.html';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            throw(err);
        } else {
            
        }
    });
});

app.get('/game', function(req, res) {
    console.log('game has been sent');
    res.send('game');
});

app.get('/about', function(req, res) {
    res.send('about');
});

//links to assets
app.get('/card-game.jpg', function(req, res) {

    let fileName = '/card-game.jpg';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            throw(err);
        } else {
            
        }
    });
});

app.get('/style.css', function(req, res) {

    let fileName = '/style.css';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            throw(err);
        } else {
            
        }
    });
});

app.get('/client-side-script.js', function(req, res) {

    let fileName = '/client-side-script.js';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            throw(err);
        } else {
            
        }
    });
});

//Post requests
app.post('/check', (req, res) => {
    let communityCards = table.check();
    res.send(communityCards);
});

app.post('/shuffle', (req, res)=>{
    table.shuffleCards();
    res.end()
})

