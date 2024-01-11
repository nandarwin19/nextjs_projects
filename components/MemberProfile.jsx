import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";

const MemberProfile = async () => {
  const user = await currentUser();
  // console.log(user);
  // console.log(userId);

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <p className="text-sm">{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
