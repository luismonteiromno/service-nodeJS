const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conection = require("./database/data");
const tables = require("./database/tables");


router(app, express);
tables.init(conection);


app.listen(port, (error) => {
    if(error){
        console.log('Erro', error);
        return;
    }
    console.log("Sucesso");
});