import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HomePageContainer from "./homepage/home_page_container";
import EventDetailContainer from "./events/event_detail_container";
import CreateEventFormContainer from "./events/create_event_form_container";
import EditEventFormContainer from "./events/edit_event_form_container";

// Need to update routes to protected routes


const App = () => {
  const NoMatch = () => {
    return <Redirect to={{pathname: "/"}}/>
  }

  return (
    <div>
      <header>
        <a href="/"><h1 id="logo">eventful!</h1></a>
        <GreetingContainer />
      </header>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/event/new" component={CreateEventFormContainer} />
        <Route exact path="/event/:id/edit" component={EditEventFormContainer} />
        <Route exact path="/event/:id" component={EventDetailContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
};

export default App;
