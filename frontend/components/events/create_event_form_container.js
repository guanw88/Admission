import EventForm from './event_form';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    formType: "Create"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
