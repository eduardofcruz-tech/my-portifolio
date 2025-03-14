import './Header.css'

function Header() {
    return (
        <header className="header">
            <img className='img--logo' src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo'></img>
            <nav className="nav nav--main">
                <ul className="ul ul--main">
                    <li><a className='a a--nav-main' href="#home">Home</a></li>
                    <li><a className='a a--nav-main'  href="#aboutme">Sobre</a></li>
                    <li><a className='a a--nav-main'  href="#skills">Skills</a></li>
                    <li><a className='a a--nav-main'  href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header