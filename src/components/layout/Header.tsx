import { useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';

export default function Header() {
  const { isScrolled, setScrolled, toggleMenu, toggleCart, toggleLogin, isMenuOpen, closeMenu } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${
        isScrolled ? 'bg-[var(--body-color)] shadow-[0_1px_4px_hsla(0,0%,15%,0.1)]' : 'bg-transparent'
      }`}
      id="header"
    >
      <nav className="h-[calc(var(--header-height)+1.5rem)] flex justify-between items-center gap-12 max-w-[968px] mx-auto px-6">
        <a href="/" className="text-[var(--title-color)] lowercase font-bold tracking-[1px] inline-flex items-center gap-1">
          <i className="bx bxs-shopping-bags text-xl"></i> StreetWarm
        </a>

        {/* Menu for desktop (and mobile via classes if needed) */}
        <div
          className={`flex-1 md:block ${
             isMenuOpen ? 'fixed top-0 right-0 w-[80%] h-full bg-[var(--container-color)] p-12 transition-all duration-300 shadow-[-2px_0_4px_hsla(0,0%,15%,0.1)] z-[100]' : 'hidden md:flex'
          }`}
          id="nav-menu"
        >
          <ul className="flex flex-col md:flex-row items-center gap-8">
            <li className="nav__item">
              <a href="/" className="text-[var(--title-color)] font-medium transition-colors hover:text-[var(--first-color)]">Home</a>
            </li>
            <li className="nav__item">
              <a href="/shop" className="text-[var(--title-color)] font-medium transition-colors hover:text-[var(--first-color)]">Shop</a>
            </li>
            <li className="nav__item">
              <a href="/blog" className="text-[var(--title-color)] font-medium transition-colors hover:text-[var(--first-color)]">Blog</a>
            </li>
            <li className="nav__item">
              <a href="/faq" className="text-[var(--title-color)] font-medium transition-colors hover:text-[var(--first-color)]">Faq's</a>
            </li>
            <li className="nav__item">
              <a href="/contact" className="text-[var(--title-color)] font-medium transition-colors hover:text-[var(--first-color)]">Contact</a>
            </li>
          </ul>

          <div
            className="text-3xl absolute top-[0.9rem] right-5 cursor-pointer md:hidden text-[var(--title-color)]"
            onClick={closeMenu}
          >
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto text-[var(--title-color)]">
          <div className="text-xl cursor-pointer" onClick={toggleLogin}>
            <i className="bx bx-user"></i>
          </div>
          <div className="text-xl cursor-pointer" onClick={toggleCart}>
            <i className="bx bx-shopping-bag"></i>
          </div>
          <div className="text-xl cursor-pointer md:hidden" onClick={toggleMenu}>
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
