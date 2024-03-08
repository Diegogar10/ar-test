import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import imageLogo from './../assets/images/ar-logo-header.png';
import './Nav.scss';

const Nav = ()=> {
  return (
    <header className="header__container">
      <div className="header__functions">
        <ul className="functions__container">
          <li><button><HelpOutlineIcon/>Ayuda</button></li>
          <li><button><LocalAtmIcon/>Pagos</button></li>
          <li><button><AccountBoxIcon/> Mi cuenta</button></li>
        </ul>
      </div>
      <nav className="header__navbar">
        <figure className="navbar__logo">
          <li><a href=""><img src={imageLogo} alt="icono logo" /></a></li>
        </figure>
        <ul className="navbar__container">
          <li><a className='selected' href=""><div></div>Inicio</a></li>
          <li><a href=""><div></div>Proyecto</a></li>
          <li><a href=""><div></div>Próximos lanzamientos</a></li>
          <li><a href=""><div></div>Ofrece lotes</a></li>
          <li><a href=""><div></div>Te asesoramos</a></li>
          <li><a href=""><div></div>Contactanos</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Nav;

