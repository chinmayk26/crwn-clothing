import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.style.scss';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../component/collection-preview/collection-preview.component'

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionprops }) => (
        <CollectionPreview key={id} {...otherCollectionprops }/>
    ))}
</div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);