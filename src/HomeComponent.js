import React from 'react';
import {
    BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import * as actions from './actions/loginAction';

const allRoutes = [
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent },

];

class HomeContainer extends React.Component {
    componentDidMount() {
        const { isLoggedIn, history } = this.props;
        if (!isLoggedIn) {
            history.push('/login');
        }
    }

    logout = () => {
        this.props.actions.LogoutRequestUser();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                Home component
        <div>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <button onClick={this.logout}>Logout</button>
                </div>
                <div>
                    {allRoutes.map(prop => <Route path={prop.path} component={prop.component} />)}
                </div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
