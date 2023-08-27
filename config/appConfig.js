const router = require("../routers/index");
const conection = require("../database/data");
const tables = require("../database/data");

module.exports = (app, express) => {
    router(app, express);
    tables.init(conection);
}