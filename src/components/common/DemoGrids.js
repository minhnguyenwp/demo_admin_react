import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

const DemoGrids = () => (
    <Segment>
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
  
);

export default DemoGrids;