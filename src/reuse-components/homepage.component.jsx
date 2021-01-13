import React, { Component } from 'react';
import "./homepage.styles.scss";
import Menu from "../pages/HomePage/menu.component"


class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                { id: 1, name: 'HATS', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },
                { id: 2, name: 'JACKETS', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', linkUrl: '' },
                { id: 3, name: 'SNEAKERS', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', linkUrl: '' },
                { id: 4, name: 'WOMENS', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', size: "large", linkUrl: '' },
                { id: 5, name: 'MENS', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', size: "large", linkUrl: '' }]
        }
    }
    render() {
        return (
            
            <div className="HomePage">
                
                <div className="menu-directory">
                    {this.state.sections.map(({ id, ...otherHomePageProps }) => (
                        <Menu key={id} {...otherHomePageProps} />
                    ))}
                </div>
            </div>
          
        )
    }
}

export default Homepage