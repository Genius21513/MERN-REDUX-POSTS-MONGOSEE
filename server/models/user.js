import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});

const User = mongoose.model('user', userSchema);

export default User;