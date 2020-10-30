import React from 'react';

import { ComicsList } from '../mdb-components/items-lists';
import { ComicsDetails } from '../../containers/item-details-container';
import { Record } from '../item-details/item-details';

import './comics-page.scss';

import MarvelAPIService from '../../services/marvelapi-service';

const marvelapiService = new MarvelAPIService();

const { getComics } = marvelapiService;

const ComicsPage = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-6 mx-auto">
        <ComicsList 
          renderItem={(item: any) => item.title} />
      </div>
      <div className="col-md-5 mx-auto">
      <ComicsDetails
        getData={getComics}
        renderItem={(item: any) => item.title}
        itemType='comics' >

        <Record field="overview" label="Overview" item />
      </ComicsDetails> 
      </div>
    </div>
  );
};

export default ComicsPage;