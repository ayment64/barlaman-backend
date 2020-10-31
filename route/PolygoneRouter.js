const express = require('express');

const PolygoneController = require('../Controllers/PolygoneController');

const router = express.Router();
router.post("/",PolygoneController.add_a_polygone);
router.post("/get",PolygoneController.getAllPlygonsByUserId);
router.post("/delete",PolygoneController.delete_polygon);
module.exports = router;