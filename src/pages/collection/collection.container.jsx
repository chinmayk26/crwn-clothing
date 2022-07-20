import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectedIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectedIsCollectionsLoaded(state)
  });
  
  const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionPage);
  
  export default CollectionPageContainer;
  