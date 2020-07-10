import React, {Component} from 'react';
import {Icon,
        Label, 
        Menu,  
       } from 'semantic-ui-react';
import {actionCreators as sideAction} from "../../store/SideMenu";
//import {actionCreators as searchAction} from "../../store/SearchStore";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { IconBell } from '../common/icons';
import  Avatar  from '../header/Avatar';

class TopMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // doSearch(event) {
  //     this.props.actions.search(event.target.value);  
  // }

  render() {
    return (
      <Menu fixed="top" className="top-menu ">
        <Menu.Item className="logo-space-menu-item">
          <div className="display-inline logo-space">
            <Menu.Item
              className="no-border call-sidebar-menu"
              onClick={this.props.actions.toggleSideMenu}
            >
              <Icon name="bars" />
            </Menu.Item>
            <p className="logo__txt">My<b>Admin</b></p>
          </div>
        </Menu.Item>

        

        {/* <Menu.Item className="no-border drop-left-padding">
          <Input
            className="icon"
            icon="search"
            placeholder="Search..."
            onChange={this.doSearch.bind(this)}
          />
        </Menu.Item> */}

        <Menu.Menu position="right">
          <Menu.Item className="no-border" position="right">
            <a href="javascript:;" className="menu__item c-icon">
              <IconBell />
              <Label
                className="label-on-corner"
                size={"mini"}
                floating
                circular
                color={'orange'}
              >
                24
              </Label>
            </a>
            
          </Menu.Item>
          <Menu.Item className="no-border" position="right">
              <Avatar data={'Ming Ng'}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default connect(
    state => state.sideMenu,
     dispatch => {
        return {
            actions: bindActionCreators(Object.assign({}, sideAction), dispatch)
        }}
)(TopMenu);
