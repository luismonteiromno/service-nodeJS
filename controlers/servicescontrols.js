const servicesModels = require("../models/servicesModels");

class ServicesControler {
    search(req, res) {
        const listServices  = servicesModels.list();
        return listServices
        .then((services) => res.status(200).json(services))
        .catch((error) => res.status(404).json(error.message));
    }
    create(req, res) {
        const newService = req.body;
        const create = servicesModels.create(newService);
        return create
        .then((serviceCreate) => res.status(201).json(serviceCreate))
        .catch((error) => res.status(400).json(error.message));
    }
    update(req, res) {
        const { id } = req.params;
        const serviceUpdate = req.body;
        const update = servicesModels.update(serviceUpdate, id);
        update
        .then((resultService) => res.status(200).json(resultService))
        .catch((error) => res.status(400).json(error.message));
    }
    delete(req, res) {
        const { id } = req.params;
        const deleteService = servicesModels.delete(id);
        return deleteService
        .then((deleteService) => res.status(200).json(deleteService))
        .catch((error) => res.status(400).json(error.message));
    }
}

module.exports = new ServicesControler();
