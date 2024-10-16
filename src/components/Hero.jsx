const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam
            tenetur vel ducimus aut impedit. Consequuntur dolor voluptatum rem,
            ducimus ut sint, consequatur sunt quis distinctio eum magni libero
            repellendus!
          </p>
          <div className="hero-btn">
            <button>SHOP NOW</button>
            <button>Category</button>
          </div>
          <div className="shoping">
            <p>Available on</p>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
        <div className="hero-img">
          <img src="/images/shoes.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
