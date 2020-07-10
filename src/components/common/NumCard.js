import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
// COMPS
import { Card, Image} from "semantic-ui-react";


class NumCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberS: 10,
            updates: 0
        };
    }

    componentDidMount() {
        this.setState({numberS: this.props.data.num});
        // Delay time 
        this.interval = setInterval(() => this.update(), this.props.data.delayTime);
        
        //this.interval = setInterval(() => this.mountUnmount(), 11000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    update() {
        const {updates} = this.state;
        const { data }  = this.props;

        this.setState({
            numberS: this.getRandomInt(data.startNum, data.endNum),
            updates: updates + 1
        });
    }
    
    getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);


    // #RENDER
    render() {
        const { data } = this.props;
        const { numberS } = this.state;

        return (
            <Card fluid className={"num-card " + data.classColor}>
                <Card.Content>
                    <Card.Header>
        
                        {/* {data.num} */}
                        <span className="num-card__sign">#</span>
                        <AnimatedNumber
                            style={{
                                transition: '0.8s ease-out',
                                transitionProperty:
                                    'background-color, color'
                            }}
                            stepPrecision={0}
                            value={numberS}
                            formatValue={n => `${n}`}
                        />
                    </Card.Header>
                    <Card.Description>
                        {data.desc}
                    </Card.Description>
                    <Image
                        className="num-card__img"
                        alt="Member"
                        src={data.image}
                    />
                </Card.Content>
            </Card>
        );
    }
}

export default NumCard;