import { connect } from 'react-redux';
import Greeting from './greeting';
import {signup, logout} from '../../actions/session_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.entities.users[state.session.id]
  });
}

const mapDispatchToProps = dispatch => {

  return ({
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)