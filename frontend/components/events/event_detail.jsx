import React from 'react';
import { Link } from 'react-router-dom';
import TicketPurchaseModal from '../tickets/ticket_purchase_modal';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
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

      const addressQuery = "https://www.google.com/maps/embed/v1/place?key=" + window.googleAPIKey + "&q="
        + this.props.event.address.split(" ").join("+") + ",+" + this.props.event.city + ",+"
        + this.props.event.state + "+" + this.props.event.zip;

      const googleMap =
        <iframe
          style={{width: "100%", height: "100%", frameBorder: "0"}}
          src={addressQuery}>
        </iframe>;

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
            <button onClick={this.openModal} className="event-display-register-button">Register</button>
          </div>
          <div className="event-display-body">
            <div className="event-display-body-left">
              <p className="event-display-header-label">Description</p>
              <p className="event-display-body-text">{this.props.event.description}</p>
            </div>
            <div className="event-display-body-right">
              <div className="event-display-detail-container">
                <p className="event-display-header-label">Date and Time</p>
                <div className="event-display-body-text">
                  {dateTimeString}
                </div>
              </div>
              <div className="event-display-detail-container">
                <p className="event-display-header-label">Location</p>
                <p className="event-display-body-text">
                  {this.props.event.address}
                  <br/>
                  {this.props.event.city}, {this.props.event.state} {this.props.event.zip}
                </p>
              </div>
            </div>
          </div>
          <div className="event-display-map">
            {googleMap}
          </div>
          <TicketPurchaseModal loggedIn={Boolean(this.props.currentUser)} isOpen={this.state.isModalOpen} onClose={this.closeModal} />
        </div>
      );
    } else {
      return null;
    }

  }


}

export default EventDetail;
