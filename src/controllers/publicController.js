const mongoose = require('mongoose')

module.exports = {
    index: (req, res) => {
        res.send({
            title: 'Api LPL',
            version: '0.0.1'
        })
    },

}