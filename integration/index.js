const service = require('./service')

module.exports = (app) => {
    app.post('/integration', service.integration);
}