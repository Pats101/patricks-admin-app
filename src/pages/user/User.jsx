import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish, WorkOutline, HomeWorkOutlined } from "@material-ui/icons";
import "./User.css";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQHvDaaJPEki6w/profile-displayphoto-shrink_400_400/0/1602600035922?e=2147483647&v=beta&t=LsJaedBbp2zJKgHs1a8YesBANdwalJHJXJkvoav_nT4" 
                        alt="" 
                        className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Nkosiyapha Gxarisa</span>
                        <span className="userShowUserProfession">Training Developer</span>
                    </div>                      
                </div>
                <div className="userShowBottom">
                    <span className="userShowProfession">Account Details</span>
                    <div className="userShowinfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">alfafa99</span>
                    </div>
                    <div className="userShowinfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">06.03.96</span>
                    </div>
                    <span className="userShowProfession">Contact Details</span>
                    <div className="userShowinfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+27 84 679 0445</span>
                    </div>
                    <div className="userShowinfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">alfafa@gmail.com</span>
                    </div>
                    <div className="userShowinfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Bellville | Cape Town</span>
                    </div>
                    <div className="userShowinfo">
                        <WorkOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">TFG</span>
                    </div>
                    <div className="userShowinfo">
                        <HomeWorkOutlined className="userShowIcon"/>
                        <span className="userShowInfoTitle">Training Developer</span>
                    </div>             
                </div>
            </div>
            <div className="userUpdate">
                <span className="userupdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder="alfafa99" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Nkosiyapha Gxarisa" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Date</label>
                            <input 
                                type="text" 
                                placeholder="06.03.96" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone Number</label>
                            <input 
                                type="text" 
                                placeholder="+27 84 679 0445" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="alfafa@gmail.com" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Home Address</label>
                            <input 
                                type="text" 
                                placeholder="Bellville | Cape Town" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Company</label>
                            <input 
                                type="text" 
                                placeholder="TFG" 
                                className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Job Title</label>
                            <input 
                                type="text" 
                                placeholder="TFG" 
                                className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                                className="userUpdateImg"
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQHvDaaJPEki6w/profile-displayphoto-shrink_400_400/0/1602600035922?e=2147483647&v=beta&t=LsJaedBbp2zJKgHs1a8YesBANdwalJHJXJkvoav_nT4" 
                                alt="" 
                            />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
