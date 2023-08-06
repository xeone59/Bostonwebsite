import './Header.css';
// import IMAGES from './aman-nagpal-x30o7yNusVs-unsplash.jpg';
import Navbar from './Navbar';

function Header({setPage}){

    const handleAboutClick = () => {
        setPage('History');
      };

    return (
        <header className="header">
            <Navbar className="nav"  setPage={setPage}/>
            <h1 className="header__title">BOSTON</h1>
            <a href="#" className="header__link" onClick={handleAboutClick}>Learn more >></a>
        </header>
    );
}

export default Header;