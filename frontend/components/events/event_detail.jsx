import React from 'react';
import { Link } from 'react-router-dom';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestEvent(this.props.eventId);
  }

//   address: "825 Battery Street"
// city: "San Francisco"
// description: "SUPER LONG PARTY"
// end_datetime: "2018-12-17T00:00:00.000Z"
// event_date: "2018-12-15"
// event_name: "Event from Form"
// id: 7
// image_url: ""
// num_tickets_available: 5
// private_event_yn: false
// start_datetime: "2018-12-15T12:00:00.000Z"
// state: "CA"
// zip: "94111"


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
    const ampm = hours > 0 && hours < 12 ? "AM" : "PM";
    return hours + ":" + minutes + ampm;
  }

  render() {
    if (this.props.event){
      if (this.props.event.image_url === "") {
        this.props.event.image_url =
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50140725%2F18096924889%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C1646%2C823&s=dfdbf8b7aafb928a581debc1a33c2da7";
      }


      const editPath = "/event/" + this.props.eventId + "/edit";
      const editButton = (this.props.currentUser && this.props.currentUser.id === this.props.event.organizer_id) ?
      <Link to={editPath}><button className="event-display-edit-button">Edit</button></Link> : null;

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
              <p className="event-display-body-text">
                {this.formatStartDate(this.props.event.start_datetime)}
                <br/>
                {this.formatTime(this.props.event.start_datetime)} - {this.formatTime(this.props.event.end_datetime)}
              </p>
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
