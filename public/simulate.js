//Create a connection
var socket = io.connect('http://localhost:4000');

//Query DOM
var output = document.getElementById('output');

socket.on('simulated-data', function(data){
    var jsonString = JSON.stringify(JSON.parse(data),null, 4);
    output.innerHTML += '<pre>' + jsonString + '</pre>';
});
