import React from "react";

export default function SignIn() {
  return (
    <div>
      <form className="bg-white shadow-lg mx- my-3 rounded-4">
        <div className="mb-3 ms-5 ">
          <p className="text-center fs-2">Sign In Form</p>
          <label for="exampleInputEmail1" className="form-label mt-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control w-75 "
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3 ms-5">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control w-75"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary ms-5 my-3">
          Submit
        </button>
      </form>
    </div>
  );
}
