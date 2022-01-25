import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserThunk } from "../redux/actions/userThunk";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const [user] = useSelector((state) => [state.user.user]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="NavBars">
        <Link className="Links" to="/home">
          Home
        </Link>
        <Link className="Links" to="/userProfile">
          UserProfile
        </Link>
        <Link className="Links" to="/login">
          Login
        </Link>
        <Link className="Links" to="/collection">
          Collection
        </Link>
        <Link className="Links" to="/search">
          Search
        </Link>
        <Link className="Links" to="/signup">
          Sign Up
        </Link>
      </div>
      <div>{user.username}</div>
      <div>{user.collection_id}</div>
    </Fragment>
  );
}
