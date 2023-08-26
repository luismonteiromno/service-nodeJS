const { Router } = require("express");
const router = Router();

router.get('/services', (req, res) => {
    res.send("Listando todos os atendimentos encontrados");
});

router.post('/services', (req, res) => {
    res.send("Novo atendimento solicitado");
});

router.put('/service/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Atendimento ${id} atualizado`);
});

router.get('/service/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Atendimento ${id} deletado`);
});

module.exports = router;