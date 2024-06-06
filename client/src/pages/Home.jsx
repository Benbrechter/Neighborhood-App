import { useQuery } from '@apollo/client';

import Main from '../components/Main';

// import query
import {QUERY_POST} from '../utils/queries'

function Home(){
    const { loading, data } = useQuery(QUERY_POST)
    const postData = data?.getAllPosts || []
    if(loading)return <div> Loading </div>
    return (
        <div>
        <Main postData = {postData}/>
        </div>
    )
}

export default Home 