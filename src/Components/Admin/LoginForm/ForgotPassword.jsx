import React, { Component } from "react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import axios from "axios";
import { toast } from "react-toastify";
class ForgotPassword extends Component {
  state = { errorMessage: false };

  submitForm = async (e) => {
    e.preventDefault();
    const otpNumber = e.target.elements.otpNumber.value;
    const newPassword = e.target.elements.newPassword.value;

    axios
      .post("https://ambika-kadli.herokuapp.com/api/forgot", {
        adminOtp: otpNumber,
        newPassword: newPassword,
      })
      .then((res) => {
        toast.success("Password Changed!");
        this.props.history.push("/login");
      })
      .catch((error) => {
        if (!error.response.data.resBoolean) {
          this.setState({ errorMessage: true });
        }
      });

    // console.log(result);
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="LoginFormMain"
          style={{ paddingTop: "5em", backgroundColor: "#F2F2F2" }}
        >
          <div
            className="loginFormDiv"
            style={{ backgroundColor: "#fff", height: "auto" }}
          >
            <SectionTitle title="Forgot Password" />

            <form
              className="pt-4 pb-4 pl-4 pr-4 formStyles"
              onSubmit={this.submitForm}
            >
              {this.state.errorMessage && (
                <span className="errorMessage">OTP is Incorrect.</span>
              )}
              <div className="form-group pt-2">
                <label htmlFor="LoginForm">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otpNumber"
                  placeholder="Enter OTP"
                  autoFocus
                />
              </div>
              <div className="form-group pt-2">
                <label htmlFor="LoginForm">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="form-group pt-3 loginButtonDiv">
                <button type="submit" className="btn btn-primary">
                  Update Password
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-4"
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
