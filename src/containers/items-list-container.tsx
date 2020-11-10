import React, { Component } from 'react';

import Spinner from '../components/spinner/spinner';
import ItemsList from '../components/items-list/items-list';
import { Item } from '../types';
import { dataLoaded, dataRequested } from '../actions';

interface ItemsListContainerProps {
  data: Item[];
  loading: boolean;
  renderItem: Function;
  dataLoaded: typeof dataLoaded;
  dataRequested: typeof dataRequested;
  onItemSelected: Function;
}

const ItemsListContainer = (
  View: typeof ItemsList,
  getData: () => Promise<any>
) => {
  return class extends Component<ItemsListContainerProps> {
    componentDidMount() {
      const { dataLoaded, dataRequested } = this.props;

      dataRequested();

      getData().then((data: Item[]) => {
        const filteredData = data.filter(
          (item: Item) => !item.img.includes('image_not_available')
        );

        dataLoaded(filteredData);
      });
    }

    render() {
      const { data, loading } = this.props;

      if (loading) {
        return (
          <div className="items-container container mt-5">
            <Spinner />
          </div>
        );
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default ItemsListContainer;
