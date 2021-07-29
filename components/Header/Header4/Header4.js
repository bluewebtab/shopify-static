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
                <a href="/link">Link</a>
                <a href="/link">Link</a>
                <a href="/link">Link</a>
                <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
                <a href="/cart"><i class="fas fa-user"></i></a>
            </div>
    
        </header>
        </>
    )
}