const {Router} = require("express");
const {recipe} = require("../DB_connection");
const router = Router();

router.post("/", async (req,res) => {
    let {
        name,
        duration,
        season,
        img
   } = req.body;

   let recipeCreated = await recipe.create({
    name,
    duration,
    season,
    img
});
    let recipeDB = await recipe.findAll
    res.send("receta creada con exito")
})

router.delete("/:id", async(req,res) => {
    const {id} = req.params;
    try {
    if(id){
        recipe.destroy(
        { where: { id: id }
        });
        res.status(200).send("recipe deleted")
    } else{
        res.status(404).send("Can't find such recipe")
    }
} catch (error) {
    console.log(error)
}
}); 

router.get("/", async(req,res) => {
    try {
    const name = req.query.name
    let activitiesTotal = await recipe.findAll();
    if(name){
        let activityName = await activitiesTotal.filter(el =>el.name.toLowerCase().includes(name.toLowerCase()))
        activityName.length ?
        res.status(200).send(activityName):
        res.status(404).send("Can't find such activity")
    } else{
        res.status(200).send(activitiesTotal)
    }
} catch (error) {
    console.log(error)
}
})

router.put("/", async(req,res) => {
    const name = req.query.name
        let {
            duration,
            season,
            img
   } = req.body;

if( !duration || !season || !img ) {
    return res
    .status(404)
    .json({error: "Falta llenar alguno de los parametros"})
}

    let recipeTotal = await recipe.findAll();
    if(name){
        let recipeName = await recipeTotal.filter(el =>el.name.toLowerCase() === name.toLowerCase())
        await recipe.update({
            id: recipeName[0].id,
            duration: duration,
            season: season,
            img: img
            },
            { where: { 
                name: name 
            }
        }
        )
        recipeName ?        
        res.status(200).send(recipeName):
        res.status(404).send("Can't find such recipe")
    } else{
        res.status(200).send(recipeTotal)
    }      
}); 


module.exports = router;