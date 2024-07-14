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
add:async(req,res)=>{
    try{
        const newCity=await db.Cities.create({
    Name:"Buenos Aires",
    CountryCode:"ARG",
    District:"Argentina",
    Population:200000

})
res.json({"message": "Registro creado correctamente"})
    }catch (error) {
        res.status(500).json({"message": error.message});
    }
},

delete : (req,res)=>{
    db.Cities.destroy({where :{id:req.params.id}})
        res.json({"message": "Posteo Borrado correctamente"}) 
},
update:(req,res)=>{
    db.Cities.update({
        Name:'Cary'
    },{

    where:{id:4079}
    }
    )
}
}

module.exports = cityController;
