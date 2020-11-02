import React, { Component } from 'react';

import Spinner from '../components/spinner/spinner';

interface ItemsListContainerProps {
  data: any,
  loading: boolean,
  renderItem: Function,
  dataLoaded: Function,
  dataRequested: Function,
  onItemSelected: Function
}

const ItemsListContainer = (View: any, getData: any) => {
  return class extends Component<ItemsListContainerProps> {
    componentDidMount() {
      const { dataLoaded, dataRequested } = this.props;

      dataRequested();

      getData()
      .then(
        (data: any) => data.filter((item: any) => !item.img.includes('image_not_available'))
      )
      .then((data: any) => {   
        dataLoaded(data);
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
  }
};

export default ItemsListContainer;