import React from 'react';
import SideMenu from "../layout/SideMenu";
import TopMenu from "../layout/TopMenu";
import IOSBottomBar from "../footer/IOSBottomBar";

export default props => {
    
    return (
    <div className="grid m__site">
        <div className="menu page-header__top">
            <TopMenu/>
        </div>
        <div className="main-content">
            <SideMenu>
                {props.children}
            </SideMenu>
        </div>
        <IOSBottomBar />
    </div>
);
}
