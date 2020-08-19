const Polygone = require('../Entity/polygone');
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
    

       polygone.find({},(err,polys)=>{
           res.send(polys);
       })
   
}