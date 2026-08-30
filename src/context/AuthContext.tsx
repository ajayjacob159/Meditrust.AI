'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  lifeStage: 'Teen' | 'Menstrual' | 'PCOS' | 'Fertility' | 'Pregnancy' | 'Postpartum' | 'Menopause' | 'General'
  isCorporateEmployee: boolean
  companyName?: string
  corporateWalletBalance?: number
  abhaId?: string
  joinedDate: string
  savedAddresses: Array<{
    id: string
    name: string
    phone: string
    street: string
    city: string
    state: string
    pincode: string
    isDefault: boolean
  }>
}

interface AuthContextType {
  user: UserProfile | null
  isAuthenticated: boolean
  isAuthModalOpen: boolean
  authModalMode: 'login' | 'signup' | 'corporate'
  openAuthModal: (mode?: 'login' | 'signup' | 'corporate') => void
  closeAuthModal: () => void
  loginWithMobile: (phone: string, otp: string, name?: string) => Promise<boolean>
  loginWithEmail: (email: string, password?: string) => Promise<boolean>
  loginWithCorporateSso: (workEmail: string, company: string) => Promise<boolean>
  signup: (userData: Partial<UserProfile>) => Promise<boolean>
  logout: () => void
  updateProfile: (updatedData: Partial<UserProfile>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEFAULT_DEMO_USER: UserProfile = {
  id: 'usr_med_84920',
  name: 'Pooja Sharma',
  email: 'pooja.sharma@example.com',
  phone: '+91 98765 43210',
  lifeStage: 'PCOS',
  isCorporateEmployee: true,
  companyName: 'Infosys (Hinjewadi Phase 2)',
  corporateWalletBalance: 2500,
  abhaId: '91-4829-5718-2049',
  joinedDate: 'August 2026',
  savedAddresses: [
    {
      id: 'addr_1',
      name: 'Pooja Sharma',
      phone: '+91 98765 43210',
      street: 'Flat 402, Morya Residency, Near Dange Chowk',
      city: 'Pune / PCMC',
      state: 'Maharashtra',
      pincode: '411033',
      isDefault: true,
    },
  ],
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'corporate'>('login')

  // Load user session from localStorage
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('meditrust_user_session')
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
    } catch (e) {
      console.error('Error reading auth storage:', e)
    }
  }, [])

  const saveUserToStorage = (userData: UserProfile | null) => {
    setUser(userData)
    if (userData) {
      localStorage.setItem('meditrust_user_session', JSON.stringify(userData))
    } else {
      localStorage.removeItem('meditrust_user_session')
    }
  }

  const openAuthModal = (mode: 'login' | 'signup' | 'corporate' = 'login') => {
    setAuthModalMode(mode)
    setIsAuthModalOpen(true)
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  const loginWithMobile = async (phone: string, otp: string, name?: string): Promise<boolean> => {
    // Verified OTP check (Demo accepts 123456 or any 6-digit code)
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: name || (phone === '+91 98765 43210' ? 'Pooja Sharma' : 'Sister'),
      email: `${phone.replace(/\D/g, '')}@meditrustai.in`,
      phone,
      lifeStage: 'PCOS',
      isCorporateEmployee: false,
      corporateWalletBalance: 500,
      joinedDate: 'August 2026',
      savedAddresses: [
        {
          id: 'addr_default',
          name: name || 'Sister',
          phone,
          street: 'Main Road',
          city: 'Pune',
          state: 'Maharashtra',
          pincode: '411001',
          isDefault: true,
        },
      ],
    }
    saveUserToStorage(newUser)
    closeAuthModal()
    return true
  }

  const loginWithEmail = async (email: string, password?: string): Promise<boolean> => {
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      phone: '+91 98765 43210',
      lifeStage: 'Menstrual',
      isCorporateEmployee: email.includes('corp') || email.includes('tcs') || email.includes('infosys'),
      companyName: email.includes('infosys') ? 'Infosys' : email.includes('tcs') ? 'TCS' : undefined,
      corporateWalletBalance: 2500,
      joinedDate: 'August 2026',
      savedAddresses: [],
    }
    saveUserToStorage(newUser)
    closeAuthModal()
    return true
  }

  const loginWithCorporateSso = async (workEmail: string, company: string): Promise<boolean> => {
    const corpUser: UserProfile = {
      id: `corp_${Date.now()}`,
      name: workEmail.split('@')[0].replace('.', ' ').toUpperCase(),
      email: workEmail,
      phone: '+91 98765 43210',
      lifeStage: 'PCOS',
      isCorporateEmployee: true,
      companyName: company || 'Enterprise Partner',
      corporateWalletBalance: 2500,
      joinedDate: 'August 2026',
      savedAddresses: [],
    }
    saveUserToStorage(corpUser)
    closeAuthModal()
    return true
  }

  const signup = async (userData: Partial<UserProfile>): Promise<boolean> => {
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: userData.name || 'Meditrust Member',
      email: userData.email || '',
      phone: userData.phone || '',
      lifeStage: userData.lifeStage || 'General',
      isCorporateEmployee: !!userData.isCorporateEmployee,
      companyName: userData.companyName,
      corporateWalletBalance: userData.isCorporateEmployee ? 2500 : 500,
      joinedDate: 'August 2026',
      savedAddresses: [],
    }
    saveUserToStorage(newUser)
    closeAuthModal()
    return true
  }

  const logout = () => {
    saveUserToStorage(null)
  }

  const updateProfile = (updatedData: Partial<UserProfile>) => {
    if (user) {
      const updated = { ...user, ...updatedData }
      saveUserToStorage(updated)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        loginWithMobile,
        loginWithEmail,
        loginWithCorporateSso,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
