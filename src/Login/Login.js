import userList from "../Users.js";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        var flag = false;
        for (var i in userList) {
            if (userList[i].username === userName && userList[i].password === password) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            document.getElementById("unregistered").innerHTML = "username or password are incorrect";
        } else {
            navigate(`/mainchat/${userName}`);
        }
    };

    const handleClear = () => {
        setUserName("");
        setPassword("");
    };

    return (
        <form name="LoginForm">
            <div className="field-name d-grid gap-0.8 central-frame">
                <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label headline">
                        Welcome To Brawlhalla
                    </label>
                    <br />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">
                                Username
                            </label>
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
                                Password
                            </label>
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
                <div>
                    <label id="unregistered" className="form-label validation-label"></label>
                </div>
                <div>
                    <button type="button" className="btn btn-link" onClick={() => navigate("/register")}>
                        Not registered yet? register here
                    </button>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-outline-success" type="button" onClick={() => handleLogin()}>
                        Log in
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleClear()}>
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Login;
