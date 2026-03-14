import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAppStore } from '../../store/useAppStore';
import { PRODUCTS, type Product } from '../../data/products';

export default function ProductDetails({ product }: { product: Product }) {
  const addToCart = useAppStore((state) => state.addToCart);
  
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(product.colors ? product.colors[0] : null);

  // Fallback to one image if mock doesn't have a gallery
  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    // Si la prenda tiene colores y no escogió uno (aunque por defecto viene el primero)
    if (product.colors && product.colors.length > 0 && !selectedColor) {
       alert("Please select a color before adding to cart.");
       return;
    }
    // Si es ropa, sugerir talla (para este demo lo simulo simple)
    if (product.category === 'Clothing' && !selectedSize) {
       alert("Please select a size first.");
       return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      size: selectedSize || undefined,
      color: selectedColor || undefined
    });
    
    // Also open the cart slider smoothly using Zustand (if you had an openCart action, you would dispatch it here, otherwise we rely on user manually opening or notification)
  };

  const isColorMissing = product.colors && product.colors.length > 0 && !selectedColor;
  const isSizeMissing = product.category === 'Clothing' && !selectedSize;
  const isAddToCartDisabled = isColorMissing || isSizeMissing;

  return (
    <div className="max-w-7xl mx-auto px-6 2xl:px-0 pb-6 lg:pb-10">

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-8">
        <a href="/" className="hover:text-[var(--first-color)] transition-colors">Home</a>
        <i className="bx bx-chevron-right text-gray-400"></i>
        <a href="/shop" className="hover:text-[var(--first-color)] transition-colors">Shop</a>
        <i className="bx bx-chevron-right text-gray-400"></i>
        <span className="text-[var(--title-color)] truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* IMAGE GALLERY */}
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible custom-scrollbar pb-2 md:pb-0 w-full md:w-24 shrink-0">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                title={`View image ${idx + 1}`}
                className={`flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-50 border-2 shrink-0 transition-all ${
                  activeImageIdx === idx ? 'border-[var(--title-color)] z-10 shadow-md' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-[85%] h-[85%] object-contain" />
              </button>
            ))}
          </div>

          <div className="flex-1 bg-gray-50 rounded-[2.5rem] flex items-center justify-center p-10 relative overflow-hidden group min-h-[400px]">
            <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl transform scale-150 z-0"></div>
            {product.tag && (
              <div className="absolute top-8 left-8 z-20">
                <span className="bg-[var(--title-color)] text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                  {product.tag}
                </span>
              </div>
            )}
            <img
              src={images[activeImageIdx]}
              alt={product.name}
              className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col flex-1 pt-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 text-[var(--first-color)] text-xs font-bold tracking-widest uppercase mb-6 w-fit border border-orange-100">
            {product.category}
          </span>

          <h1 className="text-4xl lg:text-5xl font-black text-[var(--title-color)] leading-tight mb-4">
            {product.name}
          </h1>

          <div className="flex items-end gap-4 mb-8">
            <span className="text-4xl font-black text-[var(--first-color)]">${product.price}</span>
            {product.discount && (
              <span className="text-xl text-gray-400 font-bold line-through mb-1">${product.discount}</span>
            )}
          </div>

          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            High-quality {product.category.toLowerCase()} designed for maximum comfort and premium style.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* COLOR SELECTOR */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider mb-4">Select Color</h3>
              <div className="flex gap-4">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-[3px] transition-all flex items-center justify-center ${selectedColor === color ? 'border-[var(--title-color)] scale-110 shadow-lg' : 'border-white ring-1 ring-gray-200 hover:scale-105 shadow-sm'}`}
                    style={{ backgroundColor: color }}
                    title={`Color ${color}`}
                  >
                    {selectedColor === color && <i className="bx bx-check text-white text-2xl drop-shadow-md mix-blend-difference opacity-80"></i>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SIZE SELECTOR */}
          <div className="mb-10">
            <h3 className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider mb-4">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-full border-2 transition-all flex items-center justify-center font-bold outline-none ${
                    selectedSize === size
                      ? 'border-[var(--title-color)] bg-[var(--title-color)] text-white shadow-md'
                      : 'border-gray-100 text-gray-500 hover:border-[var(--title-color)] hover:text-[var(--title-color)] focus:border-[var(--title-color)] focus:bg-[var(--title-color)]/5 focus:text-[var(--title-color)]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mt-auto">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl border border-gray-100 p-2 sm:w-40 shrink-0">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-500 hover:text-[var(--title-color)] transition-colors"
                title="Decrease quantity"
              >
                <i className="bx bx-minus text-xl"></i>
              </button>
              <span className="font-bold text-lg text-[var(--title-color)]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-500 hover:text-[var(--title-color)] transition-colors"
                title="Increase quantity"
              >
                <i className="bx bx-plus text-xl"></i>
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={Boolean(isAddToCartDisabled)}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 ${
                isAddToCartDisabled 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none hover:-translate-y-0 hover:bg-gray-200' 
                  : 'bg-[var(--title-color)] text-white hover:bg-[var(--first-color)] hover:shadow-[0_15px_25px_rgba(255,153,0,0.25)]'
              }`}
              title={isAddToCartDisabled ? "Please select missing options" : "Add to Cart"}
            >
              <i className="bx bx-cart-add text-2xl"></i>
              Add to Cart
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col gap-4 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-3"><i className="bx bx-check-shield text-[var(--first-color)] text-xl"></i> 1 Year Minimum Warranty</div>
            <div className="flex items-center gap-3"><i className="bx bx-refresh text-[var(--first-color)] text-xl"></i> 30 Days Free Return</div>
            <div className="flex items-center gap-3"><i className="bx bx-car text-[var(--first-color)] text-xl"></i> Free Delivery for orders over $50</div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16 lg:mt-24 pt-8 lg:pt-12 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-[var(--title-color)] font-black leading-tight">
              Related <span className="text-[var(--first-color)]">Products</span>
            </h2>
          </div>
          <a href="/shop" className="hidden md:inline-flex items-center gap-2 text-[var(--title-color)] font-bold hover:text-[var(--first-color)] transition-colors group">
            Shop All
            <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2.5, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
            className="!pb-14 !pt-4 !px-4 -mx-4"
          >
            {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5).map((relatedProduct) => (
              <SwiperSlide key={relatedProduct.id} className="!h-auto flex">
                <div className="w-full group bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] relative overflow-hidden h-full flex flex-col hover:-translate-y-1">
                  {relatedProduct.tag && (
                    <span className="absolute top-4 left-4 z-10 bg-[var(--title-color)] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {relatedProduct.tag}
                    </span>
                  )}
                  <a href={`/product/${relatedProduct.id}`} className="block relative h-40 mb-6 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out z-0"></div>
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="relative z-10 h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                  </a>
                  
                  <div className="text-left mt-auto">
                    <a href={`/product/${relatedProduct.id}`} className="block">
                      <h3 className="text-lg font-bold text-[var(--title-color)] mb-1 group-hover:text-[var(--first-color)] transition-colors line-clamp-1">{relatedProduct.name}</h3>
                    </a>
                    <div className="flex items-center justify-between mt-2">
                       <span className="text-xl font-black text-[var(--first-color)]">${relatedProduct.price}</span>
                       <button 
                         onClick={(e) => {
                           e.preventDefault();
                           addToCart({
                             id: relatedProduct.id,
                             name: relatedProduct.name,
                             price: relatedProduct.price,
                             quantity: 1,
                             image: relatedProduct.image
                           });
                         }}
                         title="Quick Add"
                         className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-[var(--title-color)] hover:bg-[var(--title-color)] hover:text-white transition-colors"
                       >
                         <i className="bx bx-cart-add text-xl"></i>
                       </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  );
}
