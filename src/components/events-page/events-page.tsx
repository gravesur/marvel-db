import React from 'react';

import { EventsList } from '../mdb-components/items-lists';
import { EventDetails } from '../../containers/item-details-container';
import { Record } from '../item-details/item-details';

import './events-page.scss';

import MarvelAPIService from '../../services/marvelapi-service';

const marvelapiService = new MarvelAPIService();

const { getEvent } = marvelapiService;

const EventsPage = () => {

  return (
    <div className="row mb-2 mt-5">
      <div className="col-md-6 mx-auto">
        <EventsList
          renderItem={(item: any) => item.title} />
      </div>
      <div className="col-md-5 mx-auto">
      <EventDetails
        getData={getEvent}
        renderItem={(item: any) => item.title}
        itemType='event' >

        <Record field="overview" label="Overview" item /> 
      </EventDetails>     
      </div>
    </div>
  );
};

export default EventsPage;