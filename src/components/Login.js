import React from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";

function Login() {
  const responseGoogle = res => {
    console.log(res);
  };
  const responseFail = err => {
    console.log(err);
  };

  return (
    <div>
      <GoogleLogin
        clientId={
          "2030328987-ahgprrggrfolvk9vs7edrcq64e8avpg5.apps.googleusercontent.com"
        }
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseFail}
      />
    </div>
  );
}

export default Login;
