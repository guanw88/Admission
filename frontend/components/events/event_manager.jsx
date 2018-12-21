import React from 'react';
import { Link } from 'react-router-dom';
import EventManagerItem from "./event_manager_item";

class EventManager extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    const currentUserId = this.props.currentUser ? this.props.currentUser.id : null;
    const events =
      Object.values(this.props.events).length === 0 ?
        <div>You have no managed events at this time.</div> :
      Object.values(this.props.events).map( event => {
        return (
          <EventManagerItem deleteEvent={this.props.deleteEvent} key={event.id} event={event} />
        );
      });

    return (
      <div className="event-manager-container">
        <div className="event-manager-title">Manage Events</div>
        <ul className="event-manager-item-container">
          {events}
        </ul>
      </div>
    )
  }
}

export default EventManager;
