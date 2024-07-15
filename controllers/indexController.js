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
    db.Cities.create({
    Name:"Buenos Aires",
    CountryCode:"ARG",
    District:"Argentina",
    Population:200000

})
},

delete : (req,res)=>{
    db.Cities.destroy({where :{id:req.params.id}})
        res.json({"message": "Posteo Borrado correctamente"}) 
},
update:(req,res)=>{
    db.Cities.update({
        Name:'Cary'
    },{

    where:{id:req.params.id}
    }
    )
}
}

module.exports = cityController;
