import React from "react";
import SignUp from "../../component/signup/SignUp";

export default function CreateUser() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
