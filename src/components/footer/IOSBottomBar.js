import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Menu } from "semantic-ui-react";
import TextIcon from "../extension/TextIcon";
import {
    isIOS,
    isMobile
  } from "react-device-detect";

class IOSBottomBar extends Component {

    constructor(props) {
        super(props);

        const urlPath = window.location.pathname;
        this.state = {
            activeItem: urlPath.split('/')[1] ? urlPath.split('/')[1] : 'dashboard'
        };


    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
    }

    render() {
        const {activeItem} = this.state;
        if (isIOS) {
        return (
            <div className="ios-bottom-bar">
                <div className="ios-b__frame">
                <Menu 
                    borderless 
                    >
                    <Menu.Item 
                        as={Link} 
                        to={'/'} 
                        name='dashboard' 
                        active={activeItem === 'dashboard'}
                        onClick={this.handleItemClick}>
                        <TextIcon 
                            hideText={true}
                            name='home'>
                            Dashboard
                        </TextIcon>
                    
                    </Menu.Item>

                    <Menu.Item as={Link} to={'/notifications'} name='notifications'
                            active={activeItem === 'notifications'}
                            onClick={this.handleItemClick}>
                        <TextIcon 
                            hideText={true}
                            name='notifications'>
                            Notifications
                        </TextIcon>
                    </Menu.Item>

                    <Menu.Item as={Link} to={'/settings'} name='settings' active={activeItem === 'settings'}
                            onClick={this.handleItemClick}>
                        <TextIcon 
                            hideText={true}
                            name='settings'>
                            Settings
                        </TextIcon>
                    </Menu.Item>

                    <Menu.Item
                        as={Link} to={'/userManagement'}
                        name='userManagement' 
                        active={activeItem === 'userManagement'}
                        onClick={this.handleItemClick}
                        >
                        <TextIcon 
                            name='users'
                            hideText={true}>
                            Users
                        </TextIcon>
                    </Menu.Item>
                </Menu>
                </div>
            </div>          
        );
        } else {
            return '';
        }
    }
}

export default IOSBottomBar;