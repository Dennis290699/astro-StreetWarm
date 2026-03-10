export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-28 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[968px] mx-auto px-6 justify-items-center sm:justify-items-start">
        {/* FOOTER CONTENT 1 */}
        <div className="flex flex-col mb-8 md:mb-0 text-center sm:text-left">
          <a href="#" className="text-[var(--title-color)] lowercase font-bold tracking-[1px] inline-flex items-center gap-1 mb-4 mx-auto sm:mx-0">
            <i className="bx bxs-shopping-bags text-base"></i>B4LB3R1TH
          </a>

          <p className="mb-10 text-[var(--text-color)]">Enjoy the biggest sale <br /> of your life</p>

          <div className="flex justify-center sm:justify-start gap-3">
            <a href="#" className="inline-flex bg-[var(--container-color)] p-1 rounded text-[var(--title-color)] text-base transition-colors hover:bg-[var(--first-color)] hover:text-white">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="inline-flex bg-[var(--container-color)] p-1 rounded text-[var(--title-color)] text-base transition-colors hover:bg-[var(--first-color)] hover:text-white">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="inline-flex bg-[var(--container-color)] p-1 rounded text-[var(--title-color)] text-base transition-colors hover:bg-[var(--first-color)] hover:text-white">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        {/* FOOTER CONTENT 2 */}
        <div className="mb-8 md:mb-0 text-center sm:text-left">
          <h3 className="text-[var(--h3-font-size)] text-[var(--title-color)] font-medium mb-4">About</h3>

          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">About Us</a></li>
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Costumer Support</a></li>
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Support Center</a></li>
          </ul>
        </div>

        {/* FOOTER CONTENT 3 */}
        <div className="mb-8 md:mb-0 text-center sm:text-left">
          <h3 className="text-[var(--h3-font-size)] text-[var(--title-color)] font-medium mb-4">Our Services</h3>

          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Shop</a></li>
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Discounts</a></li>
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Shopping mode</a></li>
          </ul>
        </div>

        {/* FOOTER CONTENT 4 */}
        <div className="mb-8 md:mb-0 text-center sm:text-left">
          <h3 className="text-[var(--h3-font-size)] text-[var(--title-color)] font-medium mb-4">Our Company</h3>

          <ul className="flex flex-col gap-2">
            <li><a href="/registration" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Register</a></li>
            <li><a href="/contact" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">Contact Us</a></li>
            <li><a href="#" className="text-[var(--small-font-size)] text-[var(--text-color)] transition-colors hover:text-[var(--title-color)]">About Us</a></li>
          </ul>
        </div>
      </div>
      <span className="block text-center text-[var(--smaller-font-size)] text-[var(--text-color)] mt-24">
        &#169; B4LB3R1TH. All rights reserved
      </span>
    </footer>
  );
}
