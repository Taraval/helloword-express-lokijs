/*
 * Helloworld Expressjs + Lokijs
*/

var express = require('express');
var app = new express();
var loki = require('lokijs');
var dbr = new loki('test.json'); // db read
var dbw = new loki('test.json'); // db write
var dbname = 'users'; // collection name

/*
var users = dbw.addCollection(dbname);
users.insert( { name: 'joe' });
users.insert( { name: 'john' });
users.insert( { name: 'jack' });
dbw.saveDatabase();

*/

app.get('/', function (req, res) {
	dbr.loadDatabase({}, function() {
		user = dbr.getCollection('users')
		var foo = JSON.stringify(user.data, ['name', 'meta']);
    var username = user.get(1).name;
		res.send("Hello world " + foo);
		console.log(user.data);
		console.log(foo);
		console.log(username);
	});
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});

