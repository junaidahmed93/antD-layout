import React from 'react';
import {
    BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import AboutComponent from './AboutComponent';
// import ContactComponent from './ContactComponent';
// import ContactDetailsComponent from './ContactDetailsComponent';
import * as actions from '../actions/loginAction';
// import HotelHomeComponent from './components/hotel/HotelHomeComponent';
// import HotelBookingsComponent from './components/hotel/HotelBookingsComponent';
// import HotelBookingDetailsComponent from './components/hotel/HotelBookingDetailsComponent';
import HotelMain from './hotel/HotelMain';
import AdminMain from './admin/AdminMain';
import { adminRoutes, hotelRoutes } from '../routes/index';

// const adminRoutes = [
//     { path: '/about', component: AboutComponent },
//     { path: '/contact', component: ContactComponent },
//     { path: '/contactDetails/:id', component: ContactDetailsComponent },
// ];

// const hotelRoutes = [
//     { path: '/hotelhome', component: HotelHomeComponent },
//     { path: '/bookings', component: HotelBookingsComponent },
//     { path: '/booking/:id', component: HotelBookingDetailsComponent },
// ];

class HomeContainer extends React.Component {

    constructor(props) {
        super(props)
        if (this.props.userType === 'admin') {
            this.routes = adminRoutes
        }
        else {
            this.routes = hotelRoutes
        }

    }
    componentDidMount() {
        const { isLoggedIn, history } = this.props;
        if (!isLoggedIn) {
            history.push('/login');
        }
        else{
            history.push('/dashboard')
        }
    }

    logout = () => {
        this.props.actions.LogoutRequestUser();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                {this.props.userType === 'admin' ? <AdminMain {...this.props} routes={this.routes} /> : <HotelMain {...this.props} routes={this.routes} />}
            </div>
        )
    }

    // render() {
    //     return (
    //         <div>
    //             Home component
    //     <div>
    //                 {this.props.userType === 'admin' ?
    //                     // <App />
    //                     <div>

    //                         <ul>
    //                             <li><Link to="/about">About Us</Link></li>
    //                             <li><Link to="/contact">Contact Us</Link></li>
    //                         </ul>
    //                         <button onClick={this.logout}>Logout</button>
    //                     </div> 
    //                     :
    //                     <div>

    //                         <ul>
    //                             <li><Link to="/hotelhome">Hotel Home </Link></li>
    //                             <li><Link to="/bookings">Hotel Bookins</Link></li>
    //                         </ul>
    //                         <button onClick={this.logout}>Logout</button>
    //                     </div>
    //                 }
    //             </div>
    //             <div>
    //                 {this.routes.map(prop => <Route path={prop.path} component={prop.component} />)}
    //             </div>

    //         </div>
    //     );
    // }
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        userType: state.loginReducer.userType,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
