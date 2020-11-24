
import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar,Button} from "@material-ui/core";
import db from './firebase';
function TweetBox() {
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
 

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Elvis',
            username:'ortiz',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://th.bing.com/th/id/OIP.vs8RJhrvNEadY1F4qWTrogHaNJ?pid=Api&rs=1"
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
         <form>


         <div className="tweetBox_input">
                <Avatar src="https://th.bing.com/th/id/OIP.vs8RJhrvNEadY1F4qWTrogHaNJ?pid=Api&rs=1" />
                <input placeholder="what's cooking ?" value={tweetMessage}  onChange={(e) =>setTweetMessage(e.target.value)} type="text"/>
                <input className="tweetBox_image"  value={tweetImage} onChange={(e) =>setTweetImage(e.target.value)}   placeholder="Enter image URL" type="text"/>
            </div>  
            <Button onclick={sendTweet} type="submit" className="tweetBox_button_tweet">Tweet</Button>

         </form>
        </div>
    )
}

export default TweetBox