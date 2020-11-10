import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux';

import { dataLoaded, dataRequested, listItemSelected } from '../../actions';
import ItemsList from '../items-list/items-list';
import ItemsListContainer from '../../containers/items-list-container';
import MarvelAPIService from '../../services/marvelapi-service';
import { StoreState } from '../../reducers';

const marvelapiService = new MarvelAPIService();

const {
  getAllCharacters,
  getAllComics,
  getAllEvents,
  getAllSeries,
} = marvelapiService;

const mapStateToProps = (state: StoreState) => {
  return {
    data: state.itemsListData,
    loading: state.itemsListDataLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      dataLoaded,
      dataRequested,
      onItemSelected: listItemSelected,
    },
    dispatch
  );
};

export const CharactersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer(ItemsList, getAllCharacters));

export const ComicsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer(ItemsList, getAllComics));

export const EventsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer(ItemsList, getAllEvents));

export const SeriesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListContainer(ItemsList, getAllSeries));
