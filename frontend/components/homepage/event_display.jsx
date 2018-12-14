import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilterDisplay from "./category_filter_display";
import EventListings from "./event_listings";

class EventDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    if (this.props.events && Object.keys(this.props.events).length !== 0) {
      return (
        <div className="eventDisplayContainer">
          <CategoryFilterDisplay text="In the mood for..."/>
          <EventListings events={this.props.events} />
        </div>
      );
    } else {
      return (
        <div className="eventDisplayContainer">
          <CategoryFilterDisplay text="In the mood for..."/>
          <p>Insert loading circle here...</p>
        </div>
      )
    }
  }


}

export default EventDisplay;
