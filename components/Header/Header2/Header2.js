export default function Header2() {
  return (
    <header className="header header1">
      <div className="header2__logo">
        <a href="/link">Company</a>
      </div>
      <div className="header2__collections-nav">
        <a href="/link" className="header2__collection-link">Link</a>
        <a href="/link" className="header2__collection-link">Link</a>
        <a href="/link" className="header2__collection-link">
          Link <i className="fas fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">
                Link 
              </a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </a>
      </div>
      <div className="header2__collections-nav">
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
