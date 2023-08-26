const routerServices = require("./servicesRoutes");

module.exports = (app) => {
    app.use(routerServices);
};
