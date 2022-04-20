import "./Register.css";
import React, { useState } from "react";
import users from "../Users.js";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        let isValid = true;
        let flag = false;
        if (userName.length < 2) {
            document.getElementById("ValidateUsername").innerHTML = "Username too short(needs to be 2 or more letters)";
            isValid = false;
        } else {
            document.getElementById("ValidateUsername").innerHTML = "";
        }
        if (displayName.length < 2) {
            document.getElementById("ValidateDisplayName").innerHTML =
                "Display name too short(needs to be 2 or more letters)";
            isValid = false;
        } else {
            document.getElementById("ValidateDisplayName").innerHTML = "";
        }
        if (password.length < 6 || password.length > 14) {
            document.getElementById("ValidatePassword").innerHTML = "Password needs to be 6-14 letters";
            isValid = false;
        } else {
            document.getElementById("ValidatePassword").innerHTML = "";
        }
        if (password !== confirmPassword) {
            document.getElementById("ValidateConfirmPassword").innerHTML = "Passwords do not match";
            isValid = false;
        } else {
            document.getElementById("ValidateConfirmPassword").innerHTML = "";
        }
        if (isValid === true) {
            document.getElementById("registered").innerHTML = "";
            for (var i in users) {
                if (users[i].username === userName) {
                    flag = true;
                    break;
                }
            }
        }
        console.log(flag);
        if (flag) {
            document.getElementById("registered").innerHTML = "Username already exists, please pick a different one";
        } else {
            console.log("im here");
            navigate("/register");
        }
    };

    const handleClear = () => {
        setUserName("");
        setDisplayName("");
        setPassword("");
        setConfirmPassword("");
    };

    // userName={userName} displayName = {displayName} password = {password} confirmPassword = {confirmPassword}

    return (
        <form name="MyForm">
            <div className="field-name d-grid gap-0.8 central-frame">
                <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label headline">
                        Welcome To Brawlhalla
                    </label>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">
                                Username
                            </label>
                            <br />
                        </div>
                        <div className="col-sm-9">
                            <label
                                htmlFor="exampleFormControlInput1"
                                id="ValidateUsername"
                                className="form-label validation-label"
                            ></label>
                            <br />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={userName}
                        placeholder="My Username"
                        onChange={(e) => setUserName(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">
                                Display Name
                            </label>
                            <br />
                        </div>
                        <div className="col-sm-9">
                            <label
                                htmlFor="exampleFormControlInput1"
                                id="ValidateDisplayName"
                                className="form-label validation-label"
                            ></label>
                            <br />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="displayname"
                        value={displayName}
                        placeholder="My Display Name"
                        onChange={(e) => setDisplayName(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">
                                Password
                            </label>
                            <br />
                        </div>
                        <div className="col-sm-9">
                            <label
                                htmlFor="exampleFormControlInput1"
                                id="ValidatePassword"
                                className="form-label validation-label"
                            ></label>
                            <br />
                        </div>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        id="psw"
                        value={password}
                        rows="3"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">
                                Confirm Password
                            </label>
                            <br />
                        </div>
                        <div className="col-sm-9">
                            <label
                                htmlFor="exampleFormControlInput1"
                                id="ValidateConfirmPassword"
                                className="form-label validation-label"
                            ></label>
                            <br />
                        </div>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        id="conf"
                        value={confirmPassword}
                        rows="3"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-link btn-sm" onClick={() => navigate("/login")}>
                            Already registered? log in here
                        </button>
                    </div>
                    <div className="col-sm-7">
                        <label
                            htmlFor="exampleFormControlInput1"
                            id="registered"
                            className="form-label validation-label"
                        ></label>
                    </div>
                </div>
                <div className="d-grid gap-3 col-6 mx-auto">
                    <button className="btn btn-outline-success" type="button" onClick={() => handleSubmit()}>
                        Submit
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleClear()}>
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Register;
