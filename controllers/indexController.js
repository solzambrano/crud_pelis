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
    Name:req.body.Name,
    CountryCode:req.body.CountryCode,
    District:req.body.District,
    Population:req.body.Population

})
 res.json({"message": "Agregado correctamente"})
},

delete : (req,res)=>{
    db.Cities.destroy({where :{id:req.params.id}})
        res.json({"message": "Posteo Borrado correctamente"}) 
},
update:(req,res)=>{
   
    db.Cities.update({
        Name:req.body.Name,
    CountryCode:req.body.CountryCode,
    District:req.body.District,
    Population:req.body.Population
    },{

    where:{id:req.params.id}
    })
     res.json({"message": "Corregido correctamente"}) 
}
}

module.exports = cityController;
