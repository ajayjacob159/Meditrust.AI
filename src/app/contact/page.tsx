'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone, Mail, MapPin, Clock, Shield, AlertTriangle,
  MessageCircle, Building2, Send, CheckCircle2, Sparkles
} from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('7028025717')
  const [inquiryType, setInquiryType] = useState('Immediate Dr. Arya AI Doctor Consultation')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="section bg-gradient-to-b from-teal-50/50 via-white to-white border-b border-slate-100">
        <div className="container-main max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border border-teal-200 bg-teal-50 text-teal-800">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>24/7 Immediate Doctor Response in Pune & Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 mb-4">
            We're Here for Your Health
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Need urgent clinical triage, medicine price assistance, or hospital fast-track admission? Connect directly with our medical team.
          </p>

          {/* Immediate Call Direct Hero Card */}
          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 text-white shadow-xl max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="badge bg-amber-400 text-slate-950 text-2xs font-black">
                IMMEDIATE RESPONSE HELPLINE
              </span>
              <div className="text-2xl font-black text-white mt-1">
                +91 7028025717
              </div>
              <p className="text-xs text-teal-200">
                Direct connect with Dr. Arya & Meditrust Chief Medical Officer
              </p>
            </div>

            <a
              href="tel:+917028025717"
              className="btn-primary bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs px-6 py-3.5 shadow flex items-center gap-2 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="container-main py-12">
        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Office & Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meditrust Life Sciences Pvt. Ltd. operates dedicated phlebotomy hubs and clinical triage desks across Pune and Maharashtra.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Phone className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold text-sm">Immediate Doctor Helpline</strong>
                  <a href="tel:+917028025717" className="text-teal-700 font-bold text-sm hover:underline">
                    +91 7028025717
                  </a>
                  <p className="text-2xs text-slate-500 mt-0.5">Toll Free: 1800-555-0199 (24/7 Mon–Sun)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Mail className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold">Email Support</strong>
                  <a href="mailto:care@meditrustlife.com" className="text-teal-700 hover:underline">
                    care@meditrustlife.com
                  </a>
                  <p className="text-2xs text-slate-500 mt-0.5">Average response under 15 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Building2 className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold">Registered Office</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Meditrust Life Sciences Pvt. Ltd.<br />
                    CIN: U85110PN2026PTC214589<br />
                    Senapati Bapat Road / Kothrud Corridor, Pune, Maharashtra 411038
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8 border border-slate-200 bg-white shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Send an Inquiry or Callback Request</h3>
              <p className="text-xs text-slate-500">
                Our clinical care managers respond within minutes for blood test bookings, generic medicine requests, or hospital admissions.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-teal-700 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Request Received Successfully!</h4>
                  <p className="text-xs text-slate-600">
                    A Meditrust clinical care coordinator is calling <strong>+91 {phone}</strong> directly to assist you.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-2xs py-2 px-4 mt-2"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aniket Deshmukh"
                        className="input-field text-xs"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-2xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="7028025717"
                        className="input-field text-xs"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-2xs font-bold text-slate-700 uppercase tracking-wider mb-1">Inquiry Type</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="input-field text-xs font-semibold"
                    >
                      <option>Immediate Dr. Arya AI Doctor Consultation</option>
                      <option>Prescription Price Match (Jan Aushadhi Generics)</option>
                      <option>At-Home Blood Test Booking in Pune (60-min Pickup)</option>
                      <option>Pune Partner Hospital Fast-Track (Ruby Hall / Sahyadri)</option>
                      <option>Corporate Healthcare / Diagnostic Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-2xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Message or Query</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your health question, test name, or required medicine..."
                      className="input-field text-xs resize-none"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5 text-xs font-bold shadow-teal">
                    <Send className="w-3.5 h-3.5" /> Submit Request for Immediate Call (+91 7028025717)
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
