import { combineReducers } from 'redux';

import { Item } from '../types';

import {
  DataLoadedAction,
  DataRequestedAction,
  DataErrorAction,
  ListItemSelectedAction,
  ItemLoadedAction,
  ItemRequestedAction,
  SelectedItemDefaultAction,
} from '../actions';

export interface StoreState {
  itemsListData: Item[];
  itemsListDataLoading: boolean;
  dataError: boolean;
  selectedItemId: number | null;
  selectedItemDetailsData: Item | null;
  itemDetailsDataLoading: boolean;
}

const itemsListDataReducer = (state: Item[] = [], action: DataLoadedAction) => {
  switch (action.type) {
    case 'FETCH_ITEM_LIST_DATA_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const itemsListDataLoadingReducer = (
  state: boolean = false,
  action: DataRequestedAction | DataLoadedAction
) => {
  switch (action.type) {
    case 'FETCH_ITEM_LIST_DATA_REQUEST':
      return true;
    case 'FETCH_ITEM_LIST_DATA_SUCCESS':
      return false;
    default:
      return state;
  }
};

const selectedItemIdReducer = (
  state: number | null = null,
  action: ListItemSelectedAction | SelectedItemDefaultAction
) => {
  switch (action.type) {
    case 'LIST_ITEM_SELECTED':
      return action.payload;
    case 'SELECTED_ITEM_DEFAULT':
      return null;
    default:
      return state;
  }
};

const selectedItemDetailsDataReducer = (
  state: Item | null = null,
  action: ItemLoadedAction | SelectedItemDefaultAction
) => {
  switch (action.type) {
    case 'FETCH_ITEM_DETAILS_SUCCESS':
      return action.payload;
    case 'SELECTED_ITEM_DEFAULT':
      return null;
    default:
      return state;
  }
};

const itemDetailsDataLoadingReducer = (
  state: boolean = false,
  action: ItemRequestedAction | ItemLoadedAction
) => {
  switch (action.type) {
    case 'FETCH_ITEM_DETAILS_REQUEST':
      return true;
    case 'FETCH_ITEM_DETAILS_SUCCESS':
      return false;
    default:
      return state;
  }
};

const dataErrorReducer = (
  state: boolean = false,
  action:
    | DataErrorAction
    | DataLoadedAction
    | DataRequestedAction
    | ItemLoadedAction
    | ItemRequestedAction
) => {
  switch (action.type) {
    case 'FETCH_DATA_FAILURE':
      return true;
    case 'FETCH_ITEM_LIST_DATA_REQUEST':
      return false;
    case 'FETCH_ITEM_LIST_DATA_SUCCESS':
      return false;
    case 'FETCH_ITEM_DETAILS_REQUEST':
      return false;
    case 'FETCH_ITEM_DETAILS_SUCCESS':
      return false;
    default:
      return state;
  }
};

export default combineReducers<StoreState>({
  itemsListData: itemsListDataReducer,
  itemsListDataLoading: itemsListDataLoadingReducer,
  selectedItemId: selectedItemIdReducer,
  selectedItemDetailsData: selectedItemDetailsDataReducer,
  itemDetailsDataLoading: itemDetailsDataLoadingReducer,
  dataError: dataErrorReducer,
});
