const express = require('express');
const router = express.Router();
const User = require('../model/usermodel');

// create a user
router.post('/create', async (req, res) => {
    console.log('Endpoint /create accessed');
    try {
        const {name , email ,age} =req.body;

        const isUserExist = await User.findOne({ email : email });
        if(isUserExist) {
            return res.status(400).json({ message: 'User already exists', success: false });
        }
        const newUser = new User({name , email , age});
        await newUser.save();
        res.json({
            message: 'User created successfully',
            User,
            success: true
        })

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// get all users
router.get('/userlist', async (req, res) => {
    try {
        const userlist = await User.find();
        res.json({
            userlist,
            success: true
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// get user by id
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const userdata = await User.findById(id);

        return res.json({
            userdata,
            success: true
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// update user by id
router.put("/:id", async (req, res) => {
    try {

        const {name , email ,age  } = req.body;
        const {id} = req.params;
        const userdata = await User.findByIdAndUpdate(id , {name , email ,age }, {new: true});

        return res.json({
            userdata,
            success: true
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// delete user by id
router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const userdata = await User.findByIdAndDelete(id);

        return res.json({
            message: 'User deleted successfully',
            success: true
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;