const express = require("express");
const app = express();
const port = 3000;
const appConfig = require("./config/appConfig");

appConfig(app, express);

app.listen(port, (error) => {
    if(error){
        console.log('Erro', error);
        return;
    }
    console.log("Sucesso");
});