const User = require('../Entity/user');

exports.add_a_user = async function (req, res) {
    console.log(req.body);
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        cin: req.body.cin,
        imageurl: req.body.imageurl,
        lastLogin: req.body.lastLogin,
        isAdmin: req.body.isAdmin,
        emplyees: []
    });
    try {
        const newUser = await user.save();
        res.status(201).json({ newUser })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
exports.login = async function (req, res) {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email, password: password });
        res.status(200).json({ user })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}
exports.findUser= async function (req, res) {
    const searchParam = req.body.searchParam;
    try {
        let user = await User.find({ $or: [{ "email": searchParam }, { "username": searchParam }, { "firstname": searchParam }] })
        res.status(200).json({ user });

    } catch (err) {
        res.status(400).json("no users found");
    }
}
exports.findUserbyID = async function (req, res) {
    const searchParam = req.body.searchParam;
    try {
        let user = await User.findById({"_id":req.body.searchParam})
        res.status(200).json({ user });

    } catch (err) {
        res.status(400).json("no users found");
    }
}
exports.addusertocaompany = async function (req, res) {
    let adminId = req.body.adminId;
    let employeeId = req.body.employeeId;
    try {
       await User.findByIdAndDelete({ "_id": adminId }, { $push: { "employee": employeeId } }, { safe: true, upsert: true, new: true },
            function (err, model) {
                if (err) {
                    console.log("ERROR: ", err);
                    res.send(400, err);
                } else {
                    res.status(200).send(model);
                }
            })
    } catch (error) {

    }
}