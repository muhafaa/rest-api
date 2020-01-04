const express = require('express');
const router = express.Router()

// Model
const { Contact } = require('../models');

// Helper
const updateCheck = require('../helpers/updateCheck');

router.get('/', (req, res) => {
    Contact.findAll()
        .then((result) => {
            res.json(result)
        })
})

router.post('/find/:id', (req, res) => {
    let { id } = req.params
    Contact.findOne({
        where: {
            id
        }
    })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
})

router.post('/add', (req, res) => {
    let newContact = {
        name: req.body.name,
        phone: req.body.phone
    }

    Contact.create(newContact)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
})

router.post('/edit/:id', (req, res) => {
    let { id } = req.params
    let newContact = {
        name: req.body.name,
        phone: req.body.phone
    }
    Contact.findOne({
        where: {
            id
        }
    })
        .then((contactData) => {
            if (!contactData) {
                res.send('Can\'t edit \n Data not found')
            } else if (updateCheck(newContact)) {
                res.send(updateCheck(newContact))
            } else {
                Contact.update(newContact, {
                    where: {
                        id
                    }
                })
            }
        })
        .then(() => {
            res.send('Data has been updated')
        })
        .catch((err) => {
            res.send(err)
        });
})

router.get('/delete/:id', (req, res) => {
    let { id } = req.params
    Contact.findOne({
        where: {
            id
        }
    })
        .then((contactData) => {
            if (!contactData) {
                res.send('Can\'t delete empty data')
            } else {
                Contact.destroy({
                    where: {
                        id
                    }
                })
            }
        })
        .then(() => {
            res.send('Data has been deleted')
        })
        .catch((err) => {
            res.send(err)
        });
})

module.exports = router;
