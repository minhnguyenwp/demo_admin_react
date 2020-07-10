import React from "react";
import { Popup, Image } from "semantic-ui-react";
// COMPS
import AvatarContent from "./AvatarContent";

export default function Avatar({data}) {

    return (
      <Popup
        hoverable
        trigger={<a href="javascript:;" className="display-inline profile__link">
            <Image
                circular
                size={"mini"}
                src="./images/avatar.jpg"
            />
            {data}
        </a>}
        position='bottom right'
        size="small"
      >
        <AvatarContent />
      </Popup>
    );
}
