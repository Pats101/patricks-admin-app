import { EmailOutlined, FeedbackOutlined, Message } from '@material-ui/icons';
import React from 'react'
import "./NotificationsMenu.css";

 export default function 
() {
  return (
    <div className='notificationsMenu'>
        <h3 className="notificationsMenuTitle">Notifications</h3>
        <ul className="notificationsMenuList">
            <li className="notificationsMenuListItem active">
                <EmailOutlined className="notificationsMenuIcon" />
                Email
            </li>
            <li className="notificationsMenuListItem">
                <FeedbackOutlined className="notificationsMenuIcon" />
                Feedback
            </li>
            <li className="notificationsMenuListItem">
                <Message className="notificationsMenuIcon" />
                Message
            </li>                                        
        </ul>
    </div>
  )
}
