import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store/useAppStore';
import { PRODUCTS } from '../../data/products';

const ITEMS_PER_PAGE = 6;

export default function ShopContent() {
  const addToCart = useAppStore((state) => state.addToCart);

  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive Categories and Tags
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  const tags = ['All', 'New', 'Sale']; // Mocked from UI design expectations

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesTag = activeTag === 'All' || product.tag === activeTag;
      return matchesSearch && matchesCategory && matchesTag;
    });

    if (sortOrder === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [searchTerm, activeCategory, activeTag, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
    setActiveTag('All');
    setSortOrder('newest');
    setCurrentPage(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_3.8fr] gap-10 py-8 lg:py-12 relative">
      {/* SIDEBAR: Filters & Search */}
      <aside className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 h-fit lg:sticky lg:top-28 z-30">
        
        {/* Search Bar */}
        <div className="mb-10">
          <label className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider mb-4 block">
            Search
          </label>
          <div className="relative">
            <i className="bx bx-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-gray-50 border border-gray-100 text-[var(--title-color)] p-4 pl-12 rounded-xl outline-none focus:border-[var(--first-color)] focus:bg-white transition-all shadow-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => handleSearchChange({ target: { value: '' } } as any)}
                title="Clear Search"
                aria-label="Clear Search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                <i className="bx bx-x text-xl"></i>
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider">Categories</h3>
            <span className="text-xs font-semibold text-[var(--first-color)] bg-orange-50 px-2 py-1 rounded-full">
              {filteredProducts.length} items
            </span>
          </div>

          <div className="flex flex-col gap-2 relative">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`relative flex items-center justify-between p-3 rounded-xl text-left font-medium transition-all duration-300 overflow-hidden border ${
                  activeCategory === category 
                    ? 'text-white border-[var(--title-color)] shadow-md' 
                    : 'text-gray-500 border-transparent hover:bg-gray-50 hover:border-gray-200 hover:text-[var(--title-color)]'
                }`}
              >
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeCategoryBg" 
                    className="absolute inset-0 bg-[var(--title-color)] rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
                {activeCategory === category && <i className="bx bx-check relative z-10"></i>}
              </button>
            ))}
          </div>
        </div>

        {/* Conditions / Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider mb-4 block">
            Condition
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`flex-1 py-2 px-4 rounded-xl font-bold text-sm transition-all border ${
                  activeTag === tag
                    ? 'bg-[var(--title-color)] text-white border-[var(--title-color)] shadow-md'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-[var(--title-color)] hover:text-[var(--title-color)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Sort By */}
        <div className="mb-2">
          <label className="text-sm font-bold text-[var(--title-color)] uppercase tracking-wider mb-4 block">
            Sort By
          </label>
          <div className="relative">
            <select 
              value={sortOrder}
              onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
              title="Sort By"
              aria-label="Sort By"
              className="w-full bg-gray-50 border border-gray-100 text-[var(--title-color)] p-4 rounded-xl outline-none focus:border-[var(--first-color)] focus:bg-white shadow-sm appearance-none cursor-pointer font-medium transition-all"
            >
              <option value="newest">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <i className="bx bx-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl"></i>
          </div>
        </div>
        
      </aside>

      {/* ITEMS GRID */}
      <div className="flex flex-col min-h-[600px]">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200 p-10">
            <i className="bx bx-package text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-[var(--title-color)] mb-2">No products found</h2>
            <p className="text-gray-500 max-w-sm">
              We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
            </p>
            <button 
              onClick={clearFilters}
              className="mt-6 bg-[var(--title-color)] text-white px-6 py-3 rounded-full font-bold hover:bg-[var(--first-color)] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {currentProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white pt-8 pb-6 px-6 text-center overflow-hidden group transition-all duration-500 rounded-3xl border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[var(--title-color)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {product.tag}
                    </span>
                  </div>
                  
                  <a href={`/product/${product.id}`} className="block relative h-48 mb-6 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out z-0"></div>
                    <img src={product.image} alt={product.name} className="relative z-10 w-3/4 max-h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
                  </a>
                  
                  <div className="text-left">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{product.category}</span>
                    <a href={`/product/${product.id}`} className="block text-xl font-bold text-[var(--title-color)] mb-2 truncate transition-colors group-hover:text-[var(--first-color)]">
                      {product.name}
                    </a>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl font-black text-[var(--title-color)]">${product.price}</span>
                      {product.discount && product.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through font-medium">${product.discount}</span>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
                    className="w-full flex items-center justify-center gap-2 bg-gray-50 text-[var(--title-color)] font-bold py-4 rounded-xl transition-all duration-300 group-hover:bg-[var(--first-color)] group-hover:text-white hover:opacity-90"
                    title="Add to cart"
                  >
                    <i className="bx bx-cart-add text-2xl"></i>
                    Add to Cart
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-auto">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              title="Previous Page"
              aria-label="Previous Page"
              className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-colors ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-[var(--title-color)] bg-white border border-gray-200 hover:bg-[var(--first-color)] hover:text-white hover:border-[var(--first-color)] shadow-sm'
              }`}
            >
              <i className="bx bx-chevron-left text-xl"></i>
            </button>
            
            <div className="flex gap-2 mx-4">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
                      currentPage === page 
                        ? 'bg-[var(--title-color)] text-white shadow-md' 
                        : 'text-gray-500 bg-white border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              title="Next Page"
              aria-label="Next Page"
              className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-colors ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-[var(--title-color)] bg-white border border-gray-200 hover:bg-[var(--first-color)] hover:text-white hover:border-[var(--first-color)] shadow-sm'
              }`}
            >
              <i className="bx bx-chevron-right text-xl"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
