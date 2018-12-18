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

  parseEvent(event) {
    event.start_time = event.start_datetime.slice(11,19);
    event.end_date= event.end_datetime.slice(0,10);
    event.end_time = event.end_datetime.slice(11,19);
  }

  handleDelete(e) {
    console.log("Deleting item...", this.props.eventId);
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
