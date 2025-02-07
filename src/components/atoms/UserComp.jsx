import React from "react";

function UserComp({user}) {
  return (
    <div  className="shadow-md rounded-lg p-2 font-semibold">
      <p>
        {" "}
        Name: {user.name.title} {user.name.first} {user.name.last}{" "}
      </p>
      <p>
        {" "}
        House Details: {user.location.street.number} {user.location.street.name}{" "}
      </p>
      <p>
        {" "}
        {user.location.city}
        {user.location.state} {user.location.country}
        {user.location.postcode} {user.location.coordinates.latitude}
      </p>
      <img src={user.picture.large} alt="description" />
    </div>
  );
}

export default UserComp;
