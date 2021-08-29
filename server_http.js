const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('Action!', function () {
  console.log('Done !')
});

emitter.emit('Action!');

// let http = require('http');
// let fs = require('fs');
// let url = require('url');

// http.createServer((request, response) => {
//   response.writeHead(200);
//   let query = url.parse(request.url, true).query;
//   let name = query.name === undefined ? 'toi' : query.name;
//   fs.readFile('index.html', 'utf8', (err, data) => {
//     if (err) {
//       response.writeHead(404);
//       response.end('Ce fichier n\'existe pas');
//     } else {
//     response.writeHead(200, {
//       'content-type': 'text/html; charset=utf-8'
//     });
//     data = data.replace('{{ name }}', name);
//     response.end(data);
//     }
//   });
// }).listen(8080);
