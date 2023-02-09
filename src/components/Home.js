import "../App.css";

const Home = (props) => {


  console.log("Home",props.cartData.cartItems)

  return (
    <div className="">
      <div className="add-to-cart">
        <span className="cart-count">{props.cartData.cartItems.length}</span>
        <img
          className="cartimage"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"
        />
      </div>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://m.media-amazon.com/images/I/51jweLlbeTL._SL1024_.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>oppo</span>
          <span>Price- 15000</span>
        </div>
        <div className="btn-wrapper item bg">
          <button className="btn-wrapper bg" onClick={()=>props.addToCartHandler({price:"10000",name:"oppo"})}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
