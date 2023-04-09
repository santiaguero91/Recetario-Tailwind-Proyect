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

module.exports = router;