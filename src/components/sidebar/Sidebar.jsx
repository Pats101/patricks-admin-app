import { 
  Assessment, 
  EmailOutlined, 
  FeedbackOutlined, 
  LineStyle, 
  Message, 
  PersonOutlined, 
  Storefront, 
  Timeline, 
  TrendingUp, 
  WorkOutlined 
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon" />
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon" />
                    Sales
                </li>                                        
            </ul>
          </div>          
          <div className='sidebarMenu'>
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/patricks-admin-app/users" className="link">
                <li className="sidebarListItem active">
                    <PersonOutlined className="sidebarIcon" />
                    Users
                </li>
              </Link>
              <Link to="/patricks-admin-app/products" className="link">
                <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                    Products
                </li>
              </Link>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon" />
                    Transactions
                </li>
                <li className="sidebarListItem">
                    <Assessment className="sidebarIcon" />
                    Reports
                </li>            
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <EmailOutlined className="sidebarIcon" />
                Email
              </li>
              <li className="sidebarListItem">
                <FeedbackOutlined className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <Message className="sidebarIcon" />
                Message
              </li>                                        
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <WorkOutlined className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Assessment className="sidebarIcon" />
                Reports
              </li>                                        
            </ul>
          </div>
        </div>
    </div>
  )
}
