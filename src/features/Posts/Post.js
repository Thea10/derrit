import React from 'react';
//import moment from 'moment';
import logo from '../../Derrit.png';
import "./posts.scss";


const Post = (post) => {
     let details = post.post;
     let date = new Date(details.created_utc * 1000).toGMTString();
    return (
        <div className="mx-auto my-3 row justify-content-around main-post">
          <div className="col-md-3 img-section h-100">
            {
              details.thumbnail === "self" ||  details.thumbnail === "default" ?
              <img src={logo} alt="preview" width="100" />
             
             
              :

              <img src={details.thumbnail} alt="preview" width="auto" />

              
              

            }
           
           </div>

           <div className=" col-md-6 extra-details h-100">
              <h6> Date Posted: { date } </h6>
             <h5 className="font-weight-bold"> {details.title}  </h5> 

             <div className="d-md-flex justify-content-between actions">    <small> <i title="Upvotes" className="fa fa-vote-yea    "></i> {details.ups} </small>

               <h6 > <a href={details.url} target="_blank noopener noreferer" > View Post </a> </h6> </div>
            
            </div>
            
        </div>
    )
}

export default Post
