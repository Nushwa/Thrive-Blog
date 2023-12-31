const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//CREATE POST
router.post('/', async (req, res) => {
    
    //req.body -to receive data through POST and PUT requests
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)

    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE POST
router.put('/:id', async (req, res) => {
    try{

        // route /posts/:id, then the “id” property is available as req.params.id.
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
        try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                $set: req.body
            }, {new: true}
            );
            res.status(200).json(updatedPost);
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("You can update only your post!")
    }
    }catch(err){
        res.status(500).json(err)
    }
});


//DELETE POST
router.delete('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
        try{
            await post.delete()
            res.status(200).json("Post has been deleted successfully");
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("You can delete only your post!")
    }
    }catch(err){
        res.status(500).json(err)
    }
});

//GET POST
router.get("/:id", async (req, res) => {
    try{
        // fiding user by ID
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json(err);
    }
});

//Get all postss
router.get("/", async (req, res) => {
    try{
        // fiding user by ID
        const post = await Post.find();
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json(err);
    }
});
// //GET ALL POSTS
// router.get("/:id", async (req, res) => {
//     try{
//         // fiding user by ID
//         const post = await Post.find();
//         res.status(200).json(post);
//     }catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;