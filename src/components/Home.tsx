import "../Home.css";
import "../App.css";
import CustomButton from "./Button";
import ProductItem from "../ProductItem";
import CountUp from "react-countup";

const sampleData = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

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
          {/* <div className="action_button">
            Explore Now
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
          <CustomButton
            text="Explore Now"
            backgroundColor="#efd372"
            textColor="#274c5b"
            iconColor="#ffffff"
            width="140px"
          />
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

      <div className="about_us">
        <div className="about_us_left">
          <img src="../../img/oranges.png" alt="" className="oranges_pic" />
        </div>
        <div className="about_us_right">
          <div className="about_us_header">About Us</div>
          <div className="about_tagline">
            We Believe in Working <br />
            Accredited Farmers
          </div>
          <div className="about_tagline_description">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </div>

          <div className="about_points_box">
            <div className="about_points_container">
              <div className="about_points_icon">
                <img src="../../img/organic.png" alt="" />
              </div>

              <div className="about_points_text_container">
                <div className="about_points_text_head">Organic Foods Only</div>
                <div className="about_points_text">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </div>
              </div>
            </div>

            <div className="about_points_container">
              <div className="about_points_icon">
                <img src="../../img/quality.png" alt="" />
              </div>

              <div className="about_points_text_container">
                <div className="about_points_text_head">Quality Standards</div>
                <div className="about_points_text">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </div>
              </div>
            </div>

            <CustomButton
              text="Explore Now"
              backgroundColor="#274C5B"
              textColor="#ffffff"
              iconColor="#ffff"
              iconBackgroundColor="#335B6B"
              width="140px"
            />
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="categories_header">Categories</div>
        <div className="products_header">Our Products</div>

        <div className="product_container">
          <ProductItem data={sampleData} />

          <div className="product_button">
            <CustomButton
              text="Explore Now"
              backgroundColor="#274C5B"
              textColor="#ffffff"
              iconColor="#ffff"
              iconBackgroundColor="#335B6B"
              width="140px"
            />
          </div>
        </div>
      </div>

      <div className="testimonial_container">
        <div className="testimonial_head">Testimonial</div>

        <div className="customer_header_text">
          What Our Customers Are Saying?
        </div>

        <div className="profile_img">
          <img src="../../img/profile.png" alt="" />
        </div>
        <div className="rating_stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>

        <div className="rating_text">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </div>

        <div className="rating_name">Sara Taylor</div>

        <div className="rating_category">Consumer</div>

        <div className="rating_position">
          <div className="circle"></div>
          <div className="circle active"></div>
          <div className="circle"></div>
        </div>

        <div className="numbers_stuffs">
          <div className="numbers_circle_container">
            <div className="numbers_circle_inner">
              <CountUp start={0} end={100} delay={1}>
                {({ countUpRef }) => (
                  <div>
                    <span className="number_text" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <div className="number_description">Organic</div>
            </div>
          </div>

          <div className="numbers_circle_container">
            <div className="numbers_circle_inner">
            <CountUp start={0} end={285} delay={1} suffix="+">
                {({ countUpRef }) => (
                  <div>
                    <span className="number_text" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <div className="number_description">Active Product</div>
            </div>
          </div>

          <div className="numbers_circle_container">
            <div className="numbers_circle_inner">
            <CountUp start={0} end={350} delay={1} suffix="+">
                {({ countUpRef }) => (
                  <div>
                    <span className="number_text" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <div className="number_description">Organic Orchads</div>
            </div>
          </div>

          <div className="numbers_circle_container">
            <div className="numbers_circle_inner">
            <CountUp start={0} end={25} delay={1} suffix="+">
                {({ countUpRef }) => (
                  <div>
                    <span className="number_text" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <div className="number_description">Years of Farming</div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop_container">
              <div className="shop_header">
                  offer
              </div>

              <div className="shop_heading_container">
                  <div className="shop_heading_text">
                  We Offer Organic For You
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Home;
