import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return this.state.collections.map((collection) => (
            <CollectionPreview key={collection.id} title={collection.title} items={collection.items}></CollectionPreview>
        ))
    }

}

export default ShopPage;