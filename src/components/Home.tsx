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
              <img
                src="../img/search.png"
                alt=""
                className="search-icon"
              />
            </div>
          </div>

          <div className="cart-container">
            <div className="cart-icon-container">
              <img
                src="../img/bag.png"
                alt=""
                className="search-icon"
              />
            </div>
              <div className="cart-text">Cart (0)</div>
          </div>
        </div>
      </div>

      <div className="banner">
          <div className="banner_left">
              <div className="stylish_text">
                  100% Natural Food
              </div>
          </div>
          <div className="banner_right"></div>
      </div>
    </div>
  );
};

export default Home;
