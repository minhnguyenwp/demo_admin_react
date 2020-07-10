import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import { Card } from "semantic-ui-react";

const data = {
  datasets: [
    {
      label: "Cryptocurrency - RXP",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
     
      cubicInterpolationMode: 'monotone',
      data: []
    }
  ]
};

function randomScalingFactor() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}
const options = {
  scales: {
    xAxes: [
      {
        type: "realtime",
        realtime: {
          onRefresh: function() {
            data.datasets[0].data.push({
              x: Date.now(),
              y: randomScalingFactor()
            });
          },
          delay: 2000
        }
      }
    ]
  },
    tooltips: {
        mode: 'nearest',
        intersect: false
    },
    hover: {
        mode: 'nearest',
        intersect: false
    }
};

class StreamLine extends Component {
  render() {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header><h3>Streaming Line</h3></Card.Header>
                <Card.Meta>RXP</Card.Meta>
            </Card.Content> 
            <Card.Content extra>
                <Card.Description>
                    <Line data={data} options={options} />
                </Card.Description>
            </Card.Content>    
        </Card>
    );
  }
}

export default StreamLine;
