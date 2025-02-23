import "./popup.css"
import { useState } from "react";
import { signIn, googleSignIn, signUp } from "../AuthFirebase";
import { AddUserCom } from "./AddUserCom";

export function Login(props) {
  const { handlePopup, popup, handleSignUpPopup, signUpPopup } = props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      alert("Login successful!");
      handlePopup();
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <>
      { popup && (
      <div id="popup-container">
             <form id="input-area" onSubmit={handleLogin}>
                <i className="fa-solid fa-x w-full text-end cursor-pointer" onClick={handlePopup}></i>
                <div id="title">
                    <h2 >Login</h2>
                </div>
                <label htmlFor="input-one">Email</label>
                <input
                    id="input-one"
                    className="input-bar"
                    type="email"
                    placeholder="Type here..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                <label htmlFor="date">Password</label>
                <input
                    id="input-two"
                    className="input-bar"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
            required />
          <div id="forgot"> 
              <p>Forgot Password? <span className="cursor-pointer" href="">Click here</span></p>
          </div>
          <button className="cursor-pointer" value="submit" type="submit" id="submit-btn">Login</button>
            <div id="signup">
                    <p>Sign in with <span className="cursor-pointer" onClick={googleSignIn}>Google</span></p>
                    <p>Dont have an account? <span className="cursor-pointer" onClick={handleSignUpPopup}>Sign Up</span></p>
          </div>
              </form>
        </div>
      ) 
      }
      <AddUserCom
        signUpPopup={signUpPopup}
        handleLogin={handleLogin}
        handleSignUpPopup={handleSignUpPopup}
        handlePopup={handlePopup}
      />
      
    </>

    )
}