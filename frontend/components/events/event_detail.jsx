import React from 'react';
import { Link } from 'react-router-dom';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestEvent(this.props.eventId);
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

  formatStartDate(datetime) {
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObject = new Date(datetime);
    const hours = dateObject.getHours();
    const year = dateObject.getYear() + 1900;
    return days[dateObject.getDay()] + ", " + months[dateObject.getMonth()] + " " +
      this.extractStartDay(datetime) + ", " + year;
  }

  formatTime(datetime) {
    const dateObject = new Date(datetime);
    const hours = dateObject.getHours()%12 === 0 ? "12" : dateObject.getHours()%12;
    let minutes;
    if (dateObject.getMinutes() < 10) {
      minutes = "0" + dateObject.getMinutes();
    } else {
      minutes = dateObject.getMinutes();
    }
    const ampm = dateObject.getHours() < 12 ? "AM" : "PM";
    return hours + ":" + minutes + ampm;
  }

  render() {
    if (this.props.event){
      if (this.props.event.image_url === "" || this.props.event.image_url === null) {
        this.props.event.image_url =
          "https://cdn.pixabay.com/photo/2016/10/23/17/06/calendar-1763587_1280.png";
      }

      const editPath = "/event/" + this.props.eventId + "/edit";
      const editButton = (this.props.currentUser && this.props.currentUser.id === this.props.event.organizer_id) ?
      <Link to={editPath}><button className="event-display-edit-button">Edit</button></Link> : null;

      const dateTimeString = (this.formatStartDate(this.props.event.start_datetime) === this.formatStartDate(this.props.event.end_datetime)) ?
        <div>
          {this.formatStartDate(this.props.event.start_datetime)}
          <br/>
          {this.formatTime(this.props.event.start_datetime)} - {this.formatTime(this.props.event.end_datetime)}
        </div>
        :
        <div>
          {this.formatStartDate(this.props.event.start_datetime)}, {this.formatTime(this.props.event.start_datetime)}
          <br/>
          {this.formatStartDate(this.props.event.end_datetime)}, {this.formatTime(this.props.event.end_datetime)}
        </div>;

      return (
        <div className="event-display-container">
          <div className="event-display-header">
            <img className="event-display-header-image" src={this.props.event.image_url}></img>
            <div className="event-display-header-details">
              <p className="event-display-header-month">{this.extractStartMon(this.props.event.start_datetime)}</p>
              <p className="event-display-header-day">{this.extractStartDay(this.props.event.start_datetime)}</p>
              <p className="event-display-header-event-name">{this.props.event.event_name}</p>
            </div>
          </div>
          <div className="event-display-buttons">
            <button className="event-display-bookmark-button"></button>
            {editButton}
            <button className="event-display-register-button">Register</button>
          </div>
          <div className="event-display-body">
            <div className="event-display-body-left">
              <p className="event-display-header-label">Description</p>
              <p className="event-display-body-text">{this.props.event.description}</p>
            </div>
            <div className="event-display-body-right">
              <p className="event-display-header-label">Date and Time</p>
              <div className="event-display-body-text">
                {dateTimeString}
              </div>
              <p className="event-display-header-label">Location</p>
              <p className="event-display-body-text">
                {this.props.event.address}
                <br/>
                {this.props.event.city}, {this.props.event.state} {this.props.event.zip}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }

  }


}

export default EventDetail;
