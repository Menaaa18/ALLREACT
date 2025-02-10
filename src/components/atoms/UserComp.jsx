import React from "react";
import { useNavigate } from "react-router-dom";


function UserComp({ user }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/users/${user.login}`);
      }}
      className="shadow-md ronded-lg p-2 font-semibold"
    >
      <img src={user.avatar_url} className="size-40" alt="">

      </img>
     
      <p> {user.login}</p>
    </div>
  );
}
export default UserComp;
