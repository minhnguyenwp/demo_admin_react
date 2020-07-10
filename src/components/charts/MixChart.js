import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { Card } from "semantic-ui-react";

const initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};




class Graph extends Component {

	componentWillMount(){
		this.setState(initialState);
    }
    
	componentDidMount(){

		var _this = this;

		this.intervalLine = setInterval(function(){
			var oldDataSet = _this.state.datasets[0];
			var newData = [];

			for(var x=0; x< _this.state.labels.length; x++){
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;

			var newState = {
				...initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalLine);
    }
    
	render() {
		return (
			<Line data={this.state} />
		);
	}
}




class MixChart extends Component {

  render() {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header><h3>Animated Line</h3></Card.Header>
                <Card.Meta>Share of holders</Card.Meta>
            </Card.Content> 
            <Card.Content extra>
                <Card.Description>
                    <Graph />
                </Card.Description>
            </Card.Content>    
        </Card>
    );
  }
}

export default MixChart;