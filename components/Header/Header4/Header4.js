import AnnounceBar from '../../AnnounceBar/AnnounceBar';

export default function Header4(){
    return(
        <>
        <AnnounceBar />
        <header className="header header1">
            <div className="header4__logo">
                <a href="/link">Company</a>
            </div>
           
            <div className="header4__collections-nav">
                <a href="/link" className="header4__collection-link">Link</a>
                <a href="/link" className="header4__collection-link">Link <i className="fas fa-chevron-down"></i>
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
                <a href="/link" className="header4__collection-link">Link</a>
                <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
                <a href="/cart"><i className="fas fa-user"></i></a>
            </div>
    
        </header>
        </>
    )
}