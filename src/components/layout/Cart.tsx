import { useAppStore } from '../../store/useAppStore';

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity } = useAppStore();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 w-full h-full bg-[var(--body-color)] z-[100] transition-all duration-300 ${
        isCartOpen ? 'right-0' : '-right-full'
      } md:w-[450px] md:shadow-[-2px_0_4px_hsla(0,0%,15%,0.1)]`}
      id="cart"
    >
      <i
        className="bx bx-x absolute top-[1.25rem] right-[1.25rem] text-2xl text-[var(--title-color)] cursor-pointer"
        onClick={closeCart}
      ></i>

      <h2 className="text-center text-[var(--h2-font-size)] mt-12 mb-8">My Cart</h2>

      <div className="flex flex-col gap-6 px-8 overflow-y-auto max-h-[60vh]">
        {cartItems.length === 0 ? (
          <p className="text-center text-[var(--text-color)]">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <article key={item.id} className="flex items-center gap-4 bg-[var(--container-color)] p-4 rounded-xl shadow-[0_2px_4px_hsla(0,0%,15%,0.1)]">
              <div className="w-[80px] bg-[var(--body-color)] p-2 rounded-lg">
                <img src={item.image} alt={item.name} className="w-full" />
              </div>

              <div className="flex-1">
                <h3 className="text-[var(--small-font-size)] text-[var(--title-color)] mb-1">{item.name}</h3>
                <span className="block text-[var(--small-font-size)] text-[var(--first-color)] mb-2">${item.price}</span>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex p-[.25rem] bg-[var(--body-color)] cursor-pointer rounded-sm"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <i className="bx bx-minus"></i>
                    </span>

                    <span className="text-[var(--small-font-size)]">{item.quantity}</span>

                    <span
                      className="inline-flex p-[.25rem] bg-[var(--body-color)] cursor-pointer rounded-sm"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <i className="bx bx-plus"></i>
                    </span>
                  </div>

                  <i
                    className="bx bx-trash-alt text-[var(--first-color)] cursor-pointer text-lg"
                    onClick={() => removeFromCart(item.id)}
                  ></i>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="absolute bottom-0 w-full p-8 bg-[var(--container-color)] md:bg-transparent shadow-[0_-2px_4px_hsla(0,0%,15%,0.1)] md:shadow-none">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[var(--text-color)]">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</span>
          <span className="text-[var(--title-color)] font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-[var(--first-color)] hover:bg-[#ff9900] text-white py-4 rounded-lg font-medium transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}
