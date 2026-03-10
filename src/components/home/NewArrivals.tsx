import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAppStore } from '../../store/useAppStore';

const NEW_ARRIVALS = [
  { id: 'n1', name: 'Windbreaker Jacked', category: 'Accesory', price: 14.99, discount: 29.99, image: '/assets/productos/new-1.png' },
  { id: 'n2', name: 'Air Jordan Zipper', category: 'Accesory', price: 11.99, discount: 21.99, image: '/assets/productos/new-2.png' },
  { id: 'n3', name: 'Fur Jacked', category: 'Accesory', price: 4.99, discount: 9.99, image: '/assets/productos/new-3.png' },
  { id: 'n4', name: 'Fleece Jacked', category: 'Accesory', price: 24.99, discount: 49.99, image: '/assets/productos/new-4.png' },
  { id: 'n5', name: 'Nike Hoodie', category: 'Accesory', price: 7.99, discount: 14.99, image: '/assets/productos/new-5.png' },
  { id: 'n6', name: 'Fleece Jacked', category: 'Accesory', price: 5.99, discount: 12.99, image: '/assets/productos/new-6.png' },
];

export default function NewArrivals() {
  const addToCart = useAppStore((state) => state.addToCart);

  return (
    <section className="py-28 max-w-[968px] mx-auto px-6">
      <h2 className="text-[var(--h1-font-size)] text-center text-[var(--title-color)] font-medium mb-12">New Arrivals</h2>

      <div className="pt-4">
        <Swiper
          spaceBetween={24}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="new-swiper"
        >
          {NEW_ARRIVALS.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative bg-[var(--container-color)] pt-8 pb-8 rounded-2xl text-center overflow-hidden group transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_16px_hsla(0,0%,15%,0.05)]">
                <div className="absolute top-[8%] left-[8%] bg-[var(--first-color)] text-white text-[var(--small-font-size)] px-2 py-1 rounded">
                  New
                </div>
                
                <img src={product.image} alt={product.name} className="w-[150px] mx-auto mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
                
                <h3 className="text-[var(--h3-font-size)] font-medium text-[var(--title-color)]">{product.name}</h3>
                <span className="block text-[var(--small-font-size)] text-[var(--text-color)] mb-4">{product.category}</span>

                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-medium text-[var(--title-color)]">${product.price}</span>
                  <span className="text-[var(--first-color)] text-[var(--smaller-font-size)] line-through font-medium">${product.discount}</span>
                </div>

                <button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
                  className="absolute bottom-0 -right-12 inline-flex p-2 bg-[var(--first-color)] text-white rounded-[.25rem_.25rem_.75rem_.25rem] transition-all duration-300 group-hover:right-0 hover:bg-[#ff9900]"
                >
                  <i className="bx bx-cart-alt text-xl"></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
