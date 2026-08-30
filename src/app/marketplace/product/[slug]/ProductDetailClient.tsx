'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Star, ShieldCheck, ShoppingBag, Heart, RefreshCw,
  CheckCircle2, ArrowRight, Truck, RotateCcw, AlertCircle,
  Sparkles, ChevronRight, MessageCircle, Building2, Layers, Check
} from 'lucide-react'
import { MarketplaceProductItem } from '@/data/marketplaceCatalog'
import { useCart } from '@/context/CartContext'

interface Props {
  product: MarketplaceProductItem
  crossSellProducts: MarketplaceProductItem[]
}

export default function ProductDetailClient({ product, crossSellProducts }: Props) {
  const router = useRouter()
  const { addItem, openCart } = useCart()

  const [activeImage, setActiveImage] = useState(product.image)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || product.quantity)
  const [isSubscription, setIsSubscription] = useState(false)
  const [subscriptionInterval, setSubscriptionInterval] = useState('28')
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  const activePrice = isSubscription ? product.subscriptionPrice : product.price

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: activePrice,
      originalPrice: product.mrp,
      pack: selectedSize,
      image: product.image,
      icon: '🌸',
      isSubscription,
      subscriptionInterval: isSubscription ? `Every ${subscriptionInterval} Days` : undefined
    })
    openCart()
  }

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: activePrice,
      originalPrice: product.mrp,
      pack: selectedSize,
      image: product.image,
      icon: '🌸',
      isSubscription,
      subscriptionInterval: isSubscription ? `Every ${subscriptionInterval} Days` : undefined
    })
    router.push('/marketplace/checkout')
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href={`/marketplace/${product.category}`} className="hover:text-rose-600 transition-colors capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* ── MAIN PRODUCT OVERVIEW ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 Cols: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-slate-700 hover:text-rose-600 transition-colors"
                aria-label="Add to Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Selector */}
            {product.galleryImages.length > 1 && (
              <div className="flex items-center gap-3">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-rose-600 shadow-md' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Dr. Arya Clinical Recommendation Pearl */}
            <div className="p-5 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-2 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Dr. Arya MD — Clinical Rationale</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                &ldquo;{product.drAryaPearl}&rdquo;
              </p>
            </div>
          </div>

          {/* Right 6 Cols: Purchase Configuration & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full uppercase border border-rose-100">
                  {product.brand} · {product.lifeStage} Stage
                </span>
                <span className="text-3xs text-slate-400">SKU: {product.batchNo}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 text-3xs font-normal">({product.reviewCount} verified reviews)</span>
                </div>
                <span className="text-xs text-emerald-700 font-bold">✓ In Stock &amp; Ready to Ship</span>
              </div>
            </div>

            {/* Pricing & Subscription Card */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              
              {/* Option 1: One-Time Purchase */}
              <div
                onClick={() => setIsSubscription(false)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  !isSubscription ? 'bg-rose-50/40 border-rose-500 shadow-2xs' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    !isSubscription ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                  }`}>
                    {!isSubscription && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">One-Time Purchase</strong>
                    <span className="text-3xs text-slate-500">Standard single order</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-950">₹{product.price}</span>
                  <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
                </div>
              </div>

              {/* Option 2: Subscribe & Save 20% */}
              <div
                onClick={() => setIsSubscription(true)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-3 ${
                  isSubscription ? 'bg-rose-50/70 border-rose-500 shadow-2xs' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSubscription ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                    }`}>
                      {isSubscription && <Check className="w-3 h-3" />}
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-rose-950 flex items-center gap-1.5">
                        <RefreshCw className="w-3.5 h-3.5 text-rose-600" />
                        <span>Subscribe &amp; Save 20%</span>
                      </strong>
                      <span className="text-3xs text-rose-700">Auto-delivered before your period</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-rose-700">₹{product.subscriptionPrice}</span>
                    <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
                  </div>
                </div>

                {isSubscription && (
                  <div className="pt-2 border-t border-rose-200 flex items-center justify-between text-xs animate-fadeIn">
                    <span className="font-bold text-slate-700">Delivery Frequency:</span>
                    <select
                      value={subscriptionInterval}
                      onChange={(e) => setSubscriptionInterval(e.target.value)}
                      className="px-3 py-1.5 rounded-xl border border-rose-300 bg-white font-bold text-rose-900 text-3xs"
                    >
                      <option value="21">Every 21 Days</option>
                      <option value="28">Every 28 Days (Recommended)</option>
                      <option value="30">Every 30 Days</option>
                      <option value="45">Every 45 Days</option>
                      <option value="60">Every 60 Days</option>
                    </select>
                  </div>
                )}
              </div>

            </div>

            {/* Pack Size / Variant Selector */}
            {product.sizes.length > 1 && (
              <div className="space-y-2">
                <label className="font-bold text-xs text-slate-900 block">Select Pack Size:</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2 rounded-2xl border text-xs font-bold transition-all ${
                        selectedSize === sz
                          ? 'bg-slate-900 border-slate-900 text-white shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isSubscription ? 'Subscribe Now' : 'Add to Care Bag'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>1-Click Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-3xs text-slate-500">
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Delivery on ₹499+</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
                  <span>Discreet Packaging</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                  <span>100% Toxin-Free</span>
                </div>
              </div>
            </div>

            {/* Jan Aushadhi 80% Generic Alternative Match */}
            {product.janAushadhiMatch && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-black text-xs text-emerald-900">
                    <span>💊 Jan Aushadhi Generic Match</span>
                    <span className="bg-emerald-600 text-white text-3xs px-2 py-0.5 rounded-full">Save {product.janAushadhiMatch.savingPercent}%</span>
                  </div>
                  <span className="font-black text-sm text-emerald-800">₹{product.janAushadhiMatch.price}</span>
                </div>
                <p className="text-3xs text-emerald-800 font-normal">
                  PMBJP Alternative: {product.janAushadhiMatch.name}. Bioequivalent quality available at government Kendras.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── DETAILED MEDICAL & TECHNICAL SPECIFICATIONS TABS ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          {/* Section 1: Description & Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-950">Product Description &amp; Benefits</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {product.keyBenefits.map((ben, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800 leading-snug">{ben}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: How & When to Use */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs">
            <div className="space-y-2">
              <strong className="font-black text-slate-950 text-sm block">How to Use</strong>
              <p className="text-slate-600 leading-relaxed">{product.howToUse}</p>
            </div>

            <div className="space-y-2">
              <strong className="font-black text-slate-950 text-sm block">When to Use &amp; Who It&apos;s For</strong>
              <p className="text-slate-600 leading-relaxed">
                <strong>When:</strong> {product.whenToUse} <br />
                <strong>For:</strong> {product.whoIsItFor}
              </p>
            </div>
          </div>

          {/* Section 3: Ingredients & Materials */}
          <div className="space-y-3 pt-6 border-t border-slate-100 text-xs">
            <strong className="font-black text-slate-950 text-sm block">Material &amp; Ingredients Breakdown</strong>
            <p className="text-slate-500 font-medium">Material: {product.material}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {product.ingredients.map((ing, i) => (
                <span key={i} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-3xs font-semibold">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Section 4: Regulatory, Batch & Manufacturer Transparency */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-3xs text-slate-600">
            <div>
              <strong className="text-slate-900 block font-bold">Manufacturer</strong>
              <span>{product.manufacturer}</span>
            </div>
            <div>
              <strong className="text-slate-900 block font-bold">Regulatory Standard</strong>
              <span>{product.regulatoryStatus}</span>
            </div>
            <div>
              <strong className="text-slate-900 block font-bold">Batch &amp; Lot</strong>
              <span>{product.batchNo}</span>
            </div>
            <div>
              <strong className="text-slate-900 block font-bold">Shelf Life</strong>
              <span>{product.expiryMonths} Months</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── FREQUENTLY BOUGHT TOGETHER / CROSS-SELL ── */}
      {crossSellProducts.length > 0 && (
        <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">COMPLETE YOUR ROUTINE</span>
            <h3 className="text-xl font-black text-slate-950">Frequently Bought Together</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {crossSellProducts.map((cp) => (
              <div key={cp.id} className="p-4 rounded-3xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <img src={cp.image} alt={cp.name} className="w-14 h-14 rounded-2xl object-cover bg-slate-100" />
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 leading-snug line-clamp-1">{cp.name}</h5>
                    <span className="text-xs font-black text-rose-600">₹{cp.price}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addItem({
                      id: cp.id,
                      name: cp.name,
                      price: cp.price,
                      originalPrice: cp.mrp,
                      pack: cp.quantity,
                      image: cp.image,
                      icon: '🌸',
                      isSubscription: false,
                    })
                    openCart()
                  }}
                  className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-3xs flex-shrink-0"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
