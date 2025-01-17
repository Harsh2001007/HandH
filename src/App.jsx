import { useRef, useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrmsg] = useState(false);
  const [comingSoon, setComingsoon] = useState(false);
  const [loginErr, setLoginErr] = useState(false);

  const passHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const auth = getAuth();

  const socialCliked = () => {
    setComingsoon(true);
    setTimeout(() => {
      setComingsoon(false);
    }, 3500);
  };

  const signUpBtnHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log(user, "-------user-----------------");
        console.log("user signed up successfully");
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(errCode);
        console.log(errMsg);
        setEmail("");
        setPassword("");
        setName("");
        setErrmsg(true);
      });
  };

  const signInBtnHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log("user logged in successfully");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log("failed in login");
        console.log(errorCode);
        console.log(errorMessage);
        setLoginErr(true);
        setTimeout(() => {
          setLoginErr(false);
        }, 5000);
      });
  };

  const [isGx, setIsGx] = useState(false);
  const [isTxr, setIsTxr] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isTxl, setIsTxl] = useState(false);
  const [isZ200, setIsZ200] = useState(false);

  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  const changeForm = () => {
    setIsGx(true);
    setTimeout(() => {
      setIsGx(false);
    }, 1500);

    setIsTxr((prev) => !prev);
    setIsHidden((prev) => !prev);
    setIsTxl((prev) => !prev);
    setIsZ200((prev) => !prev);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".submit");
    buttons.forEach((button) =>
      button.addEventListener("click", handlePreventDefault)
    );

    return () => {
      buttons.forEach((button) =>
        button.removeEventListener("click", handlePreventDefault)
      );
    };
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
