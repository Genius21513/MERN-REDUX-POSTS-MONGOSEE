import User from '../models/user.js';

//req contains params & body

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ success : false, err });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById({ _id : req.params.id });
        res.status(200).json(user);
    } catch (err) {
        req.status(400).json({ success: false, err });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        req.status(400).json({ success: false, err });
    }
}


export const updateUser = async (req, res) => {
    const allowOptions = ['name', 'password'];
    const selectOptions = Object.keys(req.body);
    const doesExist = selectOptions.every(option => allowOptions.includes(option)); 
    // determine if allow* has select*'option, that is unnecessary, is false.
     
    if (!doesExist) {
        res.status(404).json({ success: false, error : "Error" });
    }

    try {
        const user = await User.findById({ _id : req.params.id });
        selectOptions.forEach(option => user[option] = req.body[option]);
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ success: false, err });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        res.status(200).json("User deleted");
    } catch (err) {
        res.status(404).json({ success: false, err });
    }
}
