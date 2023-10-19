var clientData;

//loop for clients inner tick rate
function gameState(){
  setTimeout(function () {  
      gameState(); 
      console.log('running');
  }, 3000 );
}
gameState();


//test code that allows me to send data to server
fetch("https://glorious-journey-rr6grv7wpprhx4wx-7070.app.github.dev/post-test/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },    
    body: JSON.stringify({
      name: 'user 1'
    }) 
    }).then(res => res.text())
    .then(data => console.log(data));
    
   
