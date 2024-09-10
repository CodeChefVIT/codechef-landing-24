const Navbar = () => {
  return (
    <div className="container">
      <div className="component">
        <button className="cn-button" id="cn-button">
          +
        </button>
        <div className="cn-wrapper" id="cn-wrapper">
          <ul>
            <li>
              <a href="#">
                <span className="icon-picture"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-headphones"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-home"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-facetime-video"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-envelope-alt"></span>
              </a>
            </li>
          </ul>
        </div>
        <div id="cn-overlay" className="cn-overlay"></div>
      </div>
    </div>
  );
};

export default Navbar;
