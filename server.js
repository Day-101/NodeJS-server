let app = require('express')();

app.get('/', (request, response) => {
  response.send('Vous êtes à la racine.');
});

app.get('/demo', (request, response) => {
  response.send('Vous sur la demo.');
});

app.listen(8080);
