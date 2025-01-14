import Navbar from "./layout/navbar";
import PrivacyAndPolacy from "./components/privacyAndPolacy";
import HomePage from "./components/homePage";
import CheckAge from "./layout/checkAge";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Coockie from "./components/coockie";
import Terms from "./components/Terms";
import NotAllowed from "./components/notAllowe";

function App() {
  const [isUnder18, setIsUnder18] = useState(false);
  const [isCoockieAccept, setIsCoockieAccept] = useState(false);
  const [isTermsAccept, setIsTermsAccept] = useState(false);
  const [showAgeChecker, setShowAgeChecker] = useState(true);
  const [isPrivacyAccept, setIsPrivacyAccept] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (!isUnder18 && !isPrivacyAccept) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  }, [isUnder18]);

  return (
    <>
      <div>
        {showAgeChecker && (
          <CheckAge
            setIsUnder18={setIsUnder18}
            hideChecker={() => setShowAgeChecker(false)}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={isPrivacyAccept || isUnder18 ? <Navbar /> : null}
          >
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route
              path="privacy-and-polacy"
              element={
                <PrivacyAndPolacy setIsPrivacyAccept={setIsPrivacyAccept} />
              }
            />
          </Route>
          <Route path="not-allowed" element={<NotAllowed />} />
        </Routes>
        {!isCoockieAccept && (
          <Coockie setIsCoockieAccept={setIsCoockieAccept} />
        )}
        {isCoockieAccept && !isTermsAccept && (
          <Terms setIsTermsAccept={setIsTermsAccept} />
        )}
      </div>
    </>
  );
}

export default App;
