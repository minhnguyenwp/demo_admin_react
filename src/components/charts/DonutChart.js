  
import React from 'react';
import {Doughnut } from 'react-chartjs-2';
import { Card } from "semantic-ui-react";

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const DonutChart = () => (
    <Card fluid>
        <Card.Content>
            <Card.Header><h3>Pie</h3></Card.Header>
            <Card.Meta>Share of holders</Card.Meta>
        </Card.Content> 
        <Card.Content extra>
            <Card.Description>
                <Doughnut  data={data} />
            </Card.Description>
        </Card.Content>    
    </Card>
    );
    
export default DonutChart;