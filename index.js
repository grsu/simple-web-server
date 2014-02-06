// Документация по модулю `http` доступна на http://nodejs.org/api/http.html
var http = require('http');
var util = require('util');

/*
 * createServer - рус. создать сервер
 *
 * req - часто используемое сокращение для request (рус. запрос)
 * res - часто используемое сокращение для response (рус. ответ)
 */
var server = http.createServer(function (req, res) {
  var body = util.format('Строка запроса %s %s', req.method, req.url);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(body);
  res.end();
});


// Слушать 8001 для получения HTTP запросов.
server.listen(8001);
