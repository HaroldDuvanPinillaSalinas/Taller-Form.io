const { Router } = require('express');
const router = new Router();

const info = require('../personalinfo.json');

router.get('/', (req, res) => {
    res.json(info.map((item) => item.data));
});

router.post('/', (req, res) => {
    const { name, lastname, email, phoneNumber, city, age, maritalStatus } = req.body;
    // console.log(req.body);
    const newForm = { ...req.body };
    // const newForm = req.body;
    info.push(newForm); // Toca guardar en BD
    res.json(info.map((item) => item.data));
    // res.status(500).json({error: 'There was an error.'});
});

module.exports = router;
// module.exports = info;