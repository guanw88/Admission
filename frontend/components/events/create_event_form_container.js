import EventForm from './event_form';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    event: {
      "event_date": "2018-12-13",
      "event_name": "Pre-populated Event",
      "num_tickets_available": null,
      "start_datetime": "",
      "start_date": "2018-12-13",
      "start_time": "12:00",
      "end_datetime": "",
      "end_date": "2018-12-14",
      "end_time": "12:00",
      "address": "825 Battery St.",
      "city": "San Francisco",
      "state": "CA",
      "zip": "91234",
      "description": "Description goes here.",
      "image_url": null,
      "private_event_yn": "false",
      "organizer_id": state.session.id,
      "event_type": "initial",
      "event_topic": "initial"
    },
    formType: "Create"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (event) => dispatch(createEvent(event))
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm));
