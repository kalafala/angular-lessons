// credit:  https://github.com/tonypujals/express-demo/blob/master/lesson-03-B/app.js
// credit https://github.com/tonypujals/express-demo/tree/master/lesson-03-A
// credit https://github.com/tonypujals/express-demo/blob/master/lesson-03-C/app.js
// credit https://github.com/tonypujals/express-demo/blob/master/lesson-04/app.js
// credit https://github.com/tonypujals/express-demo/blob/master/lesson-06/app.js


var express = require('express'),
	app = express(),
	port = process.env.PORT || 3001;


// Simple route handler example
app.get('/getRecords',function(req,res,next) {
var employees = [
			{name: "Kerim", dateOfBirth: new Date("October 20, 1974"), gender: "Male", salary: 50000},
			{name: "Kristen", dateOfBirth: new Date("September 20, 1976"), gender: "Female", salary: 90000},
			{name: "Alexis", dateOfBirth: new Date("July 16, 2005"), gender: "Female", salary: 1000.1},
			{name: "Addison", dateOfBirth: new Date("July 23, 2008"), gender: "Female", salary: 500},
		];
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(JSON.stringify(employees));
});


app.listen(port);

console.log('server started on port %s', port);
