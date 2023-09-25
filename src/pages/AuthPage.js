import { useState } from "react";
import SignUpForm from "../components/SignUpForm/SingUpForm";
import LoginForm from "../components/LoginForm/LoginForm";
import styles from "./AuthPage.module.css";
// import Header from '../components/Header/Header.js'


function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      {/* <Header/> */}
      <div className={styles.AuthForm}>
        <button onClick={() => setShowLogin(!showLogin)} className="AuthButton">
          {showLogin ? "Sign up" : "Log in"}
        </button>

        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
      
    </main>
  );
}

export default AuthPage;
