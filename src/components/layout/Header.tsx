import { useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';

export default function Header() {
  const { 
    isScrolled, setScrolled, 
    toggleMenu, toggleCart, toggleLogin, 
    isMenuOpen, closeMenu, 
    isCartOpen, isLoginOpen 
  } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  // Bloqueo de scroll global cuando un sidebar está abierto
  useEffect(() => {
    if (isMenuOpen || isCartOpen || isLoginOpen) {
      document.body.style.overflow = 'hidden';
      // Ajuste para evitar shift por el scrollbar
      document.body.style.paddingRight = '8px'; 
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen, isCartOpen, isLoginOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-5'
      }`}
      id="header"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 2xl:px-0">
        
        {/* LOGO */}
        <a href="/" className="group flex items-center gap-2 z-50">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[var(--title-color)] text-white transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-[var(--first-color)] shadow-md">
            <i className="bx bxs-shopping-bags text-xl"></i>
          </div>
          <span className="text-[var(--title-color)] font-black tracking-widest text-xl uppercase transition-colors group-hover:text-[var(--first-color)]">
            Street<span className="text-[var(--first-color)] group-hover:text-[var(--title-color)] transition-colors">Warm</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {['Home', 'Shop', 'Blog', "Faq's", 'Contact'].map((item, idx) => {
              const link = item === 'Home' ? '/' : `/${item.toLowerCase().replace("'", '')}`;
              return (
                <li key={idx} className="relative group">
                  <a href={link} className="text-gray-600 font-semibold transition-colors hover:text-[var(--first-color)] text-[15px] tracking-wide">
                    {item}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--first-color)] transition-all duration-300 group-hover:w-full"></span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-5 md:gap-6 text-[var(--title-color)]">
          <button 
            onClick={toggleLogin}
            className="text-2xl cursor-pointer hover:text-[var(--first-color)] transition-colors relative group"
            title="User Account"
          >
            <i className="bx bx-user"></i>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Login</span>
          </button>
          
          <button 
            onClick={toggleCart}
            className="text-2xl cursor-pointer hover:text-[var(--first-color)] transition-colors relative group"
            title="Shopping Cart"
          >
            <i className="bx bx-shopping-bag"></i>
          </button>
          
          <button 
            onClick={toggleMenu}
            className="text-2xl cursor-pointer md:hidden hover:text-[var(--first-color)] transition-colors"
            title="Menu"
          >
            <i className="bx bx-menu-alt-right"></i>
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={closeMenu}
        />

        {/* MOBILE MENU SIDEBAR */}
        <div
          className={`fixed top-0 right-0 w-[85%] sm:w-[350px] h-full bg-[#1A1A1A] text-white shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col justify-center rounded-l-[2.5rem]
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <button
            className="absolute top-8 right-8 text-4xl text-gray-500 hover:text-white transition-colors"
            onClick={closeMenu}
            title="Close menu"
          >
            <i className="bx bx-x"></i>
          </button>

          <div className="px-12 pb-10 border-b border-gray-800 mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-[var(--first-color)] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
              Navigation
            </span>
            <h2 className="text-3xl font-black tracking-widest uppercase text-white">Menu</h2>
          </div>

          <ul className="flex flex-col gap-6 px-12 overflow-y-auto custom-scrollbar">
            {['Home', 'Shop', 'Blog', "Faq's", 'Contact'].map((item, idx) => {
              const link = item === 'Home' ? '/' : `/${item.toLowerCase().replace("'", '')}`;
              return (
                <li key={idx}>
                  <a 
                    href={link} 
                    onClick={closeMenu} 
                    className="text-2xl font-medium text-gray-300 flex items-center justify-between group py-3 border-b border-gray-800 hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                    <i className="bx bx-chevron-right text-[var(--first-color)] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></i>
                  </a>
                </li>
              );
            })}
          </ul>
          
          <div className="absolute bottom-10 left-12 right-12 flex justify-start gap-6 text-2xl text-gray-500">
             <a href="#" className="hover:text-white transition-colors" title="Facebook"><i className='bx bxl-facebook-circle'></i></a>
             <a href="#" className="hover:text-white transition-colors" title="Instagram"><i className='bx bxl-instagram-alt'></i></a>
             <a href="#" className="hover:text-white transition-colors" title="Twitter"><i className='bx bxl-twitter'></i></a>
          </div>
        </div>

      </nav>
    </header>
  );
}
