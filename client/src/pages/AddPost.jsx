import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutation';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
    const [formState, setFormState] = useState({ title: '', postText: '' });
    const [addPost, { error, data }] = useMutation(ADD_POST);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addPost({
                variables: { postText: formState.postText, title: formState.title  },
            });
            console.log(data);
            navigate('/');
        } catch (e) {
            console.error(e);
        }
        setFormState({
            title: '',
            postText: '',
        });
    };

    return (
        <div className="add-post-container">
            <div className="card">
                <div className="login-box">
                    <h4 className="">Add Post</h4>
                    <form className='form' onSubmit={handleFormSubmit}>
                        <input
                            className="form-input"
                            placeholder="Post Title"
                            name="title"
                            type="text"
                            value={formState.title}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            className="form-input"
                            placeholder="Post Text"
                            name="postText"
                            value={formState.postText}
                            onChange={handleChange}
                            required
                        />
                        <button
                            className="login-btn"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                    {error && <div>Error: {error.message}</div>}
                </div>
            </div>
        </div>
    );
}
