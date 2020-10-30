import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import ItemDetails from '../components/item-details/item-details';
import { itemLoaded, itemRequested } from '../actions';
import Spinner from '../components/spinner/spinner';

interface ItemDetailsContainerProps {
  children: any,
  itemId: number, 
  item: any,
  itemType: string, 
  loading: any,
  renderItem: Function,
  getData: Function,
  itemLoaded: Function, 
  itemRequested: Function
}

const itemDetailsContainer = (View: any) => {
  return class extends Component<ItemDetailsContainerProps> {
    componentDidMount() {
      console.log('COMPONENT DID MOUNT FIRED!');
      //console.log(this.props);
      
      //this.updateItem();
    }
  
    
    componentDidUpdate(prevProps: any) {
      console.log('COMPONENT DID UPDATE FIRED!');
      
      if (this.props.itemId !== prevProps.itemId) {
        this.props.itemRequested();

        this.updateItem();
      }
    }
    
    updateItem = () => {
      const { itemId, itemLoaded, getData } = this.props;
  
      if (!itemId) {
        return;
      }
  
      getData(itemId)
      .then((item: any) => {
        itemLoaded(item);
      });
    };

    render() {
      const { itemId, item, itemType, loading } = this.props;
      console.log(itemId);
      
      let itemLabel;

      if (itemType === 'character') itemLabel = 'a character';
      if (itemType === 'comics') itemLabel = 'a comics'; 
      if (itemType === 'event') itemLabel = 'an event';
      if (itemType === 'series') itemLabel = 'a series';

      if (!item) {
        return <h1>Select {itemLabel} from the list</h1>;
      }

      if (loading) {
        return (
          <div className="items-container container mt-5">
            <Spinner />
          </div>
        );
      }

      return (
        <View 
          {...this.props} 
          //item={item} 
        />
      );
    }
  }
};

const mapStateToProps = (state: any) => {
  console.log(state.selectedItemDetailsData);
  
  return {
    itemId: state.selectedItemId,
    item: state.selectedItemDetailsData,
    loading: state.itemDetailsDataLoading
  };
};

/*
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    itemLoaded,
    itemRequested
  }, dispatch);
};
*/

export const CharacterDetails = connect(mapStateToProps, {  
  itemLoaded,
  itemRequested
})(itemDetailsContainer(ItemDetails));

export const ComicsDetails = connect(mapStateToProps, {  
  itemLoaded,
  itemRequested
})(itemDetailsContainer(ItemDetails));

export const EventDetails = connect(mapStateToProps, {  
  itemLoaded,
  itemRequested
})(itemDetailsContainer(ItemDetails));

export const SeriesDetails = connect(mapStateToProps, {  
  itemLoaded,
  itemRequested
})(itemDetailsContainer(ItemDetails));

export default itemDetailsContainer;

/*
export {
  CharacterDetails,
  ComicsDetails,
  EventDetails,
  SeriesDetails
};
*/