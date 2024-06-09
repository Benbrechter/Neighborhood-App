import React from 'react';
import { Link } from 'react-router-dom';

function Home({ postData }) {
    console.log(postData);
    return (
        <div className='post-container'>
            <Link to='/add-post'>
                <button className='add-post-button'>Add Post</button>
            </Link>
            {postData.map(post => (
                <div key={post.id} className='home-post'>
                    <div className='post-content'>
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-paragraph'>{post.postText}</p>
                    </div>
                    <h3>Comments</h3>
                    <div className='comment-content'>
                        {post.comments.map((comment, index) => (
                            <p key={index} className='comments'>{comment.commentText}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
