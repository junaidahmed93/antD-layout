import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as actions from './actions/loginAction';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/home');
        }
    }

    login = () => {
        const { history } = this.props;
        this.props.actions.LoginRequest();
        history.push('/home');
    }

    render() {
        return (
            <div>
                Login container
          <button onClick={this.login}>Login Button</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
