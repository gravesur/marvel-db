export const dataLoaded = (newData: any) => {
  return {
    type: 'FETCH_ITEM_LIST_DATA_SUCCESS',
    payload: newData
  };
};

export const dataRequested = () => {
  return {
    type: 'FETCH_ITEM_LIST_DATA_REQUEST'
  };
};

export const dataError = () => {
  return {
    type: 'FETCH_DATA_FAILURE'
  };
};

export const listItemSelected = (id: number) => {
  return {
    type: 'LIST_ITEM_SELECTED',
    payload: id
  };
};

export const itemLoaded = (newItem: any) => {
  return {
    type: 'FETCH_ITEM_DETAILS_SUCCESS',
    payload: newItem
  };
};

export const itemRequested = () => {
  return {
    type: 'FETCH_ITEM_DETAILS_REQUEST'
  };
};

export const selectedItemDefault = () => {
  console.log('SELECTED ITEM DEFAULT FIRED!!!');
  
  return { 
    type: 'SELECTED_ITEM_DEFAULT'
  };
};