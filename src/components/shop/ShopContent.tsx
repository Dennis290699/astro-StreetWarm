import { useAppStore } from '../../store/useAppStore';
import { PRODUCTS } from '../../data/products';

export default function ShopContent() {
  const addToCart = useAppStore((state) => state.addToCart);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_3.3fr] gap-7 py-4">
      {/* SIDEBAR */}
      <div className="bg-[var(--container-color)] p-7 rounded-2xl shadow-[0_4px_16px_hsla(0,0%,15%,0.05)] h-fit">
        <h3 className="text-[var(--h3-font-size)] uppercase font-medium mb-5 text-[var(--title-color)]">Select Filters</h3>
        
        <div className="mb-6">
          <h3 className="text-[var(--normal-font-size)] font-medium text-[var(--title-color)] mb-2 mt-5">Condition</h3>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">New</p> <span>(13)</span>
          </div>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">Sale</p> <span>(13)</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[var(--normal-font-size)] font-medium text-[var(--title-color)] mb-2 mt-5">Size</h3>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">S</p> <span>(13)</span>
          </div>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">M</p> <span>(15)</span>
          </div>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">L</p> <span>(6)</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[var(--normal-font-size)] font-medium text-[var(--title-color)] mb-2 mt-5">Categories</h3>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">Men</p> <span>(2)</span>
          </div>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">Women</p> <span>(4)</span>
          </div>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">Kids</p> <span>(6)</span>
          </div>
          <div className="flex items-center mb-2 text-[var(--text-color)] text-[var(--small-font-size)]">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="flex-1">Other</p> <span>(4)</span>
          </div>
        </div>
      </div>

      {/* ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="relative bg-[var(--container-color)] pt-8 pb-8 rounded-2xl text-center overflow-hidden group transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_16px_hsla(0,0%,15%,0.05)]">
            <div className="absolute top-[8%] left-[8%] bg-[var(--first-color)] text-white text-[var(--small-font-size)] px-2 py-1 rounded">
              {product.tag}
            </div>
            
            <img src={product.image} alt={product.name} className="w-[150px] mx-auto mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
            
            <h3 className="text-[var(--h2-font-size)] font-medium text-[var(--title-color)] leading-snug">{product.name}</h3>
            <span className="block text-[var(--small-font-size)] text-[var(--text-color)] mb-4">{product.category}</span>

            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-medium text-[var(--title-color)]">${product.price}</span>
              <span className="text-[var(--first-color)] text-[var(--smaller-font-size)] line-through font-medium">${product.discount}</span>
            </div>

            <button 
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
              className="absolute bottom-0 -right-12 inline-flex p-2 bg-[var(--first-color)] text-white rounded-[.25rem_.25rem_.75rem_.25rem] transition-all duration-300 group-hover:right-0 hover:bg-[#ff9900]"
              title="Add to Cart"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
