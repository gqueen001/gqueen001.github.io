import { useNavigate } from "react-router-dom";
import "../styles/checkAge.css";

const CheckAge = ({ setIsUnder18, hideChecker }) => {
  const navigate = useNavigate();

  const older18 = () => {
    setIsUnder18(true);
    hideChecker();
    navigate("/home");
    localStorage.setItem("under18", true);
  };

  const under18 = () => {
    navigate("/privacy-and-polacy");
    hideChecker();
    localStorage.setItem("under18", false);
  };

  return (
    <>
      <div className="check-age-box">
        <div className="check-age">
          <h1>
            This site contains content suitable only for users 18 and over.
          </h1>
          <p>Are you 18 years or older?</p>
          <div className="buttons">
            <button onClick={() => older18()}>yes</button>
            <button onClick={() => under18()} className="link">
              no
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckAge;
