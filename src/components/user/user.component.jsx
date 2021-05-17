import React, { useState } from "react";
import Card from "../card/card.component";

import useFetchArrayWithUrl from "../../effects/use-fetch.effect";

const User = ({ userId }) => {
  const user = useFetchArrayWithUrl(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default User;
