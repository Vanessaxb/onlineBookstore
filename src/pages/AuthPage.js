import { useState } from "react";
import SignUpForm from "../components/SignUpForm/SingUpForm";
import LoginForm from "../components/LoginForm/LoginForm";
import styles from './AuthPage.module.css';
// import Logo from '../../components/Logo/Logo';

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <main className={styles.AuthPage}>
      <h1> Auth Page</h1>

      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Sign up" : "Log in"}</button>

      
      {
        showLogin ? (
          <LoginForm setUser={setUser} />
         ) : (
          <SignUpForm setUser={setUser} />
         )
      }
    </main>
  );
}

export default AuthPage;
