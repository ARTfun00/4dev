import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header'
import Footer from './components/footer'
import CurrencySimple from './components/StudentsSimple';
import LayoutOne from './components/mainLayout'
import AddTracking from './components/tracking'

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'

const store = configureStore();

class RegisterAutor extends Component {
  render() {
    return (
      <React.Fragemnt>
        <div>autentification</div>
      </React.Fragemnt>
    );
  }
}
class NotFound extends Component {
  render() {
    return (
      <React.Fragemnt>
        <div>Not Found</div>
      </React.Fragemnt>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header/>

            <Switch>
              <Route exact path="/" component={LayoutOne} />
              <Route path="/currency/addTracking" component={AddTracking} />
              <Route path="/autentification" component={RegisterAutor} />
              <Route path="/currency/:id" component={CurrencySimple} />
              <Route component={NotFound} />
            </Switch>

            <Footer></Footer>
          </React.Fragment>    
        </Router>
      </Provider>
    );
  }
}

export default App;
