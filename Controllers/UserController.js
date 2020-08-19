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
        lastLogin: req.body.lastLogin
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