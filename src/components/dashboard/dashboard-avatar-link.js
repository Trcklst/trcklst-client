import React from "react";
import UserAvatar from "../user/user-avatar";

function DashboardAvatarLink({ user }) {
  return (
    <span>
      <UserAvatar src={user.avatar} />
      {user.username}
    </span>
  );
}

export default DashboardAvatarLink;
