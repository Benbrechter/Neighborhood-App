<<<<<<< Updated upstream
import { useQuery } from '@apollo/client';

=======
// import { useQuery } from '@apollo/client';
// import Footer from '../components/Footer/index';
>>>>>>> Stashed changes

// import Main from '../components/Main/index';
// // import query
// import {QUERY_POST} from '../utils/queries'

<<<<<<< Updated upstream
function Home(){
    const { loading, data } = useQuery(QUERY_POST)
    const postData = data?.getAllPosts || []
    console.log(postData)
    if(loading)return <div> Loading </div>
    return (
        <div>
            <h1 className= 'homeHeader'> What's new in your Hood?</h1>
        <Main postData={postData}/>
        </div>
    )
}
=======
// export default function Home(){
//     const { loading, data } = useQuery(QUERY_POST)
//     const postData = data?.getAllPosts || []
//     console.log(postData)
//     // if(loading)return <div> Loading </div>
//     return (
//         <div>
//             <h1 className= 'homeHeader'> What's new in your Hood? testing</h1>
//         <Main postData={postData}/>
//         <Footer/>
//         </div>
//     )
// }
>>>>>>> Stashed changes

export default Home 

