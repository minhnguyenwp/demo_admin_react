import React from 'react';

// COMPS
import { Grid } from "semantic-ui-react";
import CrazyLine from "../charts/CrazyLine";
import DynamicPie from "../charts/DynamicPie";
import MixChart from "../charts/MixChart";

function HomeThreeCharts() {
    return (
        <div className="gcol mb-30">
            <Grid stackable columns={3}> 
            <Grid.Row>
           
                <Grid.Column>
                    <DynamicPie />
                </Grid.Column>

                <Grid.Column>
                   <CrazyLine />
                </Grid.Column>

                <Grid.Column>
                   <MixChart />
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    );
}
  
  export default HomeThreeCharts;