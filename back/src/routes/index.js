const { Router} = require("express")
const router = Router()

const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")


router.get("/onsearch/:id", getCharById)

router.get("/detail/:id", getCharDetail)


module.exports = router