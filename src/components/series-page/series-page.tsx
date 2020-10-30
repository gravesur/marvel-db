import React from 'react';

import { SeriesList } from '../mdb-components/items-lists';
import { SeriesDetails } from '../../containers/item-details-container';
import { Record } from '../item-details/item-details';

import './series-page.scss';

import MarvelAPIService from '../../services/marvelapi-service';

const marvelapiService = new MarvelAPIService();

const { getSeries } = marvelapiService;

const SeriesPage = () => {

  return (
    <div className="row mb-2 mt-5">
      <div className="col-md-6 mx-auto">
        <SeriesList
          renderItem={(item: any) => item.title} 
        />
      </div>
      <div className="col-md-5 mx-auto">
      <SeriesDetails
        getData={getSeries}
        renderItem={(item: any) => item.title}
        itemType='series' 
      >
        <Record field="overview" label="Overview" item /> 
      </SeriesDetails>      
      </div>
    </div>
  );
};

export default SeriesPage;