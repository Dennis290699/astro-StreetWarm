export default function Discount() {
  return (
    <section className="py-28">
      <div className="max-w-[968px] mx-auto px-6">
        <div className="bg-[var(--container-color)] rounded-[3rem] p-12 md:p-0 md:grid md:grid-cols-2 flex flex-col items-center gap-12 md:gap-28 md:py-12 shadow-[0_4px_16px_hsla(0,0%,15%,0.05)]">
          <img 
            src="/assets/productos/discount.png" 
            alt="Discount" 
            className="w-[200px] md:justify-self-end md:ml-auto" 
          />

          <div className="text-center md:text-left md:pl-16">
            <h2 className="text-[var(--h2-font-size)] text-[var(--title-color)] font-medium leading-[130%] mb-8">
              50% <br />On New products
            </h2>
            <a 
              href="#" 
              className="inline-block bg-[var(--first-color)] text-white px-7 py-4 rounded-lg font-medium transition-colors hover:bg-[#ff9900]"
            >
              Go to new
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
