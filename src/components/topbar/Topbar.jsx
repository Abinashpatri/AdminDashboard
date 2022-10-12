import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin.</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://abinashpatri.netlify.app/static/media/profile.032d0c8cf1ba8acfcf8b.png" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar