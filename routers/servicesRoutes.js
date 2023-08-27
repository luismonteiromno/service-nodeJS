const { Router } = require("express");
const router = Router();
const servicesControler = require("../controlers/servicescontrols");

router.get('/services', servicesControler.search);

router.post('/services', servicesControler.create);

router.put('/service/:id', servicesControler.update)

router.delete('/service/:id', servicesControler.delete)

module.exports = router;