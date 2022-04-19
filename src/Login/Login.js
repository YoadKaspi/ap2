import './Register/Register.css';
import userList from '../UserList.js';
import React, {useState} from 'react';

function login() {

    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin  = () => {
        
    }

    const handleClear = () => {
        setUserName('');
        setPassword('');
    }

    return (
        <form name='LoginForm'>
            <div className="field-name d-grid gap-0.8 central-frame">
                <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label head-line">Welcome To Brawlhalla</label><br/>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">Username</label><br/>
                        </div>
                        <div className="col-sm-9">
                            <label htmlFor="exampleFormControlInput1" id="ValidateUsername" className="form-label validation-label"></label><br/>
                        </div>
                    </div>
                    <input type="text" className="form-control" id="username" value={userName} placeholder="My Username" onChange={e => setUserName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label field-label">Password</label><br/>
                        </div>
                        <div className="col-sm-9">
                            <label htmlFor="exampleFormControlInput1" id="ValidatePassword" className="form-label validation-label"></label><br/>
                        </div>
                    </div>
                    <input type="password" className="form-control" id="psw" value={password} rows="3" placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button type="button" className="btn btn-link">Not registered yet? register here</button>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-outline-success" type="button" onClick={()=>handleLogin()}>Log in</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={()=>handleClear()}>Clear</button>
                </div>
            </div>
        </form>
    );
};