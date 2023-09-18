import '../stylesheets/header.css'
import '../bootstrap-5.2.0-beta1-dist/css/bootstrap.css'

export default function Header(){
    return(
        <div className="body">
       
            <div>
                <h1 className="heading1">Thoughts, stories and <br /> 
                    ideas <span className="span-heading">by the Thrive team</span>
                </h1>
                <h2 className="heading2">A beautiful way to share stories with your growing audience.</h2>
   
                <button className="sub-btn1 btn btn-dark ">Become a Subscriber</button>
            </div>
        </div>
    )
}