export default function Header1() {
  return (
    <header className="header header1">
      <div className="header1__collections-nav">
        <a href="/link" className="header1__collection-link">
          Link top {" "}
          <i className="fas fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          
          </ul>
        </a>
        <a href="/link" className="header1__collection-link">Link</a>
        <a href="/link" className="header1__collection-link">Link</a>
      </div>
      <div className="header1__logo">
        <a href="/link">Company</a>
      </div>
      <div className="header1__collections-nav">
        <a href="/link" className="header1__collection-link">Link</a>
        <a href="/link" className="header1__collection-link">Link <i className="fas fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            
            
          </ul></a>
        <a href="/link" className="header1__collection-link">Link</a>
        <a href="/cart">
          <i class="fas fa-shopping-cart"></i>
        </a>
        <a href="/cart">
          <i class="fas fa-user"></i>
        </a>
      </div>
    </header>
  );
}
