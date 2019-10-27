const cfg = require('./knex.cfg');
const knex = require('knex')(cfg);

module.exports = knex;