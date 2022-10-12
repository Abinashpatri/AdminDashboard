import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser"><button className="userAddButton">Create</button></Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className='userShowImg' src="https://cdn.britannica.com/96/177096-138-2CB46AEC/discussion-organ-systems-human-body-another-influence.jpg?w=800&h=450&c=crop" alt="" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Backer</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.12.1995</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+91 88888888</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@mail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Odisha | India</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='annabeck99' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Anna Backer' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='annabeck99@mail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+91 88888888' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Odisha | India' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className='userUpdateImg' alt='' src='https://cdn.britannica.com/96/177096-138-2CB46AEC/discussion-organ-systems-human-body-another-influence.jpg?w=800&h=450&c=crop' />
                            <label htmlFor="file"> <Publish className='userUpdateIcon'/> </label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User