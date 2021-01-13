import React, { Component } from 'react';
import { SHOP_DATA } from "./shop.data";
import { CollectionPreview } from "../../reuse-components/collection-preview/colection-preview.component"

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div className="shop-name">
                {collection.map(({ id, ...otherItemProps }) => (
                    <CollectionPreview key={id}{...otherItemProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage