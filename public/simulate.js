
//Create a connection
var socket = io.connect('http://localhost:4000');

//Query DOM
var output = document.getElementById('output');

var jsonString;

socket.on('simulated-data', function (data){	
	for(x in data)
	{
		//for( y in data[x]) // print all records
		{				
			y = Math.floor(Math.random() * data[x].length); //print random records based on the array's size
			//var z = Math.floor(Math.random() * y.length;
			var monsterNum = data[x][y].monsterNumber;
			var monsterName = data[x][y].monsterName;
			var location = data[x][y].attacklocation;
			var numOfVic = Math.floor(Math.random() * 1000);
			var rep = data[x][y].reporter;


			count.innerHTML = data[x].length;
			//alltext += data[x].length;

			mNum.innerHTML = '<td>' + monsterNum + '</td><br>';
			//alltext += '<td>' + monsterNum + '</td><br>';

			mName.innerHTML = '<td>' + monsterName + '</td><br>';
			//alltext += '<td>' + monsterName + '</td><br>';

			loc.innerHTML = '<td>' + location + '</td><br>';
			//alltext += '<td>' + location + '</td><br>';

			reporter.innerHTML = '<td>' + rep + '</td><br>';
			//alltext += '<td>' + rep + '</td><br>';

			vic.innerHTML = '<td>' + numOfVic + '</td><br>';
			//alltext += '<td>' + numOfVic + '</td><br>';

			jsonString =  '{ "monster":' + 
			 '{ "monster_number":' + monsterNum + ',\n'+
			 '"monster_name":"' + monsterName + '",\n' + 
			 '"attack_location":"' + location + '",\n' +
			  '"victim_count":"' + numOfVic + '",\n' +
			 '"reporter":"' + rep + '"\n' +
			 '}' +
			 '}';

			 jsonString = JSON.stringify(JSON.parse(jsonString), null, 4);

			 output.innerHTML = '<pre>' + jsonString + '</pre>'
		}	
	}
});