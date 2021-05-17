import React from "react";
import { connect } from "react-redux";
import Card from "../card/card.component";

import { searchUser } from "../../redux/user/user.actions";
import UserCard from "../user-card/user-card.component";

const User = ({ currentUser, searchUser }) => {
  return (
    <Card>
      <input
        type="search"
        onChange={(event) => {
          searchUser(event.target.value);
        }}
      />
      {currentUser ? (
        currentUser.map((user) => <UserCard currentUser={user} key={user.id} />)
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  searchUser: (queryString) => dispatch(searchUser(queryString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
