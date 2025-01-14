import { useNavigate } from "react-router-dom";
import "../styles/privacyAndPolacy.css";

const PrivacyAndPolacy = ({ setIsPrivacyAccept }) => {
  const navigate = useNavigate();
  const body = document.body;
  body.style.overflow = "scroll";

  return (
    <>
      <div className="privacyAndPolacy">
        <div>
          <h1>Privacy Polacy</h1>
          <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h3>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <h3>1914 translation by H. Rackham</h3>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
          <h3>
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <h3>1914 translation by H. Rackham</h3>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain.
          </p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              localStorage.setItem("privacy-and-policy", true);
              setIsPrivacyAccept(true);
              navigate("/home");
            }}
          >
            Accept
          </button>
          <button
            onClick={() => {
              navigate("/not-allowed");
            }}
          >
            Don`t accept
          </button>
        </div>
      </div>
    </>
  );
};

export default PrivacyAndPolacy;
