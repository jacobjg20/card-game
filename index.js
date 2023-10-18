var express = require('express');
var app = express();
const path = require('path');
const PORT = 7070;
const options = {
    root: path.join(__dirname)
};

//Instantiates and starts a copy of the game
var Deck = require('./deck')
var deck = new Deck();

//Gives constant updates on the game
function gameState(){
    setTimeout(function () {  
        gameState(); 
        console.log(deck.cards);
    }, 3000 );
}
gameState();

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

app.get('/', function(req, res) {

    let fileName = '/index.html';

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

app.get('/card-game.jpg', function(req, res) {

    let fileName = '/card-game.jpg';

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

//test code
