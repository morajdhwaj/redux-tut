// import './App.css';


const Home = () => {
  return (
    <div className="bg">
      <h1>Home</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://m.media-amazon.com/images/I/51jweLlbeTL._SL1024_.jpg" />
        </div>
        <div className="text-wrapper item">
        <span>oppo</span>
        <span>Price- 15000</span>
        </div>
        <div className="btn-wrapper item bg">
            <button className="btn-wrapper bg">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
