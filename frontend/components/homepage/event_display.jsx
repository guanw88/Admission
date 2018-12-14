import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilterDisplay from "./category_filter_display";
import EventListings from "./event_listings";

class EventDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eventDisplayContainer">
        <CategoryFilterDisplay text="In the mood for..."/>
        <EventListings />
      </div>
    );
  }


}

export default EventDisplay;
