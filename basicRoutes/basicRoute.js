'use strict';

const http = require('http');

function router(req, res) {
	res.writeHead(200, {'Content-type':'text/html'});
	res.end('<h1> Hello Router</h1>');
}

/*
 router is a function that is passed to the built in function,
 createServer. It is passed in the createServer method without 
 being called hence it being used as "router " instead of 
 "router()" as calling it with the parameter as in a function
 call would mean it would be invoked when passed.
*/
http.createServer(router).listen(3000, () => {
	console.log('listening on port 3000');
});