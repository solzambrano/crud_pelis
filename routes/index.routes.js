const express = require('express');
const routes = express.Router(); 
const indexController=require('../controllers/indexController')

routes.get('/', indexController.list)
routes.get('/:id', indexController.listOne)
routes.post('/add', indexController.add)
routes.put ("/:id",indexController.update ) 
routes.delete ("/:id",indexController.delete)// routes.delete('/', (req, res) => res.send("ESTAS EN HOME"));



module.exports = routes;