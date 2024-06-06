import { Link } from 'react-router-dom';

function Main({postData}){
    return(
        <div>
            {postData.map(post => (
                <>
              <div>{post.title}</div>
              <div>{post.postText}</div> 
            {/*<img src={put the image into public} alt="" /> */}
            <div>{post.comments.map(comment => (
                <>
                <div>{comment.commentText}</div>
                <div>{comment.createdAt}</div>
                </>
            ))}</div>
            </> 
            ))}
        </div>
    )
} 

export default Main 

//