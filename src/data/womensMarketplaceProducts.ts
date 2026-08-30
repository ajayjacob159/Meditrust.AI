/**
 * ══════════════════════════════════════════════════════════════════════════════
 * MEDITRUST AI — 100% WHITE-LABELED WOMEN'S WELLNESS MARKETPLACE DATASET
 * Brand: Meditrust Sakhi™ (Period Care, Intimate Hygiene, Skincare & Hormonal Wellness)
 * Integrated with Dr. Arya Clinical Rationale, PMBJP Jan Aushadhi Generic Matches & Subscriptions.
 * ══════════════════════════════════════════════════════════════════════════════
 */

export interface MarketplaceProduct {
  id: string
  name: string
  tagline: string
  category: 'period-care' | 'intimate-hygiene' | 'hormonal-skincare' | 'pcos-supplements' | 'care-bundles'
  categoryLabel: string
  stage: 'Teen' | 'Menstrual' | 'PCOS' | 'Pregnancy' | 'Postpartum' | 'Menopause' | 'All Stages'
  price: number
  originalPrice: number
  discountPercent: number
  rating: number
  reviewCount: number
  badge: string
  badgeColor: string
  icon: string
  description: string
  keyFeatures: string[]
  ingredients: string[]
  howToUse: string
  drAryaRecommendation: string
  janAushadhiAlternative?: {
    name: string
    price: number
    savingPercent: number
  }
  packOptions: string[]
  inStock: boolean
}

