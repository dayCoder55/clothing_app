import React , {Component } from 'react';
import "./homepage.styles.scss";
import Menu from "../pages/menu.component"

class Homepage  extends Component{
    constructor(){
        super();
        this.state = {
            sections : [
        { id: 1, name:'HATS',imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'},
        {id:2 ,name:'JACKETS',  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'},
        {id:3,name:'SNEAKERS', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'},
        {id:4,name:'WOMENS', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',size:"large"},
        {id:5,name:'MENS', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',size:"large"}]
        }
    }
    render(){
    return(
        <div className="HomePage">
            <div className="menu-directory">
                {this.state.sections.map(( {id,imageUrl,name ,size}) => (
                    <Menu key = {id} title={name} imageUrl={imageUrl} size={size}/>
                ))}   
            </div>
        </div>
    )
    }
}

export default Homepage