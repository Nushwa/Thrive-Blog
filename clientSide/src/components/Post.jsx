import {Link} from 'react-router-dom'
import '../stylesheets/posts.css'


export default function Post({post}) {
  const PF = "http://localhost:5000/images/"

   return (
    <div className= "container col-sm">
      <div className="box">
        <div className="body">

        <Link to={`/post/${post._id}`} className="link">
            <div className="imgContainer" > 
            {post && <img src={PF + post.photo} alt="" /> }
            </div>

        </Link>
        
            <div className="content flex-column align-items-center justify-content-center">
                <div>
                <Link to={`/post/${post._id}`} className="link">
                    <h3>{post.title}</h3>
                    <p className="post-desc"> {post.description}</p>

                </Link>
                </div>
            </div>
        </div>
    </div>

</div>


  );
}

          
          
