import React from 'react';
import { Card, Icon, Image, Breadcrumb} from 'semantic-ui-react';

// COMPS
import DemoTable from '../common/DemoTable';

// Style
import 'semantic-ui-css/semantic.min.css';

// Breadcrum
const Breadcrum = () => (
    <div className="wt-box">
      <Breadcrumb size={'mini'}>

        <Breadcrumb.Section href="/">Dashboard</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Notifications</Breadcrumb.Section>
       
      </Breadcrumb>
    </div>
  )

const Notifications = props => (
    <div className="page-content-wp">
        <Breadcrum />
        <section className="page-content__ct">
            <DemoTable />
        </section>
    </div>
    
);

export default Notifications;
