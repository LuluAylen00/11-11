const express = require('express');
const app = express();

const port = 3418;
app.listen(port, () => {
    console.log("Escuchando en puerto "+port);
});

// Middleware (app.use)
// Estos dos permiten procesar los formularios que se le envíen al servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const static = express.static("public");
app.use(static);

const mainRouter = require('./routes/main-router');
app.use(mainRouter);