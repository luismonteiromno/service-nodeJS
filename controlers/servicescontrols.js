const servicesModels = require("../models/servicesModels");
class ServicesControler {
    search() {
        return servicesModels.list();
    }
    create(newService) {
        return servicesModels.create(newService);
    }
    update(updateService, id) {
        return servicesModels.update(updateService, id);
    }
    delete(id) {
        return servicesModels.delete(id);
    }
}

module.exports = new ServicesControler();
