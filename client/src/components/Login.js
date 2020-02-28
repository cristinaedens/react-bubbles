import React, {useState} from "react";
import axios from "axios";


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: "Cristina Edens",
    password: "coding101"
  });//This closes useState

  const handleChanges = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  //This closes handleChanges
};
  const handleSubmit = (e) => {
    e.preventDefault();

    axios 
    .post ("http://localhost:5000/api/login", user)
    .then(res => {
      console.log("SUCCESS!!", res.data.payload);
      props.history.push("/bubbles");
    })
    .catch(error => {
      console.log("IT'S NOT WORKING!", error);
    })
  }//This closes the handleSubmit

  return(
  <div className="loginForm">
    <form>
      <div className="usernameContainer">
        <label htmlFor="username">Username</label>
        <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChanges}
        />
      </div>
      <div className="passwordContainer">
        <label htmlFor="password">Password</label>
        <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChanges}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </form>
  </div>//this is the form container
  );//This closes the return

}

export default Login;
