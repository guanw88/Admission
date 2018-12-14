import EventDisplay from './event_display';
import { connect } from 'react-redux';
import { fetchEvents } from "../../actions/event_actions.js"

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    events: state.entities.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestEvents: () => dispatch(requestEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDisplay);
