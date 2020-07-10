import React, {Component} from 'react';
import PropTypes from 'prop-types';
// COMPS
import { IconDashboard, IconUsers, IconSetting, IconLogout, IconBell } from '../common/icons';


export default class TextIcon extends Component {

    style = {
        alignSelf: 'center',
        paddingLeft: '4px'
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        hideText: PropTypes.bool,
        color: PropTypes.string
    };

    render() {
        return (
            <div style={{whiteSpace: 'nowrap', display: 'inline-flex'}}>
                {/* <Icon size='large'
                      color={this.props.color}
                      name={this.props.name}/> */}
                <span className="ico ico-medium grey mr-10 ml-5">
                    {(this.props.name === "home") &&
                        <IconDashboard />
                    }
                    {(this.props.name === "notifications") &&
                        <IconBell />
                    }
                    {(this.props.name === "settings") &&
                        <IconSetting />
                    }
                    {(this.props.name === "users") &&
                        <IconUsers />
                    }

                    {(this.props.name === "logout") &&
                        <IconLogout />
                    }
                    
                </span>
                <div
                    className="menu-item__txt" 
                    style={this.style} 
                    hidden={this.props.hideText}
                    >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
