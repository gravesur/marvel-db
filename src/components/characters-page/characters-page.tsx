import React from 'react';

import { CharactersList } from '../mdb-components/items-lists';
import { CharacterDetails } from '../../containers/item-details-container';
import { Record } from '../item-details/item-details';
import { Character } from '../../types';

import './characters-page.scss';

import MarvelAPIService from '../../services/marvelapi-service';

const marvelapiService = new MarvelAPIService();

const { getCharacter } = marvelapiService;

const CharactersPage = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-6 mx-auto">
        <CharactersList renderItem={(item: Character) => item.name} />
      </div>
      <div className="col-md-5 mx-auto">
        <CharacterDetails
          getData={getCharacter}
          renderItem={(item: Character) => item.name}
          itemType="character"
        >
          <Record field="overview" label="Character overview" item />
          <Record field="comics" label="Comics" item />
        </CharacterDetails>
      </div>
    </div>
  );
};

export default CharactersPage;
