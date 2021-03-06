import BookingContainer from '../containers/admin/BookingContainer'
import DashboardContainer from '../containers/admin/DashboardContainer';
import StaffContainer from '../containers/admin/StaffContainer';
// Hotel Routes
import HotelDashboardContainer from '../containers/hotel/DashboardContainer';
import HotelBookingContainer from '../containers/hotel/BookingContainer';

export const adminRoutes = [
    { path: '/dashboard', exact: true, component: DashboardContainer },
    { path: '/bookings', component: BookingContainer },
    { path: '/staff', component: StaffContainer },
    // { path: '/contactDetails/:id', component: ContactDetailsComponent },
];

export const hotelRoutes = [
    { path: '/dashboard', exact: true, component: HotelDashboardContainer },
    { path: '/bookings', component: HotelBookingContainer },
    // { path: '/booking/:id', component: HotelBookingDetailsComponent },
];
