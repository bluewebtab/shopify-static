export default function Header2(){
    return(
        <header className="header header1">
            <div className="header2__logo">
                <a href="/link">Company</a>
            </div>
            <div className="header2__collections-nav">
                <a href="/link">Link</a>
                <a href="/link">Link</a>
                <a href="/link">Link</a>
            </div>
            <div className="header2__collections-nav">
                <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
                <a href="/cart"><i class="fas fa-user"></i></a>
            </div>
    
        </header>
    )
}