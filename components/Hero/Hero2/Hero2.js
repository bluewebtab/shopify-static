export default function Hero2() {
  return (
    <div className="hero hero2">
      <div className="hero2__collection1">
        <img
          className="hero2__bg"
          src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <div className="hero2__content-container">
          <div className="hero2__info">
            <a href="#" className="hero2__button">
              Men
            </a>
          </div>
        </div>
      </div>
      <div className="hero2__collection2">
        <img
          className="hero2__bg"
          src="https://images.pexels.com/photos/7041730/pexels-photo-7041730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <div className="hero2__content-container">
          <div className="hero2__info">
            <a href="#" className="hero2__button">
              Woman
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
