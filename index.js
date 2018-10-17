
var express = require('express');
var socket = require('socket.io');
var simulating = false;

//monster list
var text = '{ "monster" : [' +
'{ "monsterNumber":1, "monsterName":"Godzilla", "attacklocation":"Los Angeles, California", "reporter": "1bc@123.com"},' +
'{ "monsterNumber":2, "monsterName":"Kaiju and Dracula", "attacklocation":"Tokyo, Japan", "reporter": "jus@bbb.com"},' +
'{ "monsterNumber":3, "monsterName":"Vampire", "attacklocation":"Boston, Chicago", "reporter": "bch@cdcd.com"} ' +
']}';


// App setup
var app = express(); 
var server = app.listen(4000, function(){
     console.log('Server is running. On port 4000');
});


//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);


io.on('connection',function(socket){ // Fires callback function when client connects
	if(simulating){
		console.log('Simulating to new client...')  
	}

	else{
		console.log('Starting simulation...')
		console.log('Simulating to first client connected')
		simulating = true;
		generate();
	}
});


function generate(){
	let records = []
	var mydata = JSON.parse(text);
	
	for (x in mydata)
	{
		records.push(mydata[x]);
	}
	io.sockets.emit('simulated-data', records);
	
	setTimeout(generate, 5000);
}