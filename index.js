const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, ()=>{
    console.log('Server is works on PORT 3000...');
});


//не забывать в .gitignore добавлять node_modules

//скрипт stop добавлять в package-json, чтобы убить процесс на порту, если выдают ошибку, что порт уже запущен
// скрипты при создании с express-generator
//
// "scripts": {
//     "start": "node ./bin/www",
//         "stop": "taskkill -f -im node.exe"


//скрипты c  express-generator и изминенным start и  запуском nodemon
// "start": "node index.js",
//     "dev": "nodemon index.js",
//      "stop": "taskkill -f -im node.exe"


// соответственно при изминении start, module.exports = app;
//   меняем  на
// app.listen(3000, ()=>{
//     console.log('Server is works on 3000');
// });


