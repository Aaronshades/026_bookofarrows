import React, { useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import { Button } from "@mantine/core";

import { UserContext } from "../components/Authentication/Authentication";
import { googleLogin } from "../auth";
import styles from "../styles/Login.module.css";

const Login = () => {
  const {user} = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user.displayName) {
      router.push("/user");
    }
  }, [router, user]);

  return (
    <>
      <div className={styles.welcomeContainer}>
        <h2>Velkommen!</h2>
        <p>Vi gir deg</p>
        <ul className={styles.list}>
          <li>skytterprofil der du kan large skytternr. og data om ditt utstyr</li>
          <li>beregnet siktemerker med avansert beregningsmodell</li>
        </ul>
        <div className={styles.loginContainer}>
          <Button onClick={googleLogin}>Logg in med Google</Button>
        </div>
      </div>
    </>
  );
};

export default Login;