import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSwiper() {
  return (
    <section className="max-w-[968px] mx-auto px-6">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        loop={true}
        className="home-swiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="pt-36 pb-8 md:grid md:grid-cols-2 gap-12 items-center">
            <div className="relative pt-8 flex justify-center order-1 md:order-2">
              <img src="/assets/productos/slide-2.png" alt="" className="h-[420px] -translate-y-12" />
              
              <div className="w-2 h-2 bg-[var(--title-color)] rounded-full absolute bottom-[15%] left-[45%] 
                after:content-[''] after:absolute after:w-[1px] after:h-[75px] after:bg-[var(--title-color)] after:top-0 after:right-[45%]"
              ></div>

              <div className="absolute bottom-0 right-[58%] text-right">
                <h4 className="block text-[var(--small-font-size)] text-[var(--title-color)] font-medium">The Cardigan</h4>
                <span className="block text-[var(--small-font-size)] text-[var(--text-color)]">Woolen</span>
              </div>
            </div>

            <div className="order-2 md:order-1 mt-8 md:mt-0">
              <h3 className="text-[var(--h3-font-size)] uppercase mb-4 text-[var(--title-color)] font-medium">#1 TRENDING ITEM</h3>
              <h1 className="text-[var(--biggest-font-size)] font-bold leading-[109%] mb-6 text-[var(--title-color)]">
                ORIGINAL <br />IS NEVER <br />FINISHED!!
              </h1>
              <p className="mb-10 lg:pr-8 text-[var(--text-color)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium ut, vel necessitatibus amet corrupti exercitationem aut quasi autem sit dicta aliquam provident in consequuntur officia facilis debitis minima quidem!
              </p>

              <div className="flex justify-between md:justify-start gap-8 items-center">
                <a href="/details" className="inline-block bg-[var(--first-color)] text-white px-7 py-4 rounded-lg font-medium transition-colors hover:bg-orange-500">
                  Buy Now
                </a>
                <a href="/details" className="inline-flex items-center gap-2 text-[var(--title-color)] font-medium group transition-colors hover:text-[var(--first-color)]">
                  View Details
                  <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="pt-36 pb-8 md:grid md:grid-cols-2 gap-12 items-center">
            <div className="relative pt-8 flex justify-center order-1 md:order-2">
              <img src="/assets/productos/slide-3.png" alt="" className="h-[420px] -translate-y-12" />
              
              <div className="w-2 h-2 bg-[var(--title-color)] rounded-full absolute bottom-[15%] left-[45%] 
                after:content-[''] after:absolute after:w-[1px] after:h-[75px] after:bg-[var(--title-color)] after:top-0 after:right-[45%]"
              ></div>

              <div className="absolute bottom-0 right-[58%] text-right">
                <h4 className="block text-[var(--small-font-size)] text-[var(--title-color)] font-medium">Jqeezy</h4>
                <span className="block text-[var(--small-font-size)] text-[var(--text-color)]">Ski Suit</span>
              </div>
            </div>

            <div className="order-2 md:order-1 mt-8 md:mt-0">
              <h3 className="text-[var(--h3-font-size)] uppercase mb-4 text-[var(--title-color)] font-medium">#2 top best duo</h3>
              <h1 className="text-[var(--biggest-font-size)] font-bold leading-[109%] mb-6 text-[var(--title-color)]">
                FALL <br />WINTER <br />2024
              </h1>
              <p className="mb-10 lg:pr-8 text-[var(--text-color)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium ut, vel necessitatibus amet corrupti exercitationem aut quasi autem sit dicta aliquam provident in consequuntur officia facilis debitis minima quidem!
              </p>

              <div className="flex justify-between md:justify-start gap-8 items-center">
                <a href="/details" className="inline-block bg-[var(--first-color)] text-white px-7 py-4 rounded-lg font-medium transition-colors hover:bg-orange-500">
                  Buy Now
                </a>
                <a href="/details" className="inline-flex items-center gap-2 text-[var(--title-color)] font-medium group transition-colors hover:text-[var(--first-color)]">
                  View Details
                  <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="pt-36 pb-8 md:grid md:grid-cols-2 gap-12 items-center">
            <div className="relative pt-8 flex justify-center order-1 md:order-2">
              <img src="/assets/productos/slide-1.png" alt="" className="h-[420px] -translate-y-12" />
              
              <div className="w-2 h-2 bg-[var(--title-color)] rounded-full absolute bottom-[15%] left-[45%] 
                after:content-[''] after:absolute after:w-[1px] after:h-[75px] after:bg-[var(--title-color)] after:top-0 after:right-[45%]"
              ></div>

              <div className="absolute bottom-0 right-[58%] text-right">
                <h4 className="block text-[var(--small-font-size)] text-[var(--title-color)] font-medium">Jurry</h4>
                <span className="block text-[var(--small-font-size)] text-[var(--text-color)]">Zipper</span>
              </div>
            </div>

            <div className="order-2 md:order-1 mt-8 md:mt-0">
              <h3 className="text-[var(--h3-font-size)] uppercase mb-4 text-[var(--title-color)] font-medium">#3 TRENDING ITEM</h3>
              <h1 className="text-[var(--biggest-font-size)] font-bold leading-[109%] mb-6 text-[var(--title-color)]">
                SALE 20% <br />OFF ON <br />EVERYTHING
              </h1>
              <p className="mb-10 lg:pr-8 text-[var(--text-color)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium ut, vel necessitatibus amet corrupti exercitationem aut quasi autem sit dicta aliquam provident in consequuntur officia facilis debitis minima quidem!
              </p>

              <div className="flex justify-between md:justify-start gap-8 items-center">
                <a href="/details" className="inline-block bg-[var(--first-color)] text-white px-7 py-4 rounded-lg font-medium transition-colors hover:bg-orange-500">
                  Buy Now
                </a>
                <a href="/details" className="inline-flex items-center gap-2 text-[var(--title-color)] font-medium group transition-colors hover:text-[var(--first-color)]">
                  View Details
                  <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Note: Swiper custom pagination styles should be added to global.css to match exactly */}
      <style dangerouslySetInnerHTML={{__html: `
        .home-swiper .swiper-pagination { margin-top: 2.5rem; position: relative; }
        .home-swiper .swiper-pagination-bullet { width: 5px; height: 5px; background: var(--title-color); opacity: 1; transition: 0.3s; }
        .home-swiper .swiper-pagination-bullet-active { width: 1.5rem; border-radius: 0.5rem; }
      `}} />
    </section>
  );
}
