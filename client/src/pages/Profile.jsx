import React from 'react';

const Profile = () => {
    return (
        <div className="container">       
            <article className="card">
                <div className='background'>
                    <img src="assets/profile.jpeg" alt="profile" />
                </div>
                <div className='content'>
                    <h2>Profile name &#127468;&#127463;</h2>
                    <p>
                        Brief intro of person here  
                        <a href="email ad" title="Google">DM</a>
                    </p>
                    <p>Helping with:</p>
                    <ul className="chips">
                        <li className="chip">Skill1</li>
                        <li className="chip">Skill2</li>
                        <li className="chip">Skill3</li>
                        <li className="chip">Zipcode</li>
                    </ul>
                    <div className="action-buttons">
                        <a href="#book-a-mentor">
                            Book a Service
                        </a>
                        <a href="#learn-more" className="secondary">
                            Message
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Profile;




