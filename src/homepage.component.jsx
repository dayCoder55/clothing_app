import React from 'react';
import "./homepage.styles.scss";

const Homepage  = () => {
    return(
        <div className="HomePage">
            <div className="menu-directory">
                <div className="content">
                    <div className="menu">
                        <h1 className="title">HATS</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="content">
                    <div className="menu">
                        <h1 className="title">JACKETS</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="content">
                    <div className="menu">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="content">
                    <div className="menu">
                        <h1 className="title">WOMENS</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="content">
                    <div className="menu">
                        <h1 className="title">MENS</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage