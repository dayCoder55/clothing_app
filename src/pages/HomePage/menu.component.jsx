import React from 'react';
import './menu.styles.scss'
import { withRouter } from "react-router-dom";

const Menu = ({ title, imageUrl, size, history, linkUrl, match }) =>
(
    <div className={`${size} content`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="ZoomImg"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="menu">
            <h1 className="title">{title}</h1>
            <span className="subTitle">SHOP NOW</span>
        </div>
    </div>
)





export default withRouter(Menu)