import { Link } from 'react-router-dom';

function Main({ postData }) {
    console.log(postData)
    return (  
        <div className='post-container'>
            {postData.map(post => (
                <div className = 'home-post'>
                    <div className = 'post-content'>
                        <h2 className= 'post-title'>{post.title}</h2>
                        <p clasName = 'post-paragrapgh'>{post.postText}</p> 
                    </div>
                    <h3>Comments</h3>
                    <div className = 'comment-content'>
                        {post.comments.map(comment => (
                            <>
                                <p className='comments'>{comment.commentText}</p>
                               
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>


    )
} 

export default Main 

