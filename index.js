const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.get('/usuarios', (req, res) => {
    let resp = {
        name: 'Samy',
        age: '30',
        url: req.url
    };

    res.send(resp);
});

app.listen(3000, () => {
    console.log('Escuchando las peticiones en el puerto 3000');
});
