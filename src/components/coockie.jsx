import "../styles/coockie.css";

const Coockie = ({ setIsCoockieAccept }) => {
  return (
    <>
      <div className="coockie">
        <h1>Cookie Policy</h1>
        <p>
          This Cookie Policy explains how our company uses cookies and similar
          technologies to recognize you when you visit our website. It describes
          what these technologies are, why we use them, and your rights to
          control them.
        </p>
        <div className="buttons">
          <button
            onClick={() => {
              localStorage.setItem("coockiePrivacy", true);
              setIsCoockieAccept(true);
            }}
          >
            Accept
          </button>
          <button
            onClick={() => {
              localStorage.setItem("coockiePrivacy", false);
              setIsCoockieAccept(true);
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </>
  );
};

export default Coockie;
