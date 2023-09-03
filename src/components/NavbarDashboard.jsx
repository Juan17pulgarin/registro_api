import fondo  from '../assets/video/fondo.mp4'
import nav from './nav.css'

const NavbarDashboard = () => {
  return (
    <>    
    <div className="video">
    <video autoPlay muted loop id="fondo">
      <source src={fondo} type="video/mp4" />
    </video>
    </div>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
    </>
  );
};

export default NavbarDashboard;
