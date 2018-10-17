
var express = require('express');
var socket = require('socket.io');

// app.get('/', (request, response) => {
//     response.send('Hello World');

// })

// app.get('/json', (request, response) => {
//     response.send({ hello: 'world'});
// })


//Creating a test Object for javaScirpt // "employees" :
/*
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 
*/


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


io.on('connection',function(socket){           // Fires callback function
    console.log('created socket connection')   // each socket will have it's own client that is connected to that server
	//generate();
	generate2();
});

function generate(){
	//Will emit message to connected users
	io.sockets.emit('simulated-data', text);    //pass in JSON text
	console.log("New info")
	//setTimeout(generate, 5000)
}


function generate2(){
	let records = []
	var mydata = JSON.parse(text);
	
	for (x in mydata)
	{
		records.push(mydata[x]);	
	}
	io.sockets.emit('simulated-data2', records);
	console.log(records);

	setTimeout(generate2, 5000);
}
