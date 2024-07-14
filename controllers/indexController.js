let db = require('../database/models');
const path = require('path');

const cityController = { 
list:(req,res)=>{
db.Cities.findAll()
.then((cities)=>{
        res.json(cities)
})
// .then((cities)=>{
//     const cityNames = cities.map(city => city.Name);
//     res.render(cityNames);
// })
},
listOne:(req,res)=>{
    db.Cities.findByPk(req.params.id)
       .then((citie=>{
        res.json(citie)
    }))

},
add:(req,res)=>{

},
delete:(req,res)=>{

},
}

module.exports = cityController;
