export default function Newsletter() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 2xl:px-0">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--first-color)] rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--title-color)] rounded-full blur-3xl opacity-5 translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <i className="bx bx-envelope text-5xl text-[var(--first-color)] mb-6 inline-block"></i>
          <h2 className="text-4xl md:text-5xl text-[var(--title-color)] font-black leading-tight mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>

          <form className="bg-white p-2 flex flex-col sm:flex-row justify-between rounded-full shadow-lg border border-gray-100 max-w-lg mx-auto transition-shadow focus-within:shadow-xl focus-within:border-[var(--first-color)]/30">
            <div className="flex items-center flex-1 px-4 py-2 sm:py-0">
              <i className="bx bx-mail-send text-gray-400 text-xl mr-3"></i>
              <input 
                type="email" 
                placeholder="Enter your e-mail address" 
                title="Email address"
                required
                className="w-full bg-transparent text-[var(--title-color)] outline-none placeholder:text-gray-400"
              />
            </div>
            <button 
              type="submit"
              className="bg-[var(--title-color)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[var(--first-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/30 w-full sm:w-auto mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
