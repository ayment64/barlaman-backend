const polygone = require('../Entity/polygone');
exports.add_a_polygone = async function (req, res) {
    let array = new polygone(req.body);

    console.log(array);

    try {
        let newPolygone = array.save();
        res.status(201).json({ newPolygone })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
exports.get_all_plygons = async function (req, res) {


    polygone.find({}, (err, polys) => {
        res.status(200).send(polys);
    })

}
exports.delete_polygon = async function (req, res) {
    console.log(req.body.id);
    try {
        let polyres = await polygone.findByIdAndRemove(req.body.id);
        if (polyres)
            res.status(203).send("success");

    } catch (error) {
        res.status(400).send("failed")
    }

}
exports.getAllPlygonsByUserId = async (req, res) => {
    try {
        let polys = await polygone.find({ user: req.body.id })
        res.status(200).send(polys);
    } catch (error) {
        res.status(400).send("failed")
    }

}