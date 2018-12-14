import React from 'react';
import { Link } from 'react-router-dom';
import EventListing from './event_listing';

class EventListings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const events = Object.values(this.props.events).map( event => {
      return (
        <EventListing key={event.id} event={event} />
      );
    });

    return (
      <div className="eventGridContainer">
        <p>{this.props.text}</p>
        <ul className="eventGrid">
          {events}
        </ul>
      </div>
    );
  }


}

export default EventListings;
