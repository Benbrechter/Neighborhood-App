import { Link } from 'react-router-dom';

function Main({postData}){
    return(
        <div>
            <div className = 'home-post'>
           <h2>Title</h2>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis at ut dolore voluptatibus quod similique impedit! Et temporibus odio repellendus minima quis totam voluptatem, tenetur odit accusantium ratione laudantium aperiam?</p>
           </div>
           <div className='post-comments'>

           </div>
        </div>
    )
} 

export default Main 
// {postData.map(post => (
//     <>
//   <div>{post.title}</div>
//   <div>{post.postText}</div> 
// {/*<img src={put the image into public} alt="" /> */}
// <div>{post.comments.map(comment => (
//     <>
//     <div>{comment.commentText}</div>
//     <div>{comment.createdAt}</div>
//     </>
// ))}</div>
// </> 
// ))}