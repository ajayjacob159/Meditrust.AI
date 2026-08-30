'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, Filter, Sparkles, ShoppingBag, Star, CheckCircle2,
  ShieldCheck, ArrowRight, RefreshCw, ChevronRight, AlertCircle,
  X, Layers, Check
} from 'lucide-react'
import { MarketplaceCategoryDef, MarketplaceProductItem } from '@/data/marketplaceCatalog'
import { useCart } from '@/context/CartContext'

interface Props {
  category: MarketplaceCategoryDef
  allCategories: MarketplaceCategoryDef[]
  initialProducts: MarketplaceProductItem[]
}

export default function CategoryPageClient({ category, allCategories, initialProducts }: Props) {
  const { addItem, openCart } = useCart()

  const [selectedSubcat, setSelectedSubcat] = useState<string>('All')
  const [selectedStage, setSelectedStage] = useState<string>('All')
  const [selectedFlow, setSelectedFlow] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<'featured' | 'price_low' | 'price_high' | 'rating'>('featured')

  // Product Comparison State (up to 3 products)
  const [compareList, setCompareList] = useState<MarketplaceProductItem[]>([])
  const [compareModalOpen, setCompareModalOpen] = useState(false)

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let prods = [...initialProducts]

    if (selectedSubcat !== 'All') {
      prods = prods.filter((p) => p.subcategory === selectedSubcat)
    }
    if (selectedStage !== 'All') {
      prods = prods.filter((p) => p.lifeStage === selectedStage || p.lifeStage === 'All Stages')
    }
    if (selectedFlow !== 'All') {
      prods = prods.filter((p) => p.flow === selectedFlow || p.flow === 'All')
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      prods = prods.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      )
    }

    if (sortBy === 'price_low') {
      prods.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price_high') {
      prods.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      prods.sort((a, b) => b.rating - a.rating)
    }

    return prods
  }, [initialProducts, selectedSubcat, selectedStage, selectedFlow, searchQuery, sortBy])

  const toggleCompare = (prod: MarketplaceProductItem) => {
    if (compareList.some((p) => p.id === prod.id)) {
      setCompareList(compareList.filter((p) => p.id !== prod.id))
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 products at a time.')
        return
      }
      setCompareList([...compareList, prod])
    }
  }

  const handleAddToCart = (product: MarketplaceProductItem, e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.mrp,
      pack: product.quantity,
      image: product.image,
      icon: '🌸',
      isSubscription: false,
    })
    openCart()
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── 1. BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{category.name}</span>
        </nav>
      </div>

      {/* ── 2. HERO CATEGORY BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase">
              <span>{category.icon}</span>
              <span>MEDITRUST SAKHI™ CATEGORY</span>
            </span>
            <span className="text-3xs text-slate-400 font-medium">
              Dermatologist Tested · 100% Toxin-Free
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {category.heroBannerTitle}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                {category.shortDescription}
              </p>
            </div>

            {/* Dr. Arya Educational Snippet */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 max-w-md space-y-1 text-xs backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-3xs font-bold text-rose-300 uppercase">
                <Sparkles className="w-3 h-3 text-rose-400" />
                <span>Dr. Arya Clinical Note</span>
              </div>
              <p className="text-3xs text-slate-200 leading-relaxed font-medium">
                &ldquo;{category.educationalSnippet}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. MAIN FILTER & PRODUCTS SECTION ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Subcategory Pills Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setSelectedSubcat('All')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedSubcat === 'All'
                ? 'bg-slate-900 text-white font-bold shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            All {category.name}
          </button>

          {category.subcategories.map((subcat) => (
            <button
              key={subcat}
              onClick={() => setSelectedSubcat(subcat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedSubcat === subcat
                  ? 'bg-rose-600 text-white font-bold shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {subcat}
            </button>
          ))}
        </div>

        {/* Secondary Filter Bar & Search */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${category.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-900 focus:outline-none placeholder-slate-400 font-medium"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            {/* Life Stage Filter */}
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-3xs font-bold"
            >
              <option value="All">All Life Stages</option>
              <option value="Menstrual">🩸 Menstrual</option>
              <option value="PCOS">🌸 PCOS</option>
              <option value="Teen">🌱 Teen</option>
              <option value="Postpartum">🤱 Postpartum</option>
              <option value="Menopause">🦋 Menopause</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-3xs font-bold"
            >
              <option value="featured">Featured / AI Picks</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* ── PRODUCTS GRID ── */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <span className="text-4xl">🔍</span>
            <h3 className="font-black text-lg text-slate-900">No products match your filter</h3>
            <p className="text-xs text-slate-500">Try clearing filters or search query.</p>
            <button
              onClick={() => {
                setSelectedSubcat('All')
                setSelectedStage('All')
                setSelectedFlow('All')
                setSearchQuery('')
              }}
              className="px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                
                {/* Photo Banner */}
                <Link href={`/marketplace/product/${product.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full shadow-sm ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    <div className="flex items-center gap-1 text-amber-900 text-3xs font-bold bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-lg border border-amber-200 shadow-sm">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-3 bg-slate-950/75 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {product.subcategory}
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                        {product.brand} · {product.lifeStage} Stage
                      </span>
                      <Link href={`/marketplace/product/${product.slug}`}>
                        <h3 className="font-black text-sm text-slate-950 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Price & Savings */}
                    <div className="flex items-baseline gap-2 pt-1 border-t border-slate-100">
                      <span className="text-xl font-black text-slate-950">₹{product.price}</span>
                      <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
                      <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {product.discountPercent}% OFF
                      </span>
                    </div>

                    {/* Subscribe & Save Price */}
                    <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-100 text-3xs text-rose-950 font-bold flex items-center justify-between">
                      <span>Subscribe &amp; Save:</span>
                      <span className="text-rose-700 font-black">₹{product.subscriptionPrice}</span>
                    </div>

                    {/* Compare Checkbox */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <input
                        type="checkbox"
                        id={`compare-${product.id}`}
                        checked={compareList.some((p) => p.id === product.id)}
                        onChange={() => toggleCompare(product)}
                        className="rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                      />
                      <label htmlFor={`compare-${product.id}`} className="text-3xs text-slate-500 font-medium cursor-pointer">
                        Compare specs
                      </label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(product, e)}
                      className="flex-1 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>

                    <Link
                      href={`/marketplace/product/${product.slug}`}
                      className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                      title="View Details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* ── 4. CATEGORY CLINICAL DISCLAIMER ── */}
        {category.disclaimer && (
          <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <p className="text-slate-300 font-normal leading-relaxed">
              {category.disclaimer}
            </p>
          </div>
        )}

      </section>

      {/* ── 5. FLOATING COMPARISON BAR (WHEN PRODUCTS SELECTED) ── */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-950 text-white p-3 sm:p-4 rounded-3xl border border-slate-800 shadow-2xl flex items-center gap-4 animate-slideUp max-w-xl w-[92%]">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs font-black text-rose-400 uppercase">
              {compareList.length} Selected to Compare
            </span>
            <div className="flex items-center gap-1.5">
              {compareList.map((p) => (
                <div key={p.id} className="w-8 h-8 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCompareModalOpen(true)}
              className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── 6. PRODUCT COMPARISON MODAL ── */}
      {compareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-xl font-black text-slate-950">Compare Products</h3>
                <p className="text-xs text-slate-500">Side-by-side clinical &amp; technical specs</p>
              </div>
              <button
                onClick={() => setCompareModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-xs">
              {compareList.map((prod) => (
                <div key={prod.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <img src={prod.image} alt={prod.name} className="w-full aspect-[4/3] object-cover rounded-xl" />
                  <div>
                    <span className="text-3xs font-bold text-rose-600">{prod.badge}</span>
                    <h4 className="font-bold text-xs text-slate-900 leading-snug">{prod.name}</h4>
                  </div>
                  <div className="space-y-1 pt-1 border-t border-slate-200 text-3xs">
                    <div><strong>Price:</strong> ₹{prod.price} (MRP: ₹{prod.mrp})</div>
                    <div><strong>Subscription:</strong> ₹{prod.subscriptionPrice}</div>
                    <div><strong>Material:</strong> {prod.material}</div>
                    <div><strong>Rating:</strong> ⭐ {prod.rating} ({prod.reviewCount} reviews)</div>
                    <div><strong>Life Stage:</strong> {prod.lifeStage}</div>
                  </div>
                  <button
                    onClick={(e) => {
                      handleAddToCart(prod, e)
                      setCompareModalOpen(false)
                    }}
                    className="w-full py-2 rounded-full bg-rose-600 text-white font-bold text-3xs hover:bg-rose-700"
                  >
                    Add to Bag
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
