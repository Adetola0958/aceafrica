const express = require('express');
const router = express.Router();
//const multer = require('multer')
const AceController = require("../controller/aceController")

router.get("/", AceController.getIndex)
router.get("/hire", AceController.getHire)
router.post("/hire", AceController.postHireForm)
router.get("/hire", AceController.getAppForm)
router.post("/hire", AceController.postAppForm)
router.get("/partners", AceController.getPartners)
router.post("/partners", AceController.postPartners)
router.get("/application", AceController.getApplication)


module.exports = router;