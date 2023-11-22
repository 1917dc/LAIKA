const http = require('http');
const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Bem-vindo � API!' }));
    }
    else if (req.url === '/api') {
        res.statusCode = 200;
        res.end(JSON.stringify({ data: 'Aqui est�o seus dados da API!' }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Rota n�o encontrada' }));
    }
});
const PORT = 5000;
server.listen(PORT, function () {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});