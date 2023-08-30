import "../Home.css";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        {/* logo */}

        <div className="logo">
          <img src="../img/Logo.png" className="logo-img" />
          <div className="logo-text">Organick</div>
        </div>

        {/* navigation links */}
        <div className="nav-links">
          <ul className="links-container">
            <li className="links-items">Home</li>
            <li className="links-items">About</li>
            <li className="links-items">Shop</li>
            <li className="links-items">Contact</li>
          </ul>
        </div>

        {/* Search bar */}
        <div className="left-container">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="search-icon-container">
              <img src="../img/search.png" alt="" className="search-icon" />
            </div>
          </div>

          <div className="cart-container">
            <div className="cart-icon-container">
              <img src="../img/bag.png" alt="" className="search-icon" />
            </div>
            <div className="cart-text">Cart (0)</div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="banner_left">
          <div className="stylish_text">100% Natural Food</div>
          <div className="tag_text">
            Choose the best healthier way <br />
            of life
          </div>
          <div className="action_button">
            Explore Now
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="banner_right">
          <img
            src="../../img/delicious-fried-chicken-plate.png"
            className="banner_sideimage"
            alt=""
          />
        </div>
      </div>

      <div className="info_container">
        <div className="info_box">
          <div className="info_contents">
            <div className="info_catch_text">Natural!!</div>
            <div className="info_main_text">
              Get Garden <br />
              Fresh Fruits
            </div>
          </div>
        </div>

        <div className="info_box">
          <div className="info_contents">
            <div className="info_catch_text_two">Natural!!</div>
            <div className="info_main_text_two">
              Get Garden <br />
              Fresh Fruits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
