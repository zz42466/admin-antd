import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Page from './../components/page';
import Login from './../components/login/Login';

import Test  from './../components/test/test';
import Test2  from './../components/test/test2';



class ZzRouter extends Component {
  checkLogin = () => {
    let loginDeadline = localStorage.getItem('login_deadline');
    if (loginDeadline && loginDeadline > (new Date()).getTime()) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.location.pathname === '/login') {
      return <Login />
    }
    // if (!this.checkLogin()) {
    //   return <Redirect to='/login' />;
    // }
    return <Page>
          <Switch>
            <Route path="/" exact component={Test} />
            <Route path="/test1" exact component={Test} />
            <Route path="/test2" exact component={Test2} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Page>
  }
}

export default withRouter(ZzRouter);
