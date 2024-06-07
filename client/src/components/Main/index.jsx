import { Link } from 'react-router-dom';

function Main({ postData }) {
    console.log(postData)
    return (  
        <div className='post-container'>
            {postData.map(post => (
                <div className = 'home-post'>
                    <div className = 'post-content'>
                        <h2>{post.title}</h2>
                        <p>{post.postText}</p> 
                    </div>
                    <div className = 'comment-content'>
                        {post.comments.map(comment => (
                            <>
                                <p>{comment.commentText}</p>
                                <p>{comment.createdAt}</p>
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>


    )
} 

export default Main 

{/* <div className = 'home-post'>
<h2>Title</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis at ut dolore voluptatibus quod similique impedit! Et temporibus odio repellendus minima quis totam voluptatem, tenetur odit accusantium ratione laudantium aperiam?</p>
</div>
<div className='post-comments'>

</div> */}