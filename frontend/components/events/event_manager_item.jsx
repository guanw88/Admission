import React from 'react';
import { Link } from 'react-router-dom';

class EventManagerItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {event_id: this.props.event.id};
  }

  extractStartMon(datetime) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObject = new Date(datetime);
    return months[dateObject.getMonth()]
  }

  extractStartDay(datetime) {
    const dateObject = new Date(datetime);
    return dateObject.getDate();
  }

  formatStartDatetime(datetime) {
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const dateObject = new Date(datetime);
    const hours = dateObject.getHours()%12 === 0 ? "12" : dateObject.getHours()%12;
    let minutes;
    if (dateObject.getMinutes() < 10) {
      minutes = "0" + dateObject.getMinutes();
    } else {
      minutes = dateObject.getMinutes();
    }
    const ampm = hours > 0 && hours < 12 ? "am" : "pm";
    return days[dateObject.getDay()] + ", " + this.extractStartMon(datetime) + " " +
      this.extractStartDay(datetime) + ", " + hours + ":" + minutes + ampm;
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(e.target.id);
    this.setState({event_id: null});
  }

  render() {
    const event = this.props.event;
    return (
      <li className="event-manager-item">
        <Link to={"/event/" + event.id}>
          <div className="event-manager-item-title">{event.event_name}</div>
        </Link>
        <div className="event-manager-item-text">
          {this.formatStartDatetime(event.start_datetime)}
        </div>
        <div className="event-manager-item-buttons">
          <Link to={"/event/" + event.id + "/edit"}>
            <div className="event-manager-item-button">Edit</div>
          </Link>
          <Link to={"/event/" + event.id}>
            <div className="event-manager-item-button">View</div>
          </Link>
          <div id={event.id} onClick={this.handleDelete} className="event-manager-item-button">Delete</div>
        </div>
      </li>
    );
  }


}

export default EventManagerItem;
