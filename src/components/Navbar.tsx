const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-white shadow z-10 px-4 py-2 flex justify-around">
        <a href="#inicio" className="text-blue-600 hover:underline">Inicio</a>
        <a href="#sobremi" className="text-blue-600 hover:underline">Sobre mí</a>
        <a href="#proyectos" className="text-blue-600 hover:underline">Proyectos</a>
        <a href="#contacto" className="text-blue-600 hover:underline">Contacto</a>
      </nav>
    );
  };
  
  export default Navbar;
  