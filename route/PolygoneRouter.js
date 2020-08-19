const express = require('express');

const PolygoneController = require('../Controllers/PolygoneController');

const router = express.Router();
router.post("/",PolygoneController.add_a_polygone);
router.get("/",PolygoneController.get_all_plygons);
module.exports = router;