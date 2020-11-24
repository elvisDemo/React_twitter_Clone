import React, {useState,useEffect} from 'react';
import "./Feed.css";
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';

function Feed() {

const[posts,setPosts] = useState([]);
useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>(
        setPosts(snapshot.docs.map(doc=>doc.data()))
    ))
},[])

    return (
        <div className="feed">
            {/*Header */}
           <div className="feed_header">
           <h2>Home</h2>
           </div>
            {/*TweetBox */}
            <TweetBox />
            {/*Post */}
            {posts.map(posts=>(
            
            <Post 
            displayName={posts.displayName}
            username={posts.username} 
            verified={posts.verified}
            text={posts.text}
            avatar={posts.avatar}
            image={posts.image}
            />
            
            ))}
         
        </div>
    )
}

export default Feed
