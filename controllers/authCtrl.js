const Users = require('../models/user');

const authCtrl = {
    register: async (req, res) => {
        try {
            const {
                fullName,
                email,
                contactNumber,
                occupation,
                organization,
                credentialsVitae,
                photograph,
                country
            } = req.body;

            const user_email = await Users.findOne({
                email
            });
            if (user_email) return res.status(400).json({
                msg: "This email already exists."
            });

            const newUser = new Users({
                fullName,
                email,
                contactNumber,
                occupation,
                organization,
                credentialsVitae,
                photograph,
                country
            });

            await newUser.save();

            res.redirect('/register')
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
}

module.exports = authCtrl