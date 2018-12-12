import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session.errors,
    formtype: "signup"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
