import "../Home.css";
import "../App.css";
import CustomButton from "./Button";
import ProductItem from "../ProductItem";
import CountUp from "react-countup";
// AOS
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// // ..
AOS.init({
  once: true,
});

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
          <img
            src="../img/Logo.png"
            className="logo-img"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <div
            className="logo-text"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Organick
          </div>
        </div>

        {/* navigation links */}
        <div className="nav-links">
          <ul
            className="links-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <li className="links-items">Home</li>
            <li className="links-items">About</li>
            <li className="links-items">Shop</li>
            <li className="links-items">Contact</li>
          </ul>
        </div>

        {/* Search bar */}
        <div className="left-container">
          <div
            className="search-container"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <input type="text" placeholder="Search" className="search-input" />
            <div className="search-icon-container">
              <img src="../img/search.png" alt="" className="search-icon" />
            </div>
          </div>

          <div
            className="cart-container"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="cart-icon-container">
              <img src="../img/bag.png" alt="" className="search-icon" />
            </div>
            <div className="cart-text">Cart (0)</div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div
          className="banner_left"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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
        <div
          className="banner_right"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            src="../../img/delicious-fried-chicken-plate.png"
            className="banner_sideimage"
            alt=""
          />
        </div>
      </div>

      <div className="info_container">
        <div
          className="info_box"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="info_contents">
            <div className="info_catch_text">Natural!!</div>
            <div className="info_main_text">
              Get Garden <br />
              Fresh Fruits
            </div>
          </div>
        </div>

        <div
          className="info_box"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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
        <div
          className="about_us_left"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="../../img/oranges.png" alt="" className="oranges_pic" />
        </div>
        <div className="about_us_right">
          <div
            className="about_us_header"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            About Us
          </div>
          <div
            className="about_tagline"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            We Believe in Working <br />
            Accredited Farmers
          </div>
          <div
            className="about_tagline_description"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </div>

          <div className="about_points_box">
            <div
              className="about_points_container"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
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

            <div
              className="about_points_container"
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
            >
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
        <div
          className="categories_header"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Categories
        </div>
        <div
          className="products_header"
          data-aos="zoom-in"
          data-aos-duration="1100"
          data-aos-easing="ease-in-out"
        >
          Our Products
        </div>

        <div className="product_container">
          <div
            className="product_item_container"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ProductItem data={sampleData} />
          </div>

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
        <div
          className="testimonial_head"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Testimonial
        </div>

        <div
          className="customer_header_text"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          What Our Customers Are Saying?
        </div>

        <div
          className="profile_img"
          data-aos="zoom-in"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
        >
          <img src="../../img/profile.png" alt="" />
        </div>
        <div
          className="rating_stars"
          data-aos="zoom-in"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out"
        >
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>

        <div
          className="rating_text"
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </div>

        <div
          className="rating_name"
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          Sara Taylor
        </div>

        <div
          className="rating_category"
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          Consumer
        </div>

        <div className="rating_position">
          <div className="circle"></div>
          <div className="circle active"></div>
          <div className="circle"></div>
        </div>

        <div
          className="numbers_stuffs"
          data-aos="zoom-in"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
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
        <div
          className="shop_header"
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          offer
        </div>

        <div
          className="shop_heading_container"
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          <div className="shop_heading_text">We Offer Organic For You</div>

          <div className="view_product_button">
            <CustomButton
              text="View All Product"
              backgroundColor="#efd372"
              textColor="#274c5b"
              iconColor="#ffffff"
              width="190px"
            />
          </div>
        </div>

        <ProductItem
          data={sampleData}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>

      <div className="eco_friendly_container">
        <div
          className="eco_img"
          data-aos="fade-right"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          <img src="img/ecobg.png" alt="" />
        </div>

        <div
          className="eco_box"
          data-aos="fade-left"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          <div className="eco_main">
            <div className="testimonial_head">Eco Friendly </div>
            <div className="eco_box_header">
              Econis is a Friendly <br />
              Organic Store
            </div>

            <div className="eco_item_container">
              <div className="eco_item_header">
                Start with Our Company First
              </div>

              <div className="eco_item_list">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </div>
            </div>

            <div className="eco_item_container">
              <div className="eco_item_header">Learn How to Grow Yourself</div>

              <div className="eco_item_list">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </div>
            </div>

            <div className="eco_item_container">
              <div className="eco_item_header">Farming Strategies of Today</div>

              <div className="eco_item_list">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sections_container">
        <div
          className="section_box"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section_button">Organic Juice</div>
        </div>

        <div
          className="section_box"
          data-aos="zoom-in"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
        >
          <div className="section_button">Organic Food</div>
        </div>

        <div
          className="section_box"
          data-aos="zoom-in"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          <div className="section_button">Nuts Cookies</div>
        </div>
      </div>

      <div className="news_section">
        <div
          className="news_head"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          News
        </div>
        <div
          className="news_header"
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
        >
          <div className="news_header_text">
            Discover weekly content about organic food, & more
          </div>
          <div className="news_button">
            More News
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="news_main_container">
          <div className="news_main" 
             data-aos="fade-right"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
          >
            <div className="news_box">
              <div className="date_box">
                25 <br /> Nov
              </div>
              <div>
                <img
                  src="../../img/news_image.png"
                  alt=""
                  className="news_image"
                />
              </div>
            </div>

            <div className="news_div">
              <div className="author_header">
                <i className="fa-solid fa-user"></i>
                By Rachi Card
              </div>

              <div className="news_header_description">
                The Benefits of Vitamin D & How to Get It
              </div>

              <div className="news_description_text">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </div>

              <CustomButton
                text="Read More"
                backgroundColor="#efd372"
                textColor="#274c5b"
                iconColor="#ffffff"
                width="120px"
              />
            </div>
          </div>

          <div className="news_main"
             data-aos="fade-left"
             data-aos-duration="1300"
             data-aos-easing="ease-in-out"
          >
            <div className="news_box">
              <div className="date_box">
                25 <br /> Nov
              </div>
              <div>
                <img
                  src="../../img/news_image_1.png"
                  alt=""
                  className="news_image"
                />
              </div>
            </div>

            <div className="news_div">
              <div className="author_header">
                <i className="fa-solid fa-user"></i>
                By Rachi Card
              </div>

              <div className="news_header_description">
                The Benefits of Vitamin D & How to Get It
              </div>

              <div className="news_description_text">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </div>

              <CustomButton
                text="Read More"
                backgroundColor="#efd372"news_div
                textColor="#274c5b"
                iconColor="#ffffff"
                width="120px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe_newsletter_container">
        <div className="subscribe_newsletter_main">
          <div className="subscribe_text">
            Subscribe to <br />
            our Newsletter
          </div>
          <div className="input_container">
            <input
              type="text"
              placeholder="Your Email Address"
              className="sub_email_input"
            />
            <div className="subscribe_button">Subscribe</div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_box">
          <div className="footer_subheader">Contact Us</div>
          <div className="footer_item">
            <div className="footer_item_header">Email</div>
            <div className="footer_item_text">needhelp@Organick.com</div>
          </div>

          <div className="footer_item">
            <div className="footer_item_header">Phone</div>
            <div className="footer_item_text">666 888 888</div>
          </div>

          <div className="footer_item">
            <div className="footer_item_header">Address</div>
            <div className="footer_item_text">88 road, borklyn street, USA</div>
          </div>
        </div>

        <div className="footer_about_box">
          <div className="footer_logo">
            <img src="img/Logo.png" alt="" />
            Organick
          </div>
          <div className="footer_item">
            <div className="footer_about_text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </div>
          </div>

          <div className="footer_socials">
            <div className="footer_social_box">
              <i className="fa-brands fa-instagram"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-facebook"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="footer_social_box">
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>

        <div className="footer_box">
          <div className="footer_utility_subheader">Utility</div>
          <div className="footer_item">
            <div className="footer_utility_text">needhelp@Organick.com</div>
          </div>

          <div className="footer_item">
            <div className="footer_utility_text">666 888 888</div>
          </div>

          <div className="footer_item">
            <div className="footer_utility_text">
              88 road, Brooklyn street, USA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
