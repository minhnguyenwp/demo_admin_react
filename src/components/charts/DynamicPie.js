import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import { Card } from "semantic-ui-react";

class DynamicPie extends Component {
	
	componentWillMount() {
        this.setState(this.getState());

        // Interval
		this.intervalPie = setInterval(() => {
			this.setState(this.getState());
		}, 5000);
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalPie);
    }

    getState = () => ({
        labels: [
          'Red',
          'Green',
          'Yellow'
        ],
        datasets: [{
          data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
          backgroundColor: [
          '#CCC',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
    });

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header><h3>Dynamic Pie</h3></Card.Header>
                    <Card.Meta>Share of holders</Card.Meta>
                </Card.Content> 
                <Card.Content extra>
                    <Card.Description>
                        <Pie data={this.state} />
                    </Card.Description>
                </Card.Content>    
            </Card>
        );
    }
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default DynamicPie;