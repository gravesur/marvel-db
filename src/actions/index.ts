/*
import axios from 'axios';

import { Character } from '../types';

const _urlBase = 'https://gateway.marvel.com/v1/public';
const _apikey = 'bee01df4612be419e6981380fc9143ed';
const _hash = '6d61ee38cc5b15a56375066f84aa3be4';
  
const getData = async (url: string) => {
  try {
    const res = await axios(`${_urlBase}${url}&apikey=${_apikey}&hash=${_hash}`);

    const results = res.data.data.results;

    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getAllCharacters = async () => {
  const res = await getData(`/characters?ts=1&offset=297&limit=30`);
  console.log(res);
  
  return res.map(_transformCharacter);
};

export const getCharacter = async (id: number) => {
  const res = await getData(`/characters?ts=1&id=${id}`)
  const character = res[0];
  return _transformCharacter(character);
};

const _transformCharacter = (character: any) => {
  return {
    id: character.id,
    name: character.name,
    description: character.description,
    img: character.thumbnail.path,
    comics: character.urls[0].url,
    overview: character.urls[1].url
  }
};
*/

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
    type: 'SELECTED_ITEM_DEFAULT' ,
  };
};

/*
export {
  getAllCharacters,
  getCharacter
}
*/