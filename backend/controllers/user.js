const User = require('../models/user');
const bcrypt = require("bcrypt");
const session = require("express-session");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//medhi
exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.putUser = (req, res, next) => {
    const userId = req.params.id; // Assuming your route has a parameter named 'id'

    // Assuming you want to update the email based on the request body
    //const updateNickname = req.body.nickname;

    //Va falloir hasher le mdp
    const updatePasswd = req.body.password;

    // Use findByIdAndUpdate to find the user by ID and update the email
    User.findByIdAndUpdate(
        userId,
        { password: updatePasswd },
        { new: true, runValidators: true } // Options to return the updated document and run validators
    )
        .then((updatedUser) => {
            if (!updatedUser) {
                // If no user found, send a 404 response
                return res.status(404).json({ message: "User not found" });
            }

            // Send a success response
            res
                .status(200)
                .json({ message: "User updated successfully", user: updatedUser });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        });
};

exports.getUser = (req, res, next) => {
    User.findOne({
        _id: req.params.id,
    })
        .then((thing) => {
            res.status(200).json(thing);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.logout = (req, res) => {
    // Implementation for logout
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        // Send a response indicating successful logout
        res.status(200).json({ message: "Logout successful" });
    });
};
