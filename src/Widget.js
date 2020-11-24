import React from 'react';
import "./Widget.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
    return (
        
       
        <div className="widgets">
             <div className="widget-input"> 
             <SearchIcon className="widgets_searchIcon" />
             <input placeholder="Search Twitter" type="text" />
             </div>
            <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}
/>

<TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>


        </div>
    )
}

export default Widget
