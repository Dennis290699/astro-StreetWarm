export default function Newsletter() {
  return (
    <section className="py-28 max-w-[968px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr] justify-center text-center">
        <h2 className="text-[var(--h1-font-size)] text-[var(--title-color)] font-medium mb-12">Our NewsLetter</h2>
        <p className="px-12 mb-6 text-[var(--text-color)]">
          Promotion new products and sales. Directly to your inbox
        </p>

        <form className="bg-[var(--container-color)] p-4 flex justify-between rounded-xl shadow-[0_4px_16px_hsla(0,0%,15%,0.05)]">
          <input 
            type="text" 
            placeholder="Enter your e-mail" 
            className="w-[70%] px-2 bg-transparent text-[var(--title-color)] outline-none"
          />
          <button className="bg-[var(--first-color)] hover:bg-[#ff9900] text-white px-7 py-4 rounded-lg font-medium transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
