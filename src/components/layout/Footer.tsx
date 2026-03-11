export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24 pb-10 bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col text-center md:text-left">
            <a href="/" className="group flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[var(--title-color)] text-white transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-[var(--first-color)] shadow-md">
                <i className="bx bxs-shopping-bags text-xl"></i>
              </div>
              <span className="text-[var(--title-color)] font-black tracking-widest text-xl uppercase transition-colors group-hover:text-[var(--first-color)]">
                Street<span className="text-[var(--first-color)] group-hover:text-[var(--title-color)] transition-colors">Warm</span>
              </span>
            </a>
            
            <p className="text-gray-500 leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
              Elevate your street style with our exclusive collections. The biggest sale of your life is happening right now.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shadow-sm" title="Facebook">
                <i className="bx bxl-facebook text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all shadow-sm" title="Instagram">
                <i className="bx bxl-instagram text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all shadow-sm" title="Twitter">
                <i className="bx bxl-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* LINKS COLUMN 1 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[var(--title-color)] mb-6 uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Store Locator</a></li>
            </ul>
          </div>

          {/* LINKS COLUMN 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[var(--title-color)] mb-6 uppercase tracking-wider">Services</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="/shop" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Shop Collection</a></li>
              <li><a href="#" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Special Discounts</a></li>
              <li><a href="#" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Gift Cards</a></li>
            </ul>
          </div>

          {/* LINKS COLUMN 3 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[var(--title-color)] mb-6 uppercase tracking-wider">Support</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="/contact" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Contact Us</a></li>
              <li><a href="/faq" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">FAQ & Returns</a></li>
              <li><a href="#" className="text-gray-500 font-medium transition-colors hover:text-[var(--first-color)] hover:translate-x-1 inline-block transform duration-300">Terms & Conditions</a></li>
            </ul>
          </div>
          
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-medium text-gray-400 text-center md:text-left">
             © {new Date().getFullYear()} StreetWarm. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-2xl text-gray-400">
            <i className="bx bxl-visa hover:text-[#1434CB] transition-colors cursor-pointer" title="Visa"></i>
            <i className="bx bxl-mastercard hover:text-[#EB001B] transition-colors cursor-pointer" title="Mastercard"></i>
            <i className="bx bxl-paypal hover:text-[#00457C] transition-colors cursor-pointer" title="PayPal"></i>
            <i className="bx bxl-apple hover:text-black transition-colors cursor-pointer" title="Apple Pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
