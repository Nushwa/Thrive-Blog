import {useContext, useState} from "react";
import "../../stylesheets/settings.css";
import { BiUserCircle } from "react-icons/bi";
import {Context } from '../../context/Context.js'
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmai] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)

  const {user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type: "UPDATE_START"})

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      
      data.append("name", filename)
      data.append("file", file)

      updatedUser.profilePicture = filename;
      try{
        await axios.post("/upload", data);

      }catch(err)
      {
        console.log(err);
      }
      try{
        const res = await axios.put("/users/" + user._id, updatedUser);
        setSuccess(true);
        dispatch({type: "UPDATE_SUCCESS", payload: res.data});

      }catch(err){
        console.log(err);
        dispatch({type: "UPDATE_ERROR"})
      }
    };
  }

  return (
    <div className="settings">
    
      <div className="Wrapper">
        <div className="Stitle">
          <span className="SUpTitle">Update Your Account</span>
          
        </div>

        <form className="Sform" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
            <div className="Spfp">
                <img
                  className="pfpImg"
                  src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
                  alt=""
                />
                <label htmlFor="fileInput" >
                  <BiUserCircle className="SpfpIcon" />
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
                />
            </div>

          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>

          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e) => setEmai(e.target.value)} />

          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          
          <button className="submit-btn" onClick={(e)=> console.log("Btn clicked")} type="submit">
            Update
          </button>

          {success && <span style={{color: "black", textAign: "center", marginTop: "20px" }}>Profile has been updated </span>}
        </form>
      </div>
    </div>
  );
}
