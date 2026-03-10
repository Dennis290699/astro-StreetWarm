export default function Steps() {
  return (
    <section className="py-28 max-w-[968px] mx-auto px-6">
      <div className="bg-[var(--container-color)] p-14 rounded-2xl shadow-[0_4px_16px_hsla(0,0%,15%,0.05)]">
        <h2 className="text-[var(--h1-font-size)] text-center text-[var(--title-color)] font-medium mb-12">
          How to order products <br />from B4LB3R1TH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* STEP CARD 1 */}
          <div className="bg-[var(--body-color)] p-10 pr-12 pb-8 rounded-2xl group transition-transform hover:-translate-y-1">
            <div className="inline-block bg-[var(--first-color)] text-white px-3 py-2 rounded font-medium text-[var(--h2-font-size)] mb-6 transition-transform group-hover:-translate-y-1">
              01
            </div>
            <h3 className="text-[var(--normal-font-size)] font-medium text-[var(--title-color)] mb-2">Choose Products</h3>
            <p className="text-[var(--small-font-size)] text-[var(--text-color)] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod non? Nisi architecto
              inventore nostrum quasi at. Omnis ipsam veritatis temporibus, dolorem dolore a, minus
              accusamus, neque quo dicta perferendis!
            </p>
          </div>

          {/* STEP CARD 2 */}
          <div className="bg-[var(--body-color)] p-10 pr-12 pb-8 rounded-2xl group transition-transform hover:-translate-y-1">
            <div className="inline-block bg-[var(--first-color)] text-white px-3 py-2 rounded font-medium text-[var(--h2-font-size)] mb-6 transition-transform group-hover:-translate-y-1">
              02
            </div>
            <h3 className="text-[var(--normal-font-size)] font-medium text-[var(--title-color)] mb-2">Place an order</h3>
            <p className="text-[var(--small-font-size)] text-[var(--text-color)] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod non? Nisi architecto
              inventore nostrum quasi at. Omnis ipsam veritatis temporibus, dolorem dolore a, minus
              accusamus, neque quo dicta perferendis!
            </p>
          </div>

          {/* STEP CARD 3 */}
          <div className="bg-[var(--body-color)] p-10 pr-12 pb-8 rounded-2xl group transition-transform hover:-translate-y-1">
            <div className="inline-block bg-[var(--first-color)] text-white px-3 py-2 rounded font-medium text-[var(--h2-font-size)] mb-6 transition-transform group-hover:-translate-y-1">
              03
            </div>
            <h3 className="text-[var(--normal-font-size)] font-medium text-[var(--title-color)] mb-2">Get order delivered</h3>
            <p className="text-[var(--small-font-size)] text-[var(--text-color)] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod non? Nisi architecto
              inventore nostrum quasi at. Omnis ipsam veritatis temporibus, dolorem dolore a, minus
              accusamus, neque quo dicta perferendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
