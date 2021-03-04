const express = require ('express');

const app = express();



// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('../routes/rota'));


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(' Servidor rodando na port %s', port);
});
//app.listen(8080);
//console.log('Rodando teste!!!');