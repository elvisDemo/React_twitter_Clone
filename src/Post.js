import React from 'react';
import "./Post.css";
import {Avatar,Button} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import RepeatIcon from '@material-ui/icons/Repeat';



function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post_avatar">
            <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div post_header>
                    <div className="post_header_Text">
                        <h3>
                            {displayName}{""}
                            <span className="header-special">
                                   {verified && <VerifiedUserIcon className="badge"/>}
                                    @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_header_description">
                        <p>{text}</p>
                    </div>

                </div>
                <img src={image} alt=""/>
                <div className="post_footer">

                    <ChatBubbleIcon fontSize="small" />
                    <RepeatIcon  fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />

                </div>
            
            </div>


        </div>
    )
}

export default Post
