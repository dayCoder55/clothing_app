import React from 'react';
import './menu.styles.scss'

const Menu = ({ title, imageUrl ,size }) => 
    (
        <div  className={`${size} content`}>
        <div className = "ZoomImg" 
        style={{
            backgroundImage :`url(${imageUrl})`
        }}/>
            <div className="menu">
              <h1 className="title">{title}</h1>
              <span className="subTitle">SHOP NOW</span>
            </div>
        </div>
    )



  

export default Menu