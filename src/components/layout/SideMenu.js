import React, {Component} from 'react';
import { Label, Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";

import TextIcon from "../extension/TextIcon";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import $ from 'jquery';

// COMPS
import { actionCreators as sideAction} from "../../store/SideMenu";


class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);

        const urlPath = window.location.pathname;
        this.state = {
            activeItem: urlPath.split('/')[1] ? urlPath.split('/')[1] : 'dashboard'
        };
    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
        if (this.props.openMobileMenu) { 
            this.props.actions.toggleSideMenu(); 
        }
    };
   
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside(event) {
        let winWidth = $( window ).width(); 
        if (winWidth >= 979) { return; }
        if (!this.props.openMobileMenu) { return; }
       
        if (this.wrapperRef 
            && !this.wrapperRef.current.contains(event.target) 
            && $('.logo-space-menu-item').has(event.target).length === 0) {
           
            this.props.actions.toggleSideMenu();
        }
    }

    getMenu() {
        const {activeItem} = this.state;
        const {smallMenu, openMobileMenu}  = this.props;

        return (
            <div ref={this.wrapperRef}>
            <Menu 
                
                fixed='left' 
                borderless 
                className={(smallMenu ? 'small-side' : '') + (openMobileMenu ? ' open-mb-menu' : '') + ' side side-menu__left'} vertical>
                <Menu.Item 
                    as={Link} 
                    to={'/'} 
                    name='dashboard' 
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}>
                    <TextIcon 
                        
                        name='home'>
                        Dashboard
                        <Label 
                        size={"mini"}
                        color={'violet'}>
                            PRO
                        </Label>
                    </TextIcon>
                   
                </Menu.Item>

                <Menu.Item as={Link} to={'/notifications'} name='notifications'
                           active={activeItem === 'notifications'}
                           onClick={this.handleItemClick}>
                    <TextIcon  name='notifications'>
                        Notifications
                    </TextIcon>
                </Menu.Item>

                <Menu.Item as={Link} to={'/settings'} name='settings' active={activeItem === 'settings'}
                           onClick={this.handleItemClick}>

                    <TextIcon  name='settings'>
                        Settings
                    </TextIcon>
                </Menu.Item>

                <Menu.Item
                    as={Link} to={'/userManagement'}
                    name='userManagement' 
                    active={activeItem === 'userManagement'}
                    onClick={this.handleItemClick}
                    >
                    <TextIcon  name='users'>
                        Users
                    </TextIcon>
                </Menu.Item>
            </Menu>
            </div>
        )
    }

    render() {
        return (
            <div className='parent'>
                <div className={(this.props.smallMenu ? 'small-side ' : '') + 'side'}>
                    {this.getMenu()}
                </div>
                <div className={(this.props.smallMenu ? 'small-content ' : '') + 'mcontent'}>

                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.sideMenu,
    dispatch => {
        return {
            actions: bindActionCreators(Object.assign({}, sideAction), dispatch)
        }}
)(SideMenu);
