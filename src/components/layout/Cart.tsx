import { useAppStore } from '../../store/useAppStore';

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity } = useAppStore();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* CART PANEL */}
      <div
        className={`fixed top-0 right-0 w-[90%] sm:w-[450px] h-full bg-white z-[101] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="cart"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[var(--title-color)] flex items-center gap-3">
            <i className="bx bx-shopping-bag text-3xl text-[var(--first-color)]"></i> 
            My Cart
          </h2>
          <button
            className="text-3xl text-gray-400 hover:text-red-500 transition-colors"
            onClick={closeCart}
            title="Close Cart"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* CART ITEMS SECTIONS */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col gap-6 custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 opacity-70">
              <i className="bx bx-cart text-8xl mb-4 text-gray-200"></i>
              <p className="text-xl font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <article key={item.id} className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-lg group">
                <div className="w-full sm:w-[100px] h-[100px] shrink-0 bg-white rounded-xl p-2 shadow-sm relative overflow-hidden flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="flex-1 w-full flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[15px] font-bold text-[var(--title-color)] leading-tight clamp-2">{item.name}</h3>
                    <button
                      className="text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm shrink-0 ml-2"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <i className="bx bx-trash-alt text-lg"></i>
                    </button>
                  </div>
                  
                  {/* Variants Row */}
                  {(item.size || item.color) && (
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mt-1 mb-2">
                       {item.size && (
                         <span className="bg-white border border-gray-200 px-2.5 py-0.5 rounded-md shadow-sm">Size: {item.size}</span>
                       )}
                       {item.color && (
                         <span className="flex items-center gap-1.5 bg-white border border-gray-200 px-2.5 py-0.5 rounded-md shadow-sm">
                           Color: <span className="w-3 h-3 rounded-full shadow-inner border border-black/10" style={{ backgroundColor: item.color }}></span>
                         </span>
                       )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-lg font-black text-[var(--first-color)]">${item.price.toFixed(2)}</span>

                    <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden">
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[var(--title-color)] hover:bg-gray-100 transition-colors"
                        onClick={() => updateQuantity(item.id, -1)}
                        title="Decrease quantity"
                      >
                        <i className="bx bx-minus"></i>
                      </button>

                      <span className="w-8 text-center text-sm font-bold text-[var(--title-color)]">{item.quantity}</span>

                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[var(--title-color)] hover:bg-gray-100 transition-colors"
                        onClick={() => updateQuantity(item.id, 1)}
                        title="Increase quantity"
                      >
                        <i className="bx bx-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 sm:p-8 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium tracking-wide">
                Total ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})
              </span>
              <span className="text-3xl font-black text-[var(--title-color)]">${total.toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-[var(--title-color)] text-white py-4 rounded-xl font-bold text-lg uppercase tracking-widest transition-all duration-300 hover:bg-[var(--first-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/30 hover:-translate-y-1">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: #cbd5e1; }
      `}} />
    </>
  );
}
