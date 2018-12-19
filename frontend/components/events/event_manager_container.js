import EventManager from './event_manager';
import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import { restrictToCurrentUser } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    events: restrictToCurrentUser(state.entities.events, state.session.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestEvents: (id) => dispatch(requestEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventManager);
