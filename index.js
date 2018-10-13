
var express = require('express');
var socket = require('socket.io');

// app.get('/', (request, response) => {
//     response.send('Hello World');

// })

// app.get('/json', (request, response) => {
//     response.send({ hello: 'world'});
// })


//Creating a test Object for javaScirpt
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 




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

    //Will emit message to connected users
    io.sockets.emit('simulated-data', text)    //pass in JSON text
});