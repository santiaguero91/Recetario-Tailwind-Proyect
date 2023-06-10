const { Router} = require("express")
const router = Router()
const bodyparser = require('body-parser');

const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const getChars = require("../controllers/getChars")
const recipes = require("./recipes")

router.use(bodyparser.json());

router.use("/onsearch/:id", getCharById)
router.use("/detail/:id", getCharDetail)
router.use("/getChars", getChars)
router.use("/recipes", recipes)




module.exports = router