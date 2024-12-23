import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./action"; 
import { useAppDispatch } from '@/app/hooks'

import {
  NxwLogin,
  LoginField,
  LogoImageCon,
  LogoImage,
  LoginInputFildsBtn,
  InputsWithbtn,
  Inputs,
  UsernameCon,
  UsernameHeading,
  UserInput,
  PasswordCon,
  LoginButton,
  Error,
} from "./styled";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const dispatch = useAppDispatch();
  const authState = useSelector((state: any) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username, password)); // This now dispatches the thunk action
  };

  return (
    <NxwLogin>
      <LoginField>
        <LogoImageCon>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="logo"
          />
        </LogoImageCon>
        <LoginInputFildsBtn>
          <InputsWithbtn>
            <Inputs>
              <UsernameCon>
                <UsernameHeading>USERNAME</UsernameHeading>
                <UserInput
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </UsernameCon>
              <PasswordCon>
                <UsernameHeading>PASSWORD</UsernameHeading>
                <UserInput
                  type={showPass ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </PasswordCon>
            </Inputs>
            <form onSubmit={handleSubmit}>
              <input
                type="checkbox"
                id="showPassword"
                checked={showPass}
                onChange={() => setShowPass(!showPass)}
              />
              <label htmlFor="showPassword">Show password</label>
            </form>
          </InputsWithbtn>
          <LoginButton type="submit" onClick={handleSubmit}>
            Login
          </LoginButton>
          {authState?.error && <Error>*{authState.error}</Error>}
        </LoginInputFildsBtn>
      </LoginField>
    </NxwLogin>
  );
};

export default LoginPage;
