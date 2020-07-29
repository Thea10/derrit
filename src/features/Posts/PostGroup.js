import React from 'react';
import Post from './Post';
import "./posts.scss";

const PostGroup = (posts) => {
  
    let items = posts.posts;
    let postgroup = items.reduce((grouplist, item)=>{
        grouplist[item.subreddit] = [...grouplist[item.subreddit] || [], item]
        return grouplist;
    }, {});
    return (

        Object.entries(postgroup).map(([item, index])=>{
            let posts =  index.sort((posta, postb)=>postb.ups - posta.ups).map((post)=>{
                return(
                    <Post key={post.id} post={post} />
                )

            })
           
        return(
           
            <div key={item} className="row text-left mt-3 mx-0">
              <h6 className="group-name"> {item} </h6> <button  className="btn 
              "> <i className="fa fa-sort" aria-hidden="true"></i> Sort by Upvotes </button> 
              
              <div className="col-12  h-auto m-0 ">
                {posts}
              </div>
               
            
             </div>
           
        )
    })
  
            
    )
}



export default PostGroup

