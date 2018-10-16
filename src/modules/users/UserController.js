var User = require("./UserModel.js");

// User controller for handling all user relation CRUD opertaions
export class UserController {

    // Create a new user
    addNewUser = (req, res) => {
        let newUser = new User(req.body);
        Console.log("Create New User API Request");
        newUser.save((err, user) => {
            if (err) {
                console.error("Error while creating new user.");
                res.send();
            }

            res.json(user);
        });
    };


    // Get a user by object Id
    getUserById = (req, res) => {
        Console.log("GET User API Request");
        User.findById({}, (err, user) => {
            if (err) {
                console.error("Error while reading user information.");
                res.send();
            }

            res.json(user);
        });
    };

    // Get all users information
    getAllUsers = (req, res) => {
        Console.log("GET Users API Request");
        User.find({}, (err, users) => {
            if (err) {
                console.error("Error while reading users information.");
                res.send();
            }

            res.json(users);
        });
    };

    // Update a user information
    updateUser = (req, res) => {
        Console.log("UPDATE Users API Request");
        User.findOneAndUpdate({_id: req.params.userId}, (err, user) => {
            if (err) {
                console.error("Error while updating user's information.");
                res.send();
            }

            res.json(user);
        });
    };

    // Delete a user
    deleteUser = (req, res) => {
        Console.log("DELETE Users API Request");
        User.remove({_id: req.params.userId}, (err, user) => {
            if (err) {
                console.error("Error while deleting user's information.");
                res.send();
            }

            res.json({"message": "User Deleted Successfully"});
        });
    };
}

