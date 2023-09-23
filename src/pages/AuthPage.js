import { useState } from "react";
import SignUpForm from "../components/SignUpForm/SingUpForm";
import LoginForm from "../components/LoginForm/LoginForm";
import styles from "./AuthPage.module.css";
// import Logo from '../../components/Logo/Logo';

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div className="forms">
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Sign up" : "Log in"}
        </button>

        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
      <div className="title">
        <h1>Beattie BookStore</h1>
      </div>
    </main>
  );
}

export default AuthPage;
