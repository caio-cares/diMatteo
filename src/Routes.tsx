import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SplashView from './Views/Splash/';
import BookingView from './Views/Booking/';
import GuestsView from './Views/Guests/';
import DateView from './Views/Date/';
import CompleteView from './Views/Complete/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SplashView} />
      <Route path="/booking" exact component={BookingView} />
      <Route path="/booking/date" exact component={DateView} />
      <Route path="/booking/guests" exact component={GuestsView} />
      <Route path="/booking/complete" exact component={CompleteView} />
    </BrowserRouter>
  );
};

export default Routes;