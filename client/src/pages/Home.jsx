import { useQuery } from '@apollo/client';

import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// import query
import {QUERY_POST} from '../utils/queries'

function Home(){
    const element = <h1> What's new in your Hood??</h1>;
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

// header w/ houses (includes login button)
// clickable mailbox with neighboorhood events
// comment feed from main
// sidebar
// footer
