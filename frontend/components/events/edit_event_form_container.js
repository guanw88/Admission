import React from 'react';
import EventForm from './event_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestEvent, updateEvent, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    event: state.entities.events[ownProps.match.params.id],
    eventId: ownProps.match.params.id,
    formType: "Edit"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestEvent: (id) => dispatch(requestEvent(id)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    action: (event) => dispatch(updateEvent(event))
  };
};

class EditEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestEvent(this.props.eventId);
  }

  formatDate (datetime) {
    const dateObject = new Date(datetime);
    const year = dateObject.getYear() + 1900;
    const month = dateObject.getMonth() + 1 < 10 ? "0" + dateObject.getMonth() + 1 : dateObject.getMonth() + 1;
    const date = dateObject.getDate() < 10 ? "0" + dateObject.getDate() : dateObject.getDate();
    return year + "-" + month + "-" + date;
  }

  formatTime (datetime) {
    const dateObject = new Date(datetime);
    let hours;
    if (dateObject.getHours() < 10) {
      hours = "0" + dateObject.getHours();
    } else {
      hours = dateObject.getHours();
    }
    let minutes;
    if (dateObject.getMinutes() < 10) {
      minutes = "0" + dateObject.getMinutes();
    } else {
      minutes = dateObject.getMinutes();
    }
    let seconds;
    if (dateObject.getSeconds() < 10) {
      seconds = "0" + dateObject.getSeconds();
    } else {
      seconds = dateObject.getSeconds();
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  createDateAsUTC(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  }

  convertDateToUTC(date) {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  }

  parseEvent(event) {
    event.start_time = this.formatTime(event.start_datetime);
    event.end_date= this.formatDate(event.end_datetime);
    event.end_time = this.formatTime(event.end_datetime);
    event.event_type = "initial";
    event.event_topic = "initial";
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(this.props.eventId);
    this.props.history.push('/');
  }

  render() {
    const { action, formType, event, history } = this.props;
    if (this.props.event) {
      this.parseEvent(this.props.event);
      return (
        <EventForm
        action={action}
        history={history}
        handleDelete={this.handleDelete}
        formType={formType}
        event={event} />
      );
    } else {
      return null;
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEventForm));
