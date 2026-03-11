import { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import type { Product } from '../../data/products';

export default function ProductDetails({ product }: { product: Product }) {
  const addToCart = useAppStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  
  // Mocking multiple images using the same one for demonstration
  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 2xl:px-0 py-12 lg:py-20">
      
      {/* BREADCRUMB */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-12">
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
                className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-50 border-2 overflow-hidden shrink-0 transition-all ${
                  activeImageIdx === idx ? 'border-[var(--title-color)] scale-105 shadow-md' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-contain p-2" />
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

          <div className="mb-10">
            <h3 className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider mb-4">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size}
                  className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center font-bold text-gray-500 transition-all hover:border-[var(--title-color)] hover:text-[var(--title-color)] focus:border-[var(--title-color)] focus:bg-[var(--title-color)] focus:text-white"
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
              className="flex-1 bg-[var(--title-color)] text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[var(--first-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/30 hover:-translate-y-1 flex items-center justify-center gap-3"
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
    </div>
  );
}
