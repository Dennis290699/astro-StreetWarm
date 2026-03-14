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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
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
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-[90%] sm:w-[400px] h-full bg-white z-[120] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[var(--title-color)] flex items-center gap-3">
            <i className="bx bx-menu-alt-left text-3xl text-[var(--first-color)]"></i> 
            Menu
          </h2>
          <button
            className="text-3xl text-gray-400 hover:text-red-500 transition-colors"
            onClick={closeMenu}
            title="Close menu"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* LINKS */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {['Home', 'Shop', 'Blog', "Faq's", 'Contact'].map((item, idx) => {
              const link = item === 'Home' ? '/' : `/${item.toLowerCase().replace("'", '')}`;
              return (
                <li key={idx}>
                  <a 
                    href={link} 
                    onClick={closeMenu} 
                    className="flex items-center gap-4 text-xl font-bold text-[var(--title-color)] py-4 border-b border-gray-50 hover:text-[var(--first-color)] hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* FOOTER ICONS */}
        <div className="p-6 sm:p-8 border-t border-gray-100 flex justify-center gap-8 text-2xl text-gray-400">
           <a href="#" className="hover:text-[var(--first-color)] transition-colors" title="Facebook"><i className='bx bxl-facebook-circle'></i></a>
           <a href="#" className="hover:text-[var(--first-color)] transition-colors" title="Instagram"><i className='bx bxl-instagram-alt'></i></a>
           <a href="#" className="hover:text-[var(--first-color)] transition-colors" title="Twitter"><i className='bx bxl-twitter'></i></a>
        </div>
      </div>
    </>
  );
}
