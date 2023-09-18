import {useEffect, useState} from 'react'
import Header from '../components/Header'
import '../stylesheets/homestyle3.css'
import Post from '../components/Post'
import Features from '../components/pages/Features'
import Footer from './Footer'
import axios from "axios"
import AllPost from "./pages/AllPost"
import '../bootstrap-5.2.0-beta1-dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

export default function Home() {
   const [posts, setPosts] = useState([]);
   const [users, setUsers] = useState([]);

// const url = "http://localhost:5000/api"

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get('/posts')
         setPosts(res.data)
      }
      
      fetchPosts()
      
   },[])

  return (
<div className="home">
   <Header />
   <center>
      <div>
         <h2 className="heading3">
            See what we’ve <span className="span-heading3"><i>written</i></span> lately
         </h2>
      </div>

      <div>
         <AllPost posts={posts}/>
      </div>
   </center>


<div className="flex-container">
<div style={{display: 'inline-block'}}>
    <h2 className="sub-heading col-lg" style={{}}> 
      Subscribe to <span className="new"><i>new posts</i></span>

       <button className="sub-input" style={{marginLeft: '560px'}} > Subscribe</button>
    </h2>

   
</div>

</div>



<Footer />

</div>

  )
}
