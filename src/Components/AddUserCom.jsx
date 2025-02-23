import { useState } from "react";
import { signUp } from "../AuthFirebase";

export function AddUserCom(props) {
  const { signUpPopup, handleSignUpPopup, handlePopup } = props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert("Signup Successful")
      handleSignUpPopup()
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
    { signUpPopup && (
      <div id="popup-container">
           <form id="input-area" onSubmit={handleAddUser}>
              <i className="fa-solid fa-x w-full text-end cursor-pointer" onClick={handleSignUpPopup}></i>
              <div id="title">
                  <h2>Sign Up</h2>
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
              <label htmlFor="date">New Password</label>
              <input
                  id="input-two"
                  className="input-bar"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
          required />
              <label htmlFor="date">Repeat Password</label>
              <input
                  id="input-two"
                  className="input-bar"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
          required />
        <button value="submit" type="submit" id="submit-btn" className="cursor-pointer">Sign up</button>
          <div id="signup">
                  <p>Sign up with <span className="cursor-pointer" >Google</span></p>
                  <p>Already have an account? <span className="cursor-pointer" onClick={handlePopup}>Sign in</span></p>
        </div>
            </form>
      </div>
    )
    }
    </>
  )
}