import {useState, useContext} from 'react';
import {Context} from '../../context/Context.js'

import '../../stylesheets/write.css'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if(file){
      const data = new FormData();

      const filename = Date.now() + file.name;
      
      data.append("name", filename)
      data.append("file", file)

      newPost.photo = filename;
      try{
        await axios.post("/upload", data);

      }catch(err)
      {
        console.log(err);
      }
      try{
        const res =  await axios.post("/posts", newPost);

        window.location.replace("/post/" + res.data._id);

      }catch(err){
        console.log(err);
      }
    };
  }

  return (
    <div className="write">
    {file && (
        <img 
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt="" /> 
    )}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormDiv"> 
                <label htmlFor ="fileInput">
                <AiOutlinePlus className="writeIcon" />
                </label>
                <input type="file" id="fileInput" style ={{display: 'none'}} onChange={e=> setFile(e.target.files[0])}/>
                <input className="writeInput" type="text" name="text" placeholder="Title"  autoFocus={true} onChange={e=> setTitle(e.target.value)}/> 
            </div>
            <div className="writeFormDiv">
              <textarea placeholder="Tell your story.." 
              type="text"
              className="writeInput writeText" 
              onChange={e=> setDescription(e.target.value)}
              >
              </textarea>
            </div>

            <div>
              <button className="Submit-btn" type="submit">Publish</button>
            </div>
        </form>
    </div>
  )
}
