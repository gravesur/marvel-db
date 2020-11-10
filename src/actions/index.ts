import { Item } from '../types';

export interface DataLoadedAction {
  type: 'FETCH_ITEM_LIST_DATA_SUCCESS';
  payload: Item[];
}

export const dataLoaded = (data: Item[]) => {
  return {
    type: 'FETCH_ITEM_LIST_DATA_SUCCESS',
    payload: data,
  };
};

export interface DataRequestedAction {
  type: 'FETCH_ITEM_LIST_DATA_REQUEST';
}

export const dataRequested = () => {
  return {
    type: 'FETCH_ITEM_LIST_DATA_REQUEST',
  };
};

export interface DataErrorAction {
  type: 'FETCH_DATA_FAILURE';
}

export const dataError = () => {
  return {
    type: 'FETCH_DATA_FAILURE',
  };
};

export interface ListItemSelectedAction {
  type: 'LIST_ITEM_SELECTED';
  payload: number;
}

export const listItemSelected = (id: number) => {
  return {
    type: 'LIST_ITEM_SELECTED',
    payload: id,
  };
};

export interface ItemLoadedAction {
  type: 'FETCH_ITEM_DETAILS_SUCCESS';
  payload: Item;
}

export const itemLoaded = (item: Item) => {
  return {
    type: 'FETCH_ITEM_DETAILS_SUCCESS',
    payload: item,
  };
};

export interface ItemRequestedAction {
  type: 'FETCH_ITEM_DETAILS_REQUEST';
}

export const itemRequested = () => {
  return {
    type: 'FETCH_ITEM_DETAILS_REQUEST',
  };
};

export interface SelectedItemDefaultAction {
  type: 'SELECTED_ITEM_DEFAULT';
}

export const selectedItemDefault = () => {
  return {
    type: 'SELECTED_ITEM_DEFAULT',
  };
};
