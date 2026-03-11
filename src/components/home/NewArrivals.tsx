import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAppStore } from '../../store/useAppStore';
import { PRODUCTS } from '../../data/products';

export default function NewArrivals() {
  const addToCart = useAppStore((state) => state.addToCart);
  
  // Filtrar los que tengan tag "New"
  const NEW_ARRIVALS = PRODUCTS.filter(p => p.tag === 'New');

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 2xl:px-0">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-[var(--first-color)] text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            Fresh Drops
          </span>
          <h2 className="text-4xl md:text-5xl text-[var(--title-color)] font-black leading-tight">
            New <span className="text-[var(--first-color)]">Arrivals</span>
          </h2>
        </div>
        <a href="/shop" className="hidden md:inline-flex items-center gap-2 text-[var(--title-color)] font-bold hover:text-[var(--first-color)] transition-colors group">
          View All Products
          <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
        </a>
      </div>

      <div className="pt-4 relative">
        <Swiper
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="new-swiper !px-4 !-mx-4 !py-8 !-my-8"
        >
          {NEW_ARRIVALS.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative bg-white pt-8 pb-6 px-6 text-center overflow-hidden group transition-all duration-500 hover:-translate-y-3 rounded-3xl border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                
                {/* Custom Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[var(--title-color)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    New
                  </span>
                </div>
                
                {/* Product Image */}
                <div className="relative h-48 mb-6 flex justify-center items-center">
                  <div className="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out z-0"></div>
                  <img src={product.image} alt={product.name} className="relative z-10 w-3/4 max-h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
                </div>
                
                {/* Product Info */}
                <div className="text-left">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{product.category}</span>
                  <h3 className="text-xl font-bold text-[var(--title-color)] mb-2 truncate transition-colors group-hover:text-[var(--first-color)] cursor-pointer">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-black text-[var(--title-color)]">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through font-medium">${product.discount}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 text-[var(--title-color)] font-bold py-4 rounded-xl transition-all duration-300 group-hover:bg-[var(--first-color)] group-hover:text-white hover:opacity-90"
                  title="Add to cart"
                >
                  <i className="bx bx-cart-add text-2xl"></i>
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <a href="/shop" className="inline-flex items-center gap-2 text-[var(--title-color)] font-bold hover:text-[var(--first-color)] transition-colors group">
          View All Products
          <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
        </a>
      </div>
    </section>
  );
}
