const http = require('http');
const fs = require('fs');
const url = require('url');
const EventEmitter = require('events');

const App = {
  start: function (port) {
    let emitter = new EventEmitter();
    let server = http.createServer((request, response) => {
      response.writeHead(200, {
        'content-type': 'text/html; charset=utf8'
      });
      if (request.url === '/') {
        emitter.emit('root', response);
      }
      response.end();
    }).listen(port);
    return emitter;
  }
};

module.exports = App;
