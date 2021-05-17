import React from "react";

const UserCard = ({ currentUser }) => {
  return (
    <div>
      <h3>{currentUser.name}</h3>
      <h3> {currentUser.username} </h3>
      <h3> {currentUser.email} </h3>
    </div>
  );
};

export default UserCard;
