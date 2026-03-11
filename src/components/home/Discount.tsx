export default function Discount() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="relative bg-[var(--title-color)] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl overflow-hidden group">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--first-color)] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl transform scale-110"></div>
              <img 
                src="/assets/productos/discount.png" 
                alt="Discount Package" 
                className="w-[220px] md:w-[280px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-4 transition-transform duration-500 ease-out relative z-10" 
              />
            </div>
          </div>

          <div className="relative z-10 text-center md:text-left w-full md:w-1/2 order-2 md:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-sm">
              Limited Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight mb-6">
              Get <span className="text-[var(--first-color)]">50% Off</span> <br />On New Arrivals
            </h2>
            <p className="text-gray-300 mb-10 max-w-sm mx-auto md:mx-0 text-lg">
              Upgrade your style today. Grab the best deals before they are gone forever.
            </p>
            <a 
              href="/shop" 
              className="inline-flex items-center gap-3 bg-[var(--first-color)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-[var(--title-color)] hover:shadow-lg hover:-translate-y-1"
            >
              Shop the Sale
              <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
