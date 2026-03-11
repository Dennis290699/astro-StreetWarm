export default function Steps() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 2xl:px-0">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-[var(--title-color)] text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
          Simple Process
        </span>
        <h2 className="text-4xl md:text-5xl text-[var(--title-color)] font-black leading-tight">
          How to order from <br className="hidden md:block"/> 
          <span className="text-[var(--first-color)]">StreetWarm</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connection Line Desktop */}
        <div className="hidden md:block absolute top-[5rem] left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-gray-200 via-[var(--first-color)] to-gray-200 opacity-30 z-0"></div>

        {/* STEP CARD 1 */}
        <div className="relative z-10 bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div className="w-16 h-16 rounded-2xl bg-[var(--title-color)] text-white flex items-center justify-center text-2xl font-black mb-8 transition-colors duration-300 group-hover:bg-[var(--first-color)] shadow-lg mx-auto md:mx-0">
            01
          </div>
          <h3 className="text-xl font-bold text-[var(--title-color)] mb-4 text-center md:text-left">Choose Products</h3>
          <p className="text-gray-500 leading-relaxed text-center md:text-left">
            Browse our exclusive collections and add your favorite streetwear pieces to your shopping cart with just a few clicks.
          </p>
        </div>

        {/* STEP CARD 2 */}
        <div className="relative z-10 bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] mt-0 md:mt-12">
          <div className="w-16 h-16 rounded-2xl bg-[var(--title-color)] text-white flex items-center justify-center text-2xl font-black mb-8 transition-colors duration-300 group-hover:bg-[var(--first-color)] shadow-lg mx-auto md:mx-0">
            02
          </div>
          <h3 className="text-xl font-bold text-[var(--title-color)] mb-4 text-center md:text-left">Place an order</h3>
          <p className="text-gray-500 leading-relaxed text-center md:text-left">
            Proceed to our secure checkout, fill in your details, and complete your purchase using our multiple payment methods.
          </p>
        </div>

        {/* STEP CARD 3 */}
        <div className="relative z-10 bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div className="w-16 h-16 rounded-2xl bg-[var(--title-color)] text-white flex items-center justify-center text-2xl font-black mb-8 transition-colors duration-300 group-hover:bg-[var(--first-color)] shadow-lg mx-auto md:mx-0">
            03
          </div>
          <h3 className="text-xl font-bold text-[var(--title-color)] mb-4 text-center md:text-left">Get Delivered</h3>
          <p className="text-gray-500 leading-relaxed text-center md:text-left">
            Track your order in real-time. We ensure fast and reliable shipping straight to your doorstep within days.
          </p>
        </div>
      </div>
    </section>
  );
}
