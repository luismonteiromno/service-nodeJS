const { Router } = require("express");
const router = Router();
const servicesControler = require("../controlers/servicescontrols");

router.get('/services', (req, res) => {
    const listServices  = servicesControler.search();
    listServices
        .then((services) => res.status(200).json(services))
        .catch((error) => res.status(404).json(error.message));
});

router.post('/services', (req, res) => {
    const newService = req.body;
    const create = servicesControler.create(newService);
    create
        .then((serviceCreate) => res.status(201).json(serviceCreate))
        .catch((error) => res.status(400).json(error.message));
});

router.put('/service/:id', (req, res) => {
    const { id } = req.params;
    const serviceUpdate = req.body;
    const update = servicesControler.update(serviceUpdate, id);
    update
        .then((resultServices) => res.status(201).json(resultServices))
        .catch((error) => res.status(400).json(error.message));
});

router.get('/service/:id', (req, res) => {
    const { id } = req.params;
    const response = servicesControler.delete(id);
    res.send(response);
});

module.exports = router;