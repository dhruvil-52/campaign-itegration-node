const model = require('./model')

const service = {
}
service.integration = (req, res) => {
    model.integration(req.body).then((resp) => {
        res.status(200).send({
            ...resp
        })
    }, (error) => {
        res.status(500).send({
            data: error
        })
    })
}
module.exports = service;