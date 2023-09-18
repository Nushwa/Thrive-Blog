const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const multer = require('multer');
const path = require('path');

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")))

mongoose
    .connect("mongodb+srv://nush:nushwa@cluster0.ezkdj.mongodb.net/blogs?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,        
    })
    .then(console.log("Connected to Mongodb"))
    .catch((err) => console.log(err));


// mongoose.connect('mongodb://localhost/articles');


// gives you full control on storing files to disk.
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'images')
    }, 
    filename:(req, file, cb)=> {
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post('/api/upload', upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)


app.listen("5000", () => {
    console.log("Backend is running")
})