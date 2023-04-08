const { Router} = require("express")
const router = Router()

const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const getChars = require("../controllers/getChars")

router.use("/onsearch/:id", getCharById)
router.use("/detail/:id", getCharDetail)
router.use("/getChars", getChars)


module.exports = router