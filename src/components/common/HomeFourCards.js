import React from 'react';

// COMPS
import { Grid } from "semantic-ui-react";
import NumCard from  "./NumCard";

const cardJson = [
  {
    id: 1,
    num: 1256,
    desc: "Members are online",
    image: "./images/ico_team.png",
    classColor: 'num-card__dblue',
    startNum: 10,
    endNum: 2000,
    delayTime: 1000
  },
  {
    id: 2,
    num: 135643,
    desc: "Total account payable",
    image: "./images/ico_money.png",
    classColor: 'num-card__lblue',
    startNum: 1000,
    endNum: 5000,
    delayTime: 6000
  },
  {
    id: 3,
    num: 5600,
    desc: "Products in stock",
    image: "./images/ico_boxes.png",
    classColor: 'num-card__yellow',
    startNum: 3000,
    endNum: 40000,
    delayTime: 3000
  },
  {
    id: 4,
    num: 12246,
    desc: "New comments",
    image: "./images/ico_comment.png",
    classColor: 'num-card__orange',
    startNum: 300,
    endNum: 999,
    delayTime: 4000
  }

];
function HomeFourCards() {
  return (
        <div className="gcol mb-30">
            <Grid doubling stackable columns={4}> 
            <Grid.Row>
              {cardJson.map(item => (
                <Grid.Column key={item.id}>
                  <NumCard data={item} />
                </Grid.Column>
              ))}
            </Grid.Row>
            </Grid>
        </div>
  );
}

export default HomeFourCards;