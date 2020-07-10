import React from 'react';
import { Route } from 'react-router';

// COMPS
import Layout from '.././layout/Layout';
import Home from '.././pages/Home';
import UserManagement from '.././pages/UserManagement';
import Notifications from '.././pages/Notifications';
import Settings from '.././pages/Settings';
// CSS
import '../../styles/main.scss';

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/notifications" component={Notifications} />
    <Route path="/settings" component={Settings} />
  </Layout>
);
