const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res)=>{
    try{

        // random string that makes the hash unpredictable
        const salt = await bcrypt.genSalt(10);

        // hashing function to secure the password
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong credentials")

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Wrong credentials")

        //postman to show everything except password
        const {password, ...others} = user._doc;
        res.status(200).json(others)

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;