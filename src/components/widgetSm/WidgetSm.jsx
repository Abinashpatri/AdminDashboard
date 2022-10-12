import React from 'react'
import './widgetSm.css'
import {Visibility} from '@mui/icons-material'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://abinashpatri.netlify.app/static/media/profile.032d0c8cf1ba8acfcf8b.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abinash</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className= "widgetSmIcon"/>Display</button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://abinashpatri.netlify.app/static/media/profile.032d0c8cf1ba8acfcf8b.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abinash</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className= "widgetSmIcon"/>Display</button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://abinashpatri.netlify.app/static/media/profile.032d0c8cf1ba8acfcf8b.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abinash</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className= "widgetSmIcon"/>Display</button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://abinashpatri.netlify.app/static/media/profile.032d0c8cf1ba8acfcf8b.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abinash</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className= "widgetSmIcon"/>Display</button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://abinashpatri.netlify.app/static/media/profile.032d0c8cf1ba8acfcf8b.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abinash</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className= "widgetSmIcon"/>Display</button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm