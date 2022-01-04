import Post from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({success: false, err});
    }
}


export const getPost = async (req, res) => {
    try {
        const post = await Post.findById({ _id : req.params.id });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ success: false, err });
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ success: false, err });
    }
}


export const updatePost = async (req, res) => { 
    // const allowOptions = ['title', 'author', 'article'];
    // const selectOptions = Object.keys(req.body);
    // const doesExist = selectOptions.every(option => allowOptions.includes(option)); 
    // determine if allow* has select*'option, that is unnecessary, is false.
    // if (!doesExist) {
    //     res.status(404).json({ success: false, error : "Error" });
    // }

    try {
        const keys = Object.keys(req.body);
        const post = await Post.findById({ _id : req.params.id });
        keys.forEach(update => post[update]=req.body[update]);
        // selectOptions.forEach(option => post[option] = req.body[option]);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ success: false, err });
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id });
        res.status(200).json("Post deleted");
    } catch (err) {
        res.status(404).json({ success: false, err });
    }
}
