import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSwiper() {
  return (
    <section className="max-w-7xl mx-auto px-6 2xl:px-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        loop={true}
        className="home-swiper overflow-hidden"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="pt-24 pb-12 lg:pt-32 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
            <div className="relative flex justify-center order-1 lg:order-2 w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-50 -z-10 w-[70%] h-[70%] m-auto"></div>
              <img src="/assets/productos/slide-2.png" alt="The Cardigan" className="h-[350px] sm:h-[450px] lg:h-[650px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
              
              <div className="hidden md:flex flex-col absolute bottom-[15%] left-[10%] text-left bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--first-color)] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--first-color)] animate-pulse"></span>
                  Trending
                </span>
                <h4 className="text-xl text-[var(--title-color)] font-extrabold leading-tight">The Cardigan</h4>
                <span className="text-sm text-gray-500 font-medium">Premium Woolen</span>
              </div>
            </div>

            <div className="order-2 lg:order-1 flex flex-col justify-center py-8">
              <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-[var(--title-color)] text-xs md:text-sm font-bold tracking-widest uppercase mb-6 w-fit border border-gray-200 shadow-sm">
                #1 Top Trending
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black leading-[1.05] tracking-tight mb-8 text-[var(--title-color)]">
                ORIGINAL <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--title-color)] to-[var(--first-color)]">
                  IS NEVER
                </span> 
                <br/>
                FINISHED!!
              </h1>
              <p className="mb-10 text-base md:text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                Explora la nueva colección que está rompiendo esquemas. Diseños exclusivos pensados para destacar tu estilo en cualquier ocasión.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="/shop" className="inline-flex items-center justify-center bg-[var(--title-color)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[var(--first-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/40 hover:-translate-y-1">
                  Shop Now
                </a>
                <a href="/shop" className="inline-flex items-center gap-3 text-[var(--title-color)] font-semibold group transition-all hover:text-[var(--first-color)]">
                  View Collection
                  <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--first-color)]/10 transition-colors">
                    <i className="bx bx-right-arrow-alt text-2xl transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="pt-24 pb-12 lg:pt-32 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
            <div className="relative flex justify-center order-1 lg:order-2 w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-50 -z-10 w-[70%] h-[70%] m-auto"></div>
              <img src="/assets/productos/slide-3.png" alt="Jqeezy Ski Suit" className="h-[350px] sm:h-[450px] lg:h-[650px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
              
              <div className="hidden md:flex flex-col absolute bottom-[15%] right-[10%] text-left bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-300">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--first-color)] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--first-color)] animate-pulse"></span>
                  Best Duo
                </span>
                <h4 className="text-xl text-[var(--title-color)] font-extrabold leading-tight">Jqeezy</h4>
                <span className="text-sm text-gray-500 font-medium">Urban Ski Suit</span>
              </div>
            </div>

            <div className="order-2 lg:order-1 flex flex-col justify-center py-8">
              <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-[var(--title-color)] text-xs md:text-sm font-bold tracking-widest uppercase mb-6 w-fit border border-gray-200 shadow-sm">
                #2 Top Pick
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black leading-[1.05] tracking-tight mb-8 text-[var(--title-color)]">
                FALL <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--title-color)] to-[var(--first-color)]">
                  WINTER
                </span> 
                <br/>
                2024
              </h1>
              <p className="mb-10 text-base md:text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                Prepárate para la temporada más fría con estilo ardiente. Materiales de alta calidad y diseño funcional.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="/shop" className="inline-flex items-center justify-center bg-[var(--title-color)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[var(--first-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/40 hover:-translate-y-1">
                  Shop Now
                </a>
                <a href="/shop" className="inline-flex items-center gap-3 text-[var(--title-color)] font-semibold group transition-all hover:text-[var(--first-color)]">
                  View Collection
                  <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--first-color)]/10 transition-colors">
                    <i className="bx bx-right-arrow-alt text-2xl transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="pt-24 pb-12 lg:pt-32 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
            <div className="relative flex justify-center order-1 lg:order-2 w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-50 -z-10 w-[70%] h-[70%] m-auto"></div>
              <img src="/assets/productos/slide-1.png" alt="Jurry Zipper" className="h-[350px] sm:h-[450px] lg:h-[650px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
              
              <div className="hidden md:flex flex-col absolute bottom-[15%] left-[10%] text-left bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Hot Deal
                </span>
                <h4 className="text-xl text-[var(--title-color)] font-extrabold leading-tight">Jurry</h4>
                <span className="text-sm text-gray-500 font-medium">Classic Zipper</span>
              </div>
            </div>

            <div className="order-2 lg:order-1 flex flex-col justify-center py-8">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-500 border border-red-200 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 w-fit shadow-sm">
                #3 Limited Time
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black leading-[1.05] tracking-tight mb-8 text-[var(--title-color)]">
                SALE 20% <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  OFF ON
                </span> 
                <br/>
                EVERYTHING
              </h1>
              <p className="mb-10 text-base md:text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                Descuentos increíbles en toda la tienda. Renueva tu guardarropa hoy sin vaciar tu billetera.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="/shop" className="inline-flex items-center justify-center bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/40 hover:-translate-y-1">
                  Claim Discount
                </a>
                <a href="/shop" className="inline-flex items-center gap-3 text-[var(--title-color)] font-semibold group transition-all hover:text-red-500">
                  Explore Deals
                  <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <i className="bx bx-right-arrow-alt text-2xl transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <style dangerouslySetInnerHTML={{__html: `
        .home-swiper .swiper-pagination { margin-top: 1rem; position: relative; }
        .home-swiper .swiper-pagination-bullet { width: 8px; height: 8px; background: #e5e7eb; opacity: 1; transition: all 0.3s ease; }
        .home-swiper .swiper-pagination-bullet-active { width: 2rem; border-radius: 1rem; background: var(--title-color); }
      `}} />
    </section>
  );
}
