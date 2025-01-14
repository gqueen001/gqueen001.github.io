import "../styles/terms.css";

const Terms = ({ setIsTermsAccept }) => {
  return (
    <>
      <div className="terms">
        <h1>Terms and Conditions</h1>
        <ul>
          <li>
            Introduction Welcome to Company. By accessing or using our website,
            services, or products (collectively, "Services"), you agree to
            comply with and be bound by these Terms and Conditions ("Terms").
            Please read them carefully before using our Services.
          </li>
          <li>
            Acceptance of Terms By accessing or using our Services, you
            acknowledge that you have read, understood, and agree to be legally
            bound by these Terms. If you do not agree, you must not use our
            Services.
          </li>
          <li>
            Changes to Terms We reserve the right to modify or update these
            Terms at any time without prior notice. Any changes will be
            effective immediately upon posting on our website. Continued use of
            the Services after changes are posted constitutes your acceptance of
            the revised Terms.
          </li>
        </ul>
        <div className="buttons">
          <button
            onClick={() => {
              localStorage.setItem("terms", true);
              setIsTermsAccept(true);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Terms;
