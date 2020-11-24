/*rfce*/
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Sidebar.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            {/*twitter Icon*/}
            <TwitterIcon className="sidebar_twitter_icon"/>
             {/*sidebar*/}
             <SidebarOptions active Icon={HomeIcon} text="Home"/>
             <SidebarOptions Icon={SearchIcon} text="Explore"/>
             <SidebarOptions Icon={NotificationsIcon} text="Notifications"/>

             <SidebarOptions Icon={MailOutlineIcon} text="Message"/>
             <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmark"/>
             <SidebarOptions Icon={ListAltIcon} text="List"/>
             <SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
             <SidebarOptions Icon={MoreHorizIcon} text="More"/>

              {/*button*/}
              <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar;
