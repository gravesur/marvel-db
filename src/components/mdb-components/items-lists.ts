import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import { dataLoaded, dataRequested, listItemSelected } from '../../actions';
import ItemsList from '../items-list/items-list';
import ItemsListContainer from '../../containers/items-list-container';
import MarvelAPIService from '../../services/marvelapi-service';

const marvelapiService = new MarvelAPIService();


const {
  getAllCharacters,
  getAllComics,
  getAllEvents,
  getAllSeries
} = marvelapiService;


const mapStateToProps = (state: any) => {
  return {
    data: state.itemsListData,
    loading: state.itemsListDataLoading
  };
};


/*
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    dataLoaded,
    dataRequested,
    onItemSelected: id => listItemSelected(id)
  }, dispatch);
};
*/

export const CharactersList = connect(mapStateToProps, { 
  getAllCharacters,
  dataLoaded,
  dataRequested,
  onItemSelected: listItemSelected
})(ItemsListContainer(ItemsList, getAllCharacters));

export const ComicsList = connect(mapStateToProps, {
  getAllComics,
  dataLoaded,
  dataRequested,
  onItemSelected: (id: number) => listItemSelected(id)
})(ItemsListContainer(ItemsList, getAllComics));

export const EventsList = connect(mapStateToProps, {
  getAllEvents,
  dataLoaded,
  dataRequested,
  onItemSelected: (id: number) => listItemSelected(id)
})(ItemsListContainer(ItemsList, getAllEvents));

export const SeriesList = connect(mapStateToProps, {
  getAllSeries,
  dataLoaded,
  dataRequested,
  onItemSelected: (id: number) => listItemSelected(id)
})(ItemsListContainer(ItemsList, getAllSeries));

/*
export {
  CharactersList,
  ComicsList,
  EventsList,
  SeriesList
};
*/