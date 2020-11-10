import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';

import ItemDetails from '../components/item-details/item-details';
import { itemLoaded, itemRequested } from '../actions';
import Spinner from '../components/spinner/spinner';
import { Item } from '../types';
import { StoreState } from '../reducers';

interface ItemDetailsContainerProps {
  children: any;
  itemId: number | null;
  item: Item | null;
  itemType: string;
  loading: boolean;
  renderItem: Function;
  getData: (id: number) => Promise<any>;
  itemLoaded: typeof itemLoaded;
  itemRequested: typeof itemRequested;
}

const itemDetailsContainer = (View: typeof ItemDetails) => {
  return class extends Component<ItemDetailsContainerProps> {
    componentDidMount() {
      //this.updateItem();
    }

    componentDidUpdate(prevProps: ItemDetailsContainerProps) {
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

      getData(itemId).then((item: Item) => {
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
  };
};

const mapStateToProps = (state: StoreState) => {
  //console.log(state.selectedItemDetailsData);

  return {
    itemId: state.selectedItemId,
    item: state.selectedItemDetailsData,
    loading: state.itemDetailsDataLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      itemLoaded,
      itemRequested,
    },
    dispatch
  );
};

export const CharacterDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(itemDetailsContainer(ItemDetails));

export const ComicsDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(itemDetailsContainer(ItemDetails));

export const EventDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(itemDetailsContainer(ItemDetails));

export const SeriesDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(itemDetailsContainer(ItemDetails));

export default itemDetailsContainer;
