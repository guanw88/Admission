import EventDetail from './event_detail';
import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    event: state.entities.events[ownProps.match.params.id],
    eventId: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestEvent: (id) => dispatch(requestEvent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
