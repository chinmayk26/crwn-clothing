import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../component/collections-overview/collection-overview.container';

const ShopPage= ({ fetchCollectionsStart, match}) => {
  useEffect(()=> {
    fetchCollectionsStart();
  }, []);

  return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
        );
  }  

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
 
export default connect(null, mapDispatchToProps)(ShopPage);