export const WOMENS_MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  // ── 1. PERIOD CARE (MEDITRUST SAKHI PADS, PANTIES, CRAMP COMFORT, MENSTRUAL CUP) ──
  {
    id: 'meditrust-sakhi-rashfree-pads',
    name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads (Custom Pack of 12)',
    tagline: 'Customized flow sizes with individual biodegradable disposal covers',
    category: 'period-care',
    categoryLabel: 'Period Care',
    stage: 'Menstrual',
    price: 199,
    originalPrice: 249,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 3840,
    badge: '15+ Lakh Happy Women',
    badgeColor: 'bg-rose-500 text-white',
    icon: '🌸',
    description:
      'India\'s #1 customizable sanitary pad pack designed without harmful toxins, dyes, or harsh bleaches. Choose your customized combination of Heavy (XL+), Medium (XL), and Light (L) flow pads with wider leak-proof back and individual resealable disposal wrappers.',
    keyFeatures: [
      '100% Rash-free, toxin-free & dermatologically tested in Germany',
      'Ultra-thin 1mm profile with multi-layer super-absorbent core',
      'Wider back design prevents overnight side and back staining',
      'Individual paper disposal covers for hygienic, odor-free disposal',
      'Zero synthetic perfume, zero chlorine, zero parabens'
    ],
    ingredients: [
      'Hypoallergenic Non-Woven Organic Cotton Touch Top Layer',
      'FSC Certified Wood Fluff Pulp Absorbent Core',
      'Biodegradable SAP Gel Polymer Sheet',
      'Breathable Microporous Leak-Proof Film'
    ],
    howToUse:
      'Select Heavy pads for Day 1–2 flow, Medium for Day 3, and Light for remaining days. Peel adhesive backing, place on underwear center, and wrap wings firmly.',
    drAryaRecommendation:
      'Clinical studies show synthetic perfume and chlorine bleach in standard plastic pads trigger 68% of vulvar contact dermatitis in Indian women. Chemical-free, rash-free pads are essential for chronic menstrual health.',
    janAushadhiAlternative: {
      name: 'Jan Aushadhi Suvidha Biodegradable Sanitary Pads (Pack of 10)',
      price: 10,
      savingPercent: 85
    },
    packOptions: ['12 Pads Custom Box', '24 Pads Economy Pack', '36 Pads Value Box (3-Month Supply)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-cramp-comfort-heat-patches',
    name: 'Meditrust Sakhi™ Cramp Comfort Self-Heating Patches (Pack of 3)',
    tagline: '100% natural, 8-hour continuous soothing heat for period cramps',
    category: 'period-care',
    categoryLabel: 'Period Care',
    stage: 'Menstrual',
    price: 249,
    originalPrice: 299,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 2190,
    badge: 'Best Seller for Dysmenorrhea',
    badgeColor: 'bg-amber-500 text-white',
    icon: '🔥',
    description:
      'Air-activated, discreet self-heating patches that provide up to 8 hours of continuous 40°C therapeutic heat to relax uterine muscle spasms, eliminate period cramps, and relieve lower back pain on the go.',
    keyFeatures: [
      '8 Hours of sustained 40°C deep-penetrating heat therapy',
      '100% Natural minerals — Activated Charcoal, Iron Powder & Salt',
      'Slim & invisible under office trousers, jeans, or college wear',
      'Non-medicinal natural pain relief without gastric NSAID side effects',
      'Adheres safely to the outside of underwear (never directly on skin)'
    ],
    ingredients: [
      'Natural Iron Powder (Exothermic thermal generator)',
      'Activated Charcoal Powder',
      'Purified Water & Vermiculite',
      'Medical Grade Skin-Safe Adhesive'
    ],
    howToUse:
      'Tear open the pouch to expose the patch to air. Peel off the protective film and stick the adhesive side onto the outside of your underwear over your lower abdomen or lower back. Do not apply directly to bare skin.',
    drAryaRecommendation:
      'Continuous 40°C thermal therapy provides the same pain relief as 400mg Ibuprofen for primary dysmenorrhea by increasing pelvic microcirculation without causing gastric irritation.',
    packOptions: ['Pack of 3 Patches', 'Pack of 6 Patches (2 Cycles)', 'Pack of 12 (Annual Period Kit)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-360-period-panties',
    name: 'Meditrust Sakhi™ 360° Leak-Proof Disposable Period Panties (Pack of 5)',
    tagline: 'All-night full coverage protection for postpartum and heavy flow',
    category: 'period-care',
    categoryLabel: 'Period Care',
    stage: 'Postpartum',
    price: 349,
    originalPrice: 420,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 1420,
    badge: 'Postpartum & Heavy Flow Must-Have',
    badgeColor: 'bg-purple-600 text-white',
    icon: '🩲',
    description:
      'Wearable underwear-style sanitary protection providing complete 360° front, back, and side leak-proofing. Holds up to 4x the capacity of regular pads for heavy periods, postpartum lochia, and peaceful overnight sleep.',
    keyFeatures: [
      '360° Leak-proof barrier with 4x higher absorption capacity',
      'Stretchable, soft, skin-hugging waistband fitting sizes S to XXL',
      'Cottony-soft breathable fabric prevents chafing and sweat rashes',
      'Easy tear-off side seams for fast, hassle-free disposal'
    ],
    ingredients: [
      'Hypoallergenic Non-Woven Elastic Polypropylene Fabric',
      'Super Absorbent Polymer Core Sheet',
      'Breathable Microporous PE Barrier'
    ],
    howToUse:
      'Step in and pull up just like normal underwear. After use, simply tear along the convenient side seams, roll tightly, and dispose in the provided wrapper.',
    drAryaRecommendation:
      'Ideal for heavy menorrhagia on Days 1–2 and postpartum lochia bleeding following normal or C-section delivery, eliminating bedsheet staining anxiety.',
    packOptions: ['Medium (Waist 28-36 inch)', 'Large (Waist 34-42 inch)', 'XL-XXL (Waist 40-48 inch)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-platinum-menstrual-cup',
    name: 'Meditrust Sakhi™ Platinum-Grade Medical Silicone Menstrual Cup',
    tagline: '10-year reusable, ultra-soft design with sterilizing pouch',
    category: 'period-care',
    categoryLabel: 'Period Care',
    stage: 'Menstrual',
    price: 399,
    originalPrice: 499,
    discountPercent: 20,
    rating: 4.7,
    reviewCount: 980,
    badge: 'Eco & Zero Waste',
    badgeColor: 'bg-teal-600 text-white',
    icon: '🌱',
    description:
      'Made with 100% biocompatible, US-FDA compliant platinum silicone. Flexible bell shape with easy-grip ring stem provides 8–10 hours of uninterrupted leak-free protection for swimming, running, and workouts.',
    keyFeatures: [
      '100% US-FDA approved Platinum-Cured Medical Silicone',
      'Soft rim with dual suction air holes for gentle, pinch-free insertion',
      'Up to 10 hours of continuous capacity (25–30mL)',
      'Lasts up to 10 years — saves over ₹18,000 on disposable pads'
    ],
    ingredients: ['100% Platinum-Cured Medical Grade Biocompatible Silicone'],
    howToUse:
      'Sterilize in boiling water for 5 minutes. Fold into a C-shape or punch-down fold, insert into the vaginal canal, and rotate slightly to create a gentle leak-proof seal.',
    drAryaRecommendation:
      'Menstrual cups preserve natural vaginal flora (Lactobacilli) and vaginal moisture, unlike synthetic cotton tampons that absorb natural secretions.',
    packOptions: ['Small (Under 30 & Unmarried)', 'Medium / Large (Over 30 or Given Birth)'],
    inStock: true
  },

  // ── 2. INTIMATE HYGIENE (INTIMATE WASH, PANTY LINERS, WIPES) ──
  {
    id: 'meditrust-sakhi-foaming-intimate-wash',
    name: 'Meditrust Sakhi™ pH 3.5–4.5 Foaming Intimate Wash (150ml)',
    tagline: 'Lactic Acid, Aloe Vera & Tea Tree — Prevents UTI & Odor',
    category: 'intimate-hygiene',
    categoryLabel: 'Intimate Hygiene',
    stage: 'All Stages',
    price: 299,
    originalPrice: 349,
    discountPercent: 14,
    rating: 4.8,
    reviewCount: 3120,
    badge: 'Gynecologist Tested',
    badgeColor: 'bg-emerald-600 text-white',
    icon: '🫧',
    description:
      'A gentle, soap-free foaming wash formulated at the exact acidic pH (3.5 to 4.5) of the healthy female vulva. Powered by natural Lactic Acid and Tea Tree to defend against recurrent yeast infections, bacterial vaginosis (BV), and post-period odor.',
    keyFeatures: [
      'Exact pH 3.5 to 4.5 matches natural acidic vulvar microbiome',
      'Natural Lactic Acid promotes protective Döderlein Lactobacilli',
      'Aloe Vera & Chamomile soothe itching, redness & friction chafing',
      '100% Soap-free, SLS/SLES-free, paraben-free & hypoallergenic'
    ],
    ingredients: [
      'Lactic Acid IP (pH balancer)',
      'Organic Aloe Barbadensis Leaf Juice',
      'Melaleuca Alternifolia (Tea Tree) Essential Oil',
      'Chamomilla Recutita (Chamomile) Flower Extract',
      'Cocamidopropyl Betaine (Gentle Coconut Cleanser)'
    ],
    howToUse:
      'Pump 1–2 doses of foam onto wet hands. Gently cleanse the external vulvar area front to back during shower. Rinse thoroughly with water. (For external use only).',
    drAryaRecommendation:
      'Regular alkaline body soaps have a pH of 9–10, which strips protective acidic vaginal barriers and triggers recurrent Candidiasis. Always use a pH 3.5–4.5 wash strictly on external vulva.',
    packOptions: ['150ml Regular Pump', '300ml Twin Refill Pack (Save 25%)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-ultra-thin-panty-liners',
    name: 'Meditrust Sakhi™ 1mm Breathable Cotton Panty Liners (Pack of 30)',
    tagline: 'Daily freshness for non-period discharge, spotting & ovulation',
    category: 'intimate-hygiene',
    categoryLabel: 'Intimate Hygiene',
    stage: 'All Stages',
    price: 189,
    originalPrice: 225,
    discountPercent: 16,
    rating: 4.9,
    reviewCount: 2450,
    badge: 'Everyday Freshness',
    badgeColor: 'bg-blue-500 text-white',
    icon: '✨',
    description:
      'Featherlight 1mm ultra-thin panty liners crafted with 100% breathable organic cotton. Ideal for daily mid-cycle cervical discharge, ovulation spotting, light urinary sneezes, and pre-menstrual staining.',
    keyFeatures: [
      'Ultra-thin 1mm design feels completely invisible all day',
      'Breathable micro-perforated back sheet prevents moisture buildup',
      'Curved ergonomic shape prevents bunching and shifting in underwear',
      'Individual pocket-sized wrapping for discreet handbag portability'
    ],
    ingredients: [
      '100% Organic Soft Cotton Top Sheet',
      'Micro-porous Air-Laid Cellulose Core',
      'Breathable Backing Film'
    ],
    howToUse:
      'Peel the paper backing and stick firmly to the crotch of your regular daily underwear. Replace every 4–6 hours for optimal dryness and hygiene.',
    drAryaRecommendation:
      'Cervical mucus varies naturally across your 28-day cycle. Breathable panty liners prevent dampness and fungal dermatitis during the fertile ovulation window.',
    packOptions: ['Pack of 30 Liners', 'Pack of 60 Liners (Twin Pack)', 'Pack of 90 Liners (Quarterly Supply)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-soothing-intimate-wipes',
    name: 'Meditrust Sakhi™ Biodegradable Soothing Intimate Wipes (Pack of 20)',
    tagline: 'Flushable, 100% viscose with Aloe Vera for on-the-go hygiene',
    category: 'intimate-hygiene',
    categoryLabel: 'Intimate Hygiene',
    stage: 'All Stages',
    price: 149,
    originalPrice: 180,
    discountPercent: 17,
    rating: 4.7,
    reviewCount: 1680,
    badge: 'Travel & Gym Essential',
    badgeColor: 'bg-teal-500 text-white',
    icon: '🌿',
    description:
      'Gentle, alcohol-free intimate wipes made with 100% plant-based biodegradable viscose fiber. Perfect for instant cleansing during public restroom use, after gym workouts, during period pad changes, and post-intimacy.',
    keyFeatures: [
      '100% Plant-based biodegradable and dispersible viscose fabric',
      'Infused with Aloe Vera, Vitamin E, and organic Lavender water',
      'Zero alcohol, zero synthetic fragrance, zero sticky residue',
      'Resealable moisture-lock flip pouch prevents drying out'
    ],
    ingredients: [
      '100% Plant Viscose Non-Woven Fabric',
      'Aloe Barbadensis Leaf Juice',
      'Tocopheryl Acetate (Vitamin E)',
      'Lavender Flower Hydrosol',
      'Citric Acid (pH balancer)'
    ],
    howToUse:
      'Pull out one wipe and gently wipe the external genital area from front to back to avoid bacterial transfer from the perianal area.',
    drAryaRecommendation:
      'Always remember the golden rule: Wipe front to back. Wiping back to front is the #1 preventable cause of E. coli Urinary Tract Infections in young women.',
    packOptions: ['Single Pack of 20 Wipes', 'Pack of 3 (60 Wipes)', 'Pocket Sachets (Pack of 15 Singles)'],
    inStock: true
  },

  // ── 3. HORMONAL SKINCARE (PIMPLE PATCHES, SALICYLIC CLEANSER, OIL-FREE GEL) ──
  {
    id: 'meditrust-sakhi-hydrocolloid-pimple-patches',
    name: 'Meditrust Sakhi™ Invisible Hydrocolloid Pimple Patches (36 Patches)',
    tagline: 'Absorbs pus in 6–8 hours & prevents acne picking scars',
    category: 'hormonal-skincare',
    categoryLabel: 'Hormonal Skincare',
    stage: 'PCOS',
    price: 279,
    originalPrice: 349,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 4210,
    badge: '#1 Hormonal Acne Hack',
    badgeColor: 'bg-pink-600 text-white',
    icon: '🎯',
    description:
      'Medical-grade hydrocolloid micro-patches that extract sebum, pus, and fluids from stubborn hormonal cystic acne (jawline & chin) overnight. Ultra-thin transparent matte finish blends invisibly under makeup.',
    keyFeatures: [
      'Pulls out whitehead pus and oil in 6–8 hours without popping',
      'Prevents subconscious finger picking and permanent post-acne dark marks',
      'Waterproof, sweat-proof, and ultra-thin 0.2mm matte transparent edge',
      'Contains 2 sizes: 12mm for large hormonal breakouts & 10mm for small zits'
    ],
    ingredients: [
      '100% Medical Grade Hydrocolloid Film',
      'Tea Tree Oil Micro-drops',
      'Salicylic Acid (0.5% Encapsulated)'
    ],
    howToUse:
      'Cleanse and dry the pimple area thoroughly. Apply patch directly over the zit before skincare or makeup. Leave on for 6–8 hours until patch turns cloudy white. Peel off gently.',
    drAryaRecommendation:
      'Hormonal PCOS acne stems from excess DHT stimulating sebaceous glands along the jawline. Hydrocolloid patches prevent deep epidermal trauma and hyperpigmentation (PIH).',
    packOptions: ['36 Patches (2 Sheets)', '72 Patches (Value Pack)', '108 Patches (3-Month Clear Skin Box)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-pore-cleansing-face-wash',
    name: 'Meditrust Sakhi™ 2% Salicylic Acid + Prebiotic Pore Cleansing Face Wash (100ml)',
    tagline: 'Unclogs deep pores, balances sebum & calms hormonal redness',
    category: 'hormonal-skincare',
    categoryLabel: 'Hormonal Skincare',
    stage: 'PCOS',
    price: 349,
    originalPrice: 425,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: 1870,
    badge: 'PCOS Acne Defense',
    badgeColor: 'bg-indigo-600 text-white',
    icon: '🧼',
    description:
      'A dermatologist-formulated gel cleanser designed specifically for hormonal and acne-prone skin. 2% Salicylic Acid gently penetrates deep into pores to dissolve trapped sebum while Prebiotics strengthen the skin barrier against acne-causing bacteria.',
    keyFeatures: [
      '2% Encapsulated Salicylic Acid dissolves stubborn blackheads & cystic sebum',
      'Skin-identical Prebiotics nurture healthy cutaneous flora',
      'Centella Asiatica (Cica) and Green Tea soothe inflamed red breakouts',
      'Non-drying, sulphate-free gel texture balances skin without stripping'
    ],
    ingredients: [
      'Salicylic Acid (BHA 2.0%)',
      'Inulin & Alpha-Glucan Oligosaccharide (Prebiotic Complex)',
      'Centella Asiatica (Cica) Leaf Extract',
      'Camellia Sinensis (Green Tea) Leaf Extract',
      'Niacinamide (Vitamin B3 1.5%)'
    ],
    howToUse:
      'Lather a coin-sized amount with water and massage in circular motions for 60 seconds, focusing on the jawline, chin, and T-zone. Rinse thoroughly with cool water.',
    drAryaRecommendation:
      'Salicylic acid is lipid-soluble, making it the gold standard for oily, androgen-driven PCOS skin. Combine with a gentle barrier cream for best results.',
    packOptions: ['100ml Bottle', '200ml Family Size'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-oil-free-gel-moisturizer',
    name: 'Meditrust Sakhi™ Oil-Free Barrier Calming Gel Moisturizer (50g)',
    tagline: 'Niacinamide, Ceramides & Hyaluronic Acid — Zero Stickiness',
    category: 'hormonal-skincare',
    categoryLabel: 'Hormonal Skincare',
    stage: 'PCOS',
    price: 399,
    originalPrice: 499,
    discountPercent: 20,
    rating: 4.8,
    reviewCount: 1540,
    badge: 'Non-Comedogenic',
    badgeColor: 'bg-cyan-600 text-white',
    icon: '💧',
    description:
      'Ultra-lightweight water-gel moisturizer that provides 72-hour deep cellular hydration without clogging pores. Formulated with 3% Niacinamide to fade dark post-acne spots and 3 Essential Ceramides to heal broken skin barriers.',
    keyFeatures: [
      '100% Oil-free, lightweight gel-cream absorbs in 10 seconds',
      '3% Niacinamide visibly fades dark spots and controls excess daytime shine',
      'Ceramide Complex (NP, AP, EOP) repairs compromised lipid barriers',
      'Zero mineral oil, zero artificial silicones, non-comedogenic certified'
    ],
    ingredients: [
      'Niacinamide (Vitamin B3 3.0%)',
      'Sodium Hyaluronate (Multi-molecular Hyaluronic Acid)',
      'Ceramide NP, Ceramide AP, Ceramide EOP & Phytosphingosine',
      'Cica Extract & Allantoin'
    ],
    howToUse:
      'Smooth a pea-sized amount evenly over cleansed face and neck morning and evening. Perfect primer under sunscreen and makeup.',
    drAryaRecommendation:
      'Skipping moisturizer when you have oily PCOS skin triggers a rebound sebum effect. This oil-free formulation delivers water hydration without oil buildup.',
    packOptions: ['50g Jar', '100g Value Tub'],
    inStock: true
  },

  // ── 4. PCOS & HORMONAL NUTRITION ──
  {
    id: 'meditrust-sakhi-myo-inositol-pcos-sachets',
    name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets (40:1 Inositol)',
    tagline: '2000mg Myo-Inositol + 50mg D-Chiro + Folate — Regulates Cycles',
    category: 'pcos-supplements',
    categoryLabel: 'PCOS & Nutrition',
    stage: 'PCOS',
    price: 649,
    originalPrice: 850,
    discountPercent: 24,
    rating: 4.9,
    reviewCount: 2890,
    badge: 'Clinically Proven 40:1 Ratio',
    badgeColor: 'bg-rose-600 text-white',
    icon: '💊',
    description:
      'First-line natural metabolic therapy for PCOS. Contains the evidence-based 40:1 physiological ratio of Myo-Inositol to D-Chiro Inositol with L-Methylfolate and Vitamin D3 to reverse insulin resistance, restore regular ovulation, and reduce facial hair shedding.',
    keyFeatures: [
      'Clinically proven 40:1 ratio (2000mg Myo-Inositol + 50mg D-Chiro Inositol)',
      'Improves cellular insulin sensitivity and lowers elevated LH/FSH ratios',
      'Promotes spontaneous ovulation and regular 28–35 day menstrual cycles',
      'Pleasant citrus flavor, 100% vegan, sugar-free, water-soluble daily sachet'
    ],
    ingredients: [
      'Myo-Inositol (2000mg)',
      'D-Chiro Inositol (50mg)',
      'L-Methylfolate Calcium (Folate Active Form 500mcg)',
      'Vitamin D3 (Cholecalciferol 1000 IU)',
      'Chromium Picolinate (200mcg)'
    ],
    howToUse:
      'Mix 1 sachet in a glass of room-temperature water or coconut water. Drink once or twice daily after meals consistently for 90–120 days.',
    drAryaRecommendation:
      'International PCOS guidelines recognize Inositol as a first-line non-hormonal insulin sensitizer that works as effectively as Metformin for cycle regularity with zero GI nausea.',
    janAushadhiAlternative: {
      name: 'Jan Aushadhi Myo-Inositol 2000mg Sachets (Pack of 10)',
      price: 190,
      savingPercent: 75
    },
    packOptions: ['Pack of 30 Sachets (1 Month)', 'Pack of 90 Sachets (3-Month Reversal Protocol)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-spearmint-pcos-tea',
    name: 'Meditrust Sakhi™ Organic Spearmint + Shatavari Herbal Period Tea (100g)',
    tagline: 'Natural anti-androgen tea for hormonal acne & PMS bloating',
    category: 'pcos-supplements',
    categoryLabel: 'PCOS & Nutrition',
    stage: 'PCOS',
    price: 349,
    originalPrice: 420,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 1350,
    badge: '100% Organic Herbs',
    badgeColor: 'bg-emerald-700 text-white',
    icon: '🍵',
    description:
      'Whole-leaf organic herbal blend of Mentha Spicata (Spearmint), Shatavari, Chamomile, and Ginger. Scientifically shown to lower free circulating testosterone in women with PCOS while relieving PMS mood swings and digestive water retention.',
    keyFeatures: [
      'Pure organic Spearmint leaves reduce hirsutism (excess facial hair) naturally',
      'Shatavari root supports estrogen balance and ovarian follicle vitality',
      'Chamomile and Ginger relieve uterine muscle cramps and pelvic bloating',
      '100% Caffeine-free, zero artificial colors, zero preservatives'
    ],
    ingredients: [
      'Organic Spearmint (Mentha Spicata) Leaves',
      'Organic Shatavari (Asparagus Racemosus) Root',
      'Egyptian Chamomile Flower Petals',
      'Dried Ginger Root & Cardamom'
    ],
    howToUse:
      'Steep 1 teaspoon of leaves in boiling water for 5–7 minutes. Strain and enjoy warm twice daily, especially during the 10 days before your period.',
    drAryaRecommendation:
      'Two cups of spearmint tea daily for 30 days have been clinically proven in randomized trials to lower androgenic hirsutism scores in PCOS women.',
    packOptions: ['100g Tin (50 Cups)', '200g Refill Pouch (100 Cups)'],
    inStock: true
  },

  // ── 5. CURATED CARE BUNDLES & STARTER KITS ──
  {
    id: 'meditrust-sakhi-first-period-teen-starter-kit',
    name: 'Meditrust Sakhi™ Teen First Period Starter Box (Puberty & School Kit)',
    tagline: 'Complete reassurance kit for young girls — Pads, Liners, Guide & Pouch',
    category: 'care-bundles',
    categoryLabel: 'Care Bundles & Kits',
    stage: 'Teen',
    price: 499,
    originalPrice: 650,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 3410,
    badge: 'Mom & Daughter Favorite',
    badgeColor: 'bg-teal-600 text-white',
    icon: '🎒',
    description:
      'A loving, judgment-free starter box designed to make a young girl\'s first period positive and stress-free. Includes rash-free pads, daily liners, cramp comfort heat patch, illustrated "Dr. Arya Menarche Guide", and a discreet school waterproof travel pouch.',
    keyFeatures: [
      'Includes 12 Rash-Free Custom Pads + 10 Liners + 1 Cramp Comfort Patch',
      'Illustrated Dr. Arya First Period Education Book (in English/Marathi/Hindi)',
      'Discreet pastel schoolbag waterproof travel pouch',
      'Disposal paper bags and period tracking milestone calendar'
    ],
    ingredients: ['Complete First Period Essentials Kit (All Dermatologist-Approved)'],
    howToUse:
      'Gift to girls aged 10–15 before or when their first period arrives. Read the illustrated guide together to normalize menstrual health without fear or taboos.',
    drAryaRecommendation:
      'Early positive education about menarche reduces adolescent anxiety by 82% and ensures proper hygiene habits that prevent chronic pelvic infections.',
    packOptions: ['Standard Teen Starter Box', 'Deluxe Box (with Thermal Heating Patch Pack)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-pcos-acne-cycle-harmony-box',
    name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box (4-in-1 Complete Solution)',
    tagline: 'Inositol Sachets + Hydrocolloid Patches + Cleanser + Cramp Patch',
    category: 'care-bundles',
    categoryLabel: 'Care Bundles & Kits',
    stage: 'PCOS',
    price: 1299,
    originalPrice: 1699,
    discountPercent: 24,
    rating: 4.9,
    reviewCount: 2180,
    badge: '30-Day Transformation Kit',
    badgeColor: 'bg-rose-600 text-white',
    icon: '📦',
    description:
      'The definitive 360° management kit for polycystic ovary syndrome. Combines internal metabolic balancing (40:1 Inositol Sachets) with external dermatological defense (Pimple Patches + Salicylic Cleanser) and acute cramp warmth.',
    keyFeatures: [
      '1x Box 40:1 Myo-Inositol Sachets (30-day cycle regulation)',
      '1x Sheet 36 Hydrocolloid Pimple Patches for jawline hormonal acne',
      '1x 100ml 2% Salicylic Acid Pore Cleanser',
      '1x Pack 3 Cramp Comfort Self-Heating Thermal Patches',
      'Free 1-on-1 Dr. Arya AI PCOS Diet & Blood Test Consultation'
    ],
    ingredients: ['Integrated 4-Product Clinical PCOS Regimen'],
    howToUse:
      'Take 1 Inositol sachet daily with breakfast. Cleanse with Salicylic face wash twice daily. Apply Pimple Patch over active blemishes overnight. Use Cramp Patch on Day 1 of flow.',
    drAryaRecommendation:
      'Combining internal insulin regulation with external barrier dermatology yields 3x faster resolution of hormonal breakouts and ovulatory cycle restoration.',
    packOptions: ['1-Month Starter Harmony Box', '3-Month Reversal Protocol Bundle (Save 35%)'],
    inStock: true
  },

  {
    id: 'meditrust-sakhi-postpartum-new-mom-recovery-kit',
    name: 'Meditrust Sakhi™ New Mother Postpartum Healing & Maternity Bundle',
    tagline: '360° Period Panties + Intimate Wash + Wipes + Shatavari Granules',
    category: 'care-bundles',
    categoryLabel: 'Care Bundles & Kits',
    stage: 'Postpartum',
    price: 999,
    originalPrice: 1299,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 1760,
    badge: 'Hospital Bag Essential',
    badgeColor: 'bg-purple-600 text-white',
    icon: '🤱',
    description:
      'Everything a new mother needs for comfortable postpartum recovery after normal or C-section delivery. Includes leak-proof disposable maternity panties, gentle pH-balanced foaming wash, soothing biodegradable wipes, and organic Shatavari for breast milk lactation support.',
    keyFeatures: [
      '2x Packs 360° Disposable Period Panties (10 Panties for heavy lochia flow)',
      '1x 150ml pH 3.5–4.5 Foaming Intimate Wash (Episiotomy-safe)',
      '1x Pack 20 Soothing Biodegradable Wipes',
      '1x Jar Ayurvedic Shatavari Lactation Support Granules (100g)',
      'Includes Postpartum Return-to-Work & Mental Health Guide'
    ],
    ingredients: ['Complete 4-Piece Postnatal Care & Lactation Support Regimen'],
    howToUse:
      'Pack in hospital maternity bag at Week 36. Wear disposable panties immediately post-delivery for zero leakage during first 2 weeks of lochia discharge.',
    drAryaRecommendation:
      'Postpartum perineal care requires gentle non-alkaline cleansing and breathable leak-proof protection to prevent ascending episiotomy infections and C-section scar strain.',
    packOptions: ['Standard Maternity Hospital Kit', 'Deluxe New Mom Care Hamper'],
    inStock: true
  }
]
