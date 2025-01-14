import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="home1">
          <div className="text">
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img src="home.png" />
        </div>
        <div className="home2">
          <div className="text-box">
            <h1>Where does it come from?</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
            </p>
          </div>
          <div>
            <img src="animal1.png" className="animal1" />
            <img src="animal2.png" className="animal2" />
            <img src="animal3.png" className="animal3" />
            <img src="animal4.png" className="animal4" />
            <img src="animal5.png" className="animal5" />
          </div>
        </div>
        <div className="info-age">
          <img src="/no18.png" />
          <div>
            <h4>Where does it come from?</h4>
            <p>
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div>
            <h4>Where does it come from?</h4>
            <p>
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div>
            <h4>Where does it come from?</h4>
            <p>
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="home3">
          <button>
            <a href="https://www.freetogame.com/tarisland" target="_blank">
              Play game
            </a>
          </button>
          <img src="play-img.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
