const { use } = require("../routes/notes");

const userCtrl = {};

userCtrl.getUsers = (req,res) => res.send('User Routes')

userCtrl.createUser = (req,res) => res.send('User Routes')

userCtrl.deleteUser = (req,res) => res.send('User Routes')

module.exports = userCtrl;