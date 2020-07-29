import React from 'react'
import PostGroup from './PostGroup';


 /*class PostList extends Component {

    constructor() {
        super();
    
        this.state = {
            posts: ''
             
        }
    }

   /* async componentWillMount(){
        await fetch("https://www.reddit.com/.json")
         .then( async (res) => {
           //  await res.json();
             if (res.status >= 200 && res.status <= 299) {
                return res.json();
              } else {
                throw Error(res.statusText);
              }
            
            })
         .then( async data =>{
             this.setState({
                 posts: await data.data.children.map(post =>post.data) 
             })
         }).catch((error) => {
          
               console.log(error)
          
          });
    }


    
    render() {
         let {posts} = this.state;
        return (
            <div className="container-fluid text-center mt-4">

                {
                    posts ?
                    <div>
                       <h3 className="text-left"> Categories </h3>
                        <PostGroup posts={posts} />
                    </div>
                    :
                    <div>
                        <img src={Spinner} alt="loading" />
                        <h6 className="alert"> Loading list... </h6>
                    </div>

                   
                }

                
            </div>
        )
    }
}*/

const  PostList = (posts) =>{

    return (
                <div>
                    {
                        posts.posts  ?
                        <PostGroup posts={posts.posts} />
                        :

                        <h6 className="alert">No posts found</h6>
                    }
                   
                    
                </div>   
    )
    
}

export default PostList;
