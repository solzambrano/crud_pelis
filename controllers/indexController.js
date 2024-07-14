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
add:(req,res)=>{

},
create:(req,res)=>{

},
delete:(req,res)=>{

},
}

module.exports = cityController;
