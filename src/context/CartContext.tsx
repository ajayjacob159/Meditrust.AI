'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { MarketplaceProduct } from '@/data/womensMarketplaceProducts'

export interface CartItem {
  id: string
  productId: string
  name: string
  tagline: string
  pack: string
  price: number
  originalPrice: number
  quantity: number
  icon: string
  isSubscription: boolean
  category: string
}

interface CartContextType {
  items: CartItem[]
  isCartOpen: boolean
  isCheckoutOpen: boolean
  cartCount: number
  cartSubtotal: number
  discountAmount: number
  deliveryFee: number
  finalTotal: number
  appliedCoupon: string | null
  addToCart: (product: MarketplaceProduct, pack?: string, isSubscription?: boolean, quantity?: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, newQty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  openCheckout: () => void
  closeCheckout: () => void
  applyCoupon: (code: string) => { success: boolean; message: string }
  removeCoupon: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('meditrust_cart')
      if (savedCart) {
        setItems(JSON.parse(savedCart))
      }
    } catch (e) {
      console.error('Error reading cart storage:', e)
    }
  }, [])

  // Save cart to localStorage
  const saveCart = (newItems: CartItem[]) => {
    setItems(newItems)
    try {
      localStorage.setItem('meditrust_cart', JSON.stringify(newItems))
    } catch (e) {
      console.error('Error saving cart:', e)
    }
  }

  const addToCart = (
    product: MarketplaceProduct,
    pack: string = product.packOptions[0] || 'Standard Pack',
    isSubscription: boolean = false,
    quantity: number = 1
  ) => {
    const unitPrice = isSubscription ? Math.round(product.price * 0.8) : product.price
    const itemUniqueId = `${product.id}_${pack}_${isSubscription ? 'sub' : 'one'}`

    const existingIndex = items.findIndex((item) => item.id === itemUniqueId)

    if (existingIndex > -1) {
      const updated = [...items]
      updated[existingIndex].quantity += quantity
      saveCart(updated)
    } else {
      const newItem: CartItem = {
        id: itemUniqueId,
        productId: product.id,
        name: product.name,
        tagline: product.tagline,
        pack,
        price: unitPrice,
        originalPrice: product.originalPrice,
        quantity,
        icon: product.icon,
        isSubscription,
        category: product.categoryLabel,
      }
      saveCart([...items, newItem])
    }

    setIsCartOpen(true)
  }

  const removeFromCart = (itemId: string) => {
    const updated = items.filter((item) => item.id !== itemId)
    saveCart(updated)
  }

  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(itemId)
      return
    }
    const updated = items.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    saveCart(updated)
  }

  const clearCart = () => {
    saveCart([])
    setAppliedCoupon(null)
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const openCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }
  const closeCheckout = () => setIsCheckoutOpen(false)

  // Calculations
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const cartSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  let discountAmount = 0
  if (appliedCoupon === 'SAKHI20') {
    discountAmount = Math.round(cartSubtotal * 0.2)
  } else if (appliedCoupon === 'MEDITRUST50') {
    discountAmount = Math.min(50, cartSubtotal)
  } else if (appliedCoupon === 'FIRSTPERIOD') {
    discountAmount = Math.round(cartSubtotal * 0.15)
  }

  const deliveryFee = cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 49
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee)

  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const normalized = code.trim().toUpperCase()
    if (normalized === 'SAKHI20') {
      setAppliedCoupon('SAKHI20')
      return { success: true, message: '🎉 SAKHI20 Applied! 20% discount added.' }
    }
    if (normalized === 'MEDITRUST50') {
      setAppliedCoupon('MEDITRUST50')
      return { success: true, message: '🎉 MEDITRUST50 Applied! ₹50 instant discount.' }
    }
    if (normalized === 'FIRSTPERIOD') {
      setAppliedCoupon('FIRSTPERIOD')
      return { success: true, message: '🎉 FIRSTPERIOD Applied! 15% discount for young members.' }
    }
    return { success: false, message: 'Invalid coupon code. Try SAKHI20 or MEDITRUST50.' }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        isCheckoutOpen,
        cartCount,
        cartSubtotal,
        discountAmount,
        deliveryFee,
        finalTotal,
        appliedCoupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
