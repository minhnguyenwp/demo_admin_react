import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import color from 'rcolor';
import { Card } from "semantic-ui-react";

const initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
		label: 'My First dataset',
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132,1)',
		borderWidth: 1,
		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		hoverBorderColor: 'rgba(255,99,132,1)',
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

		this.intervalL = setInterval(function(){
			var oldDataSet = _this.state.datasets[0];
			var newData = [];

			for(var x=0; x< _this.state.labels.length; x++){
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;
			newDataSet.backgroundColor = color();
			newDataSet.borderColor = color();
			newDataSet.hoverBackgroundColor = color();
			newDataSet.hoverBorderColor = color();

			var newState = {
				...initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 8000);
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalL);
    }

	render() {
		return (
			<Bar data={this.state} />
		);
	}
}





class CrazyLine extends Component {
  render() {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header><h3>Colorful Bars</h3></Card.Header>
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

export default CrazyLine;