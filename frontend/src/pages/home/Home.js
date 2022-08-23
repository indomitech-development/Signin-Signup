import React from "react";
import SignIn from "../../component/signin/SignIn";
import SignUp from "../../component/signup/SignUp";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5 mx-auto" style={{ marginTop: "10%" }}>
          <SignIn />
        </div>
        <div className="col-sm-5">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
