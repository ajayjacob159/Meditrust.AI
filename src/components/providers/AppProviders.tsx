'use client'

import React from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'
import AuthModal from '@/components/auth/AuthModal'
import CartDrawer from '@/components/ecommerce/CartDrawer'
import CheckoutModal from '@/components/ecommerce/CheckoutModal'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
        <AuthModal />
        <CartDrawer />
        <CheckoutModal />
      </CartProvider>
    </AuthProvider>
  )
}
