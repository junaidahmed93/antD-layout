import React from 'react';
import {
  BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';

const allRoutes = [
  // { path: "/home", component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contact', component: ContactComponent },

];

class HomeContainer extends React.Component {
  componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (!isLoggedIn) {
    //   history.push('/login');
    }
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

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
