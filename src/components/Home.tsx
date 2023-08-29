import "../Home.css";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        {/* logo */}

        <div className="logo">
          <img src="../../public/img/Logo.png" className="logo-img" />
          <div className="logo-text">GroovyKids Store</div>
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
        <div className="search-bar">
          <div className="search-box">
              <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
