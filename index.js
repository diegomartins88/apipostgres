const express = require ('express');
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/rota'));

//inclusão da agenda em dias
/*var agenda = D+1
console.log('Recebimento:  ; "+agenda+" dias ' )
*/
var desconto = 3.44 %
var valor = x
console.log('o desconto foi de : ')

var port = process.env.PORT 3000;
app.listen(port, function () {
    console.log(' Servidor rodando na port %s', port);
});
