import React from 'react';
import "./Topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Patrickadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGDDH7TwHLMzg/profile-displayphoto-shrink_400_400/0/1645114765561?e=2147483647&v=beta&t=hFFyo5a8MLvGO-MnPbXqoqJPhH8jaZOqj8LVtYm4Nhk" alt="" className='topAvatar' />                              
            </div>
        </div>
    </div>
  )
}