import React from 'react';
import { connect } from 'react-redux';

// COMPS
import {Segment, Breadcrumb, Grid} from "semantic-ui-react";
import HomeFourCards from "../common/HomeFourCards";
import HomeThreeCharts from "../common/HomeThreeCharts";
import StreamLine from "../charts/StreamLine";

// Breadcrum
const Breadcrum = () => (
  <div className="wt-box">
    <Breadcrumb size={'mini'}>
      <Breadcrumb.Section active>Dashboard</Breadcrumb.Section>
      {/* <Breadcrumb.Divider />
      <Breadcrumb.Section link>Store</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section> */}
    </Breadcrumb>
  </div>
)

const Home = props => (
  <div className="page-content-wp">
    <Breadcrum />
    <section className="page-content__ct">
      <HomeFourCards />
      <HomeThreeCharts />
      <div className="gcol mb-30">
        <Grid stackable> 
          <Grid.Row>
            <Grid.Column>
              <StreamLine />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
      
    </section>
  </div>
);

export default connect()(Home);
