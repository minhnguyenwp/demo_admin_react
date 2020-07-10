import React from "react";
import { Menu } from "semantic-ui-react";


const handleItemClick = (e, { name }) => {
    console.log('name', name);
};

const AvatarContent = () => {
    return (
        <Menu secondary vertical>
            <Menu.Item
            name='account'
            onClick={handleItemClick}
            />
            <Menu.Item
            name='settings'
            onClick={handleItemClick}
            />
            <Menu.Item
            name='logout'
            onClick={handleItemClick}
            />
        </Menu>
    );
}

export default AvatarContent;