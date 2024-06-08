import { useQuery } from '@apollo/client';

import Main from '../components/Main/index';

import {QUERY_POST} from '../utils/queries'

//ideally add a options where you can add a comment and add a post

 function Home(){
    const { loading, data } = useQuery(QUERY_POST);
    const postData = data?.getAllPosts || [];
   
    if(loading)return <div> Loading </div>
    return (
        <div>
            <h1 className='homeHeader'> {"What's new in your Hood?"}</h1>
        <Main postData={postData}/>
        </div>
    )
}

export default Home
