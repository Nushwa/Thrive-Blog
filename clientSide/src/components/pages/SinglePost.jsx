import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import {Context} from '../../context/Context.js'
import '../../stylesheets/singlePost.css'


function SinglePost() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation()
  const path =  location.pathname.split('/')[2]
  const [post, setPost] = useState({})

  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);



  useEffect(() => {
    const getPost = async ()=> {
        const res = await axios.get("/posts/" + path)
        setPost(res.data)

        setTitle(res.data.title);
        setDescription(res.data.description);
    };

    getPost()

  },[path])

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/${post._id}`, 
      {data: {username: user.username}
      });
      window.location.replace("/");
    }
    catch(err){
      console.log(err);
    }
  }

  const handleUpdate = async () => {
    try{
      await axios.put(`/posts/${post._id}`, 
      {username: user.username, 
      title, 
      description}
      );
      setUpdateMode(false);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="single">
        <div className="PostWrapper">
        {post.photo && (
             <img src={PF + post.photo}
                alt=""
                className="PostImg" />

        )}
           {updateMode ? 
           <input type="text" 
           value={title} 
           className="titleInput" 
           onChange={(e) => setTitle(e.target.value)}
           /> 
           :(
            <h1 className="Title">
               {title}
               {post.username === user?.username &&
               <div className="Edit">
                    <BiEdit className="singlePostIcon" onClick={()=> setUpdateMode(true)} />
                    <AiFillDelete className="singlePostIcon" onClick={handleDelete} />
                </div>
               }
            </h1>
            )}

            <div className="Info">
                <span className="Author">Author: <b> {post.username} </b> </span>
                <span className="Date">1 hour ago </span>
            </div>

            {updateMode ? 
            <textarea 
            value={description} 
            className="DescInput" 
            onChange={(e)=> setDescription(e.target.value)} 
            /> : (
              <p className="Description">
                {description}
              </p>
            )}
            {updateMode && 
            <button className="singlePostBtn btn btn-dark" onClick={handleUpdate} >Update </button>
            }
            
        </div>
    </div>
  )
}


export default SinglePost;
