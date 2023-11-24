const express = require("express");
const router = express.Router();

const apiCtrl = require("../controllers/apicrypto");

router.get("/", apiCtrl.getApi);
router.get("/:id", apiCtrl.getApiId);
router.get("/:id/history/:period", apiCtrl.gethestoryApi);

module.exports = router;
