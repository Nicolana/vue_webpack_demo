const NODE_ENV = process.env.NODE_ENV;
const config = {
    production: {
        DOMAIN: 'production.com'
    },
    development: {
        DOMAIN: 'development.com'
    }
}

module.exports = config[NODE_ENV];
