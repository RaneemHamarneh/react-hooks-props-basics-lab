import React from "react";
import Links from "./Links";

function About(props) {
  const bio = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio?.length > 0 &&
        <p>{bio}</p>
      } 
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github ={props.github} linkedin={props.linkedin}/>
    </div>
  );
}
//    if (isLoggedIn) {
//   button = <LogoutButton onClick={this.handleLogoutClick} />;
// } else {
//   button = <LoginButton onClick={this.handleLoginClick} />;
// }
export default About;
