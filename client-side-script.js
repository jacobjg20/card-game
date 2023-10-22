var clientData;
var communityCards;
//loop for client tick rate

function getCommunityCards(){
  fetch("https://glorious-journey-rr6grv7wpprhx4wx-8080.app.github.dev/gameState/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },    
    }).then(res => res.text())
    .then(data => console.log(data));
}

//client functions
function shuffleCards(){
  fetch("https://glorious-journey-rr6grv7wpprhx4wx-7070.app.github.dev/shuffle/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },    
    })
}
    
function check(){
  fetch("https://glorious-journey-rr6grv7wpprhx4wx-7070.app.github.dev/check/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },    
    })
}

//test code that allows me to send data to server
// fetch("https://glorious-journey-rr6grv7wpprhx4wx-7070.app.github.dev/gameState/", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },    
//     }).then(res => res.text())
//     .then(data => console.log(data));