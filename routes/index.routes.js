const express = require('express');
const routes = express.Router(); 
const indexController=require('../controllers/indexController')

routes.get('/', indexController.list)
// routes.post('/', (req, res) => res.send("ESTAS EN HOME"));
// routes.put('/', (req, res) => res.send("ESTAS EN HOME"));
// routes.delete('/', (req, res) => res.send("ESTAS EN HOME"));



module.exports = routes;