// import { useQuery } from '@apollo/client';


import Main from '../components/Main/index';
// import query
// import {QUERY_POST} from '../utils/queries'

function Home(){
    const element = <h1 className= 'homeHeader'> What's new in your Hood??</h1>;
    // const { loading, data } = useQuery(QUERY_POST)
    // const postData = data?.getAllPosts || []
    // if(loading)return <div> Loading </div>
    return (
        <div>
            <h1>{element}</h1>
        <Main />
        </div>
    )
}

export default Home 

