import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getUserThunk } from "../redux/actions/userThunk";
import { useSelector, useDispatch } from "react-redux";

export default function SignUp(props) {
  const [user, setUser] = useState({ userName: "", email: "", password: "" });
  //const [userName, setUserName] = useState("")
  //const [email, setEmail]=useState("")
  //cosnt [password, setPassword]=useState("")
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const handleUserNameChange = (e) => {
    const updatedUser = { ...user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;
    setUser(updatedUser);
    //setUserName(inputValue);
  };

  const handleEmailChange = (e) => {
    const updatedUser = { ...user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;
    setUser(updatedUser);
    console.log(updatedUser);
    //setEmail(inputValue);
  };

  const handlePasswordChange = (e) => {
    const updatedUser = { ...user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;
    setUser(updatedUser);
    //setUserName(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = user.userName;
    let email = user.email;
    let password = user.password;
    //let collection_Id = "";
    try {
      const body = { userName, email, password };
      const response = await fetch("https://tcgdex.herokuapp.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const body1 = await response.json();
      console.log(body1);

      dispatch(getUserThunk(email));
      setRedirect(true);

      //window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    // try {
    //   //const body = { email };
    //   const response = await fetch(
    //     `http://localhost:5000/users/${user.email}`,
    //     {
    //       method: "GET",
    //       headers: { "Content-Type": "application/json" },
    //       //body: JSON.stringify(body),
    //     }
    //   );
    //   const userData = await response.json();
    //   console.log(response);
    //   //console.log
    //   props.setCollectionId(userData.collection_id);
    //   props.mockLogin(user);
    //
    // } catch (err) {
    //   console.error(err.message);
    // }
  };

  if (redirect) {
    return <Navigate to="/userprofile" />;
  }

  return (
    <Fragment>
      <div className="NavBars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 1024 1024"
          fill="currentColor"
        >
          <path
            strokeWidth="1"
            d="M 512.00,96.80
           C 304.28,96.94 132.17,249.33 101.24,448.41
             101.24,448.41 312.51,448.80 312.51,448.80
             339.50,364.37 418.60,303.25 512.00,303.20
             605.25,303.31 684.24,364.33 711.33,448.61
             711.33,448.61 922.53,448.80 922.53,448.80
             891.82,249.60 719.75,97.06 512.00,96.80
             512.00,96.80 512.00,96.80 512.00,96.80 Z
           M 512.00,376.80
           C 436.89,376.80 376.00,437.69 376.00,512.80
             376.00,587.91 436.89,648.80 512.00,648.80
             512.00,648.80 512.00,648.80 512.00,648.80
             587.11,648.80 648.00,587.91 648.00,512.80
             648.00,512.80 648.00,512.80 648.00,512.80
             648.00,437.69 587.11,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80 Z
           M 101.47,576.80
           C 132.18,776.00 304.25,928.54 512.00,928.80
             719.72,928.66 891.83,776.27 922.76,577.19
             922.76,577.19 711.49,576.80 711.49,576.80
             684.50,661.23 605.40,722.35 512.00,722.40
             418.75,722.29 339.76,661.27 312.67,576.99
             312.67,576.99 101.47,576.80 101.47,576.80
             101.47,576.80 101.47,576.80 101.47,576.80 Z"
          />
        </svg>
        <Link className="Links" to="/home">
          Home
        </Link>
        <Link className="Links" to="/login">
          Login
        </Link>
        <Link className="Links" to="/userProfile">
          UserProfile
        </Link>
        <Link className="Links" to="/search">
          Search
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            onChange={handleUserNameChange}
            value={user.userName}
          />
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleEmailChange}
            value={user.email}
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={user.password}
          />
        </div>

        <br />
        <br />
        <button>Sign Up</button>
      </form>
      <div className="image1">
        <img
          src="https://www.freepnglogos.com/uploads/pokemon-png/ash-pokemon-png-file-26.png"
          width="200"
          alt="ash pokemon png file"
        />
      </div>
      <br />
      <br />
    </Fragment>
  );
}
