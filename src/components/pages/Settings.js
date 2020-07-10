import React from 'react';
import { Card, Icon, Image, Breadcrumb} from 'semantic-ui-react';

// COMPS
import DemoCards from '../common/DemoCards';
import DemoGrids from '../common/DemoGrids';

// Style
import 'semantic-ui-css/semantic.min.css';

// Breadcrum
const Breadcrum = () => (
    <div className="wt-box">
      <Breadcrumb size={'mini'}>

        <Breadcrumb.Section href="/">Dashboard</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Settings</Breadcrumb.Section>
       
      </Breadcrumb>
    </div>
  )

const Settings = props => (
    <div className="page-content-wp">
        <Breadcrum />
        <section className="page-content__ct">
            <Card>
                <Image src='https://semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href="#">
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
            
            <div className="gcol mb-30">
                <DemoCards />
            </div>
            
            <div className="gcol mb-30">
                <DemoGrids />
            </div>
            
        </section>
    </div>
    
);

export default Settings;
