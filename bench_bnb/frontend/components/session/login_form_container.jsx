import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return({
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);