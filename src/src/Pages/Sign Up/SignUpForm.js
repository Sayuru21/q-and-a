import React from "react";
// import { Button } from "@mui/material";
// import { FlatButton } from "@mui/material";
import { TextField, Button } from "@mui/material";
import PasswordStr from "./PasswordStr";
import "../../Assets/Styles/SignUp.css";

const SignUpForm = ({
                        history,
                        onSubmit,
                        onChange,
                        errors,
                        user,
                        score,
                        btnTxt,
                        type,
                        pwMask,
                        onPwChange
                    }) => {
    return (
        <div className="loginBox">
            <h1>Sign Up</h1>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>
                <TextField
                id="standard-basic"
                label="username"
                variant="standard"
                    // name="username"
                    // floatingLabelText="user name"
                    // value={user.username}
                    onChange={onChange}
                    errorText={errors.username}
                />
                <TextField
                    name="email"
                    floatingLabelText="email"
                    value={user.email}
                    onChange={onChange}
                    errorText={errors.email}
                />
                <TextField
                    type={type}
                    name="password"
                    floatingLabelText="password"
                    value={user.password}
                    onChange={onPwChange}
                    errorText={errors.password}
                />

                <div className="pwStrRow">
                    {score >= 1 && (
                        <div>
                            <PasswordStr score={score} />
                            <Button
                                className="pwShowHideBtn"
                                label={btnTxt} onClick={pwMask}
                                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}}
                            />
                        </div>
                    )}
                </div>
                <TextField
                    type={type}
                    name="pwconfirm"
                    floatingLabelText="confirm password"
                    value={user.pwconfirm}
                    onChange={onChange}
                    errorText={errors.pwconfirm}
                />
                <br />
                <Button
                    className="signUpSubmit"
                    primary={true}
                    type="submit"
                    label="submit"
                />
            </form>
            <p>
                Aleady have an account? <br />
                <a href="/">Log in here</a>
            </p>
        </div>
    );
};

export default SignUpForm;
