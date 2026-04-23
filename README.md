# 🏠 Housewarming Registry

A minimalist, high-contrast, bilingual gift registry application. Built with **Next.js** and **Supabase**, this project focus on providing a clean, "above-the-fold" experience for friends and family to contribute to a new home.

## 🚀 Overview

This app was developed to solve the complexity of traditional gift platforms. It offers a direct approach where guests can choose gifts and contribute via PIX or international methods (Wise/PayPal). The project has evolved from a static prototype to a **Full-Stack** application with real-time database persistence.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Icons:** Lucide React
- **i18n:** Custom React Context implementation

## 🎯 Key Features

- **High-Contrast UI:** Maximum legibility with a clean, professional aesthetic.
- **Bilingual Engine:** Instant PT/EN toggle with no page reload.
- **Real-time Progress:** Live progress bars synced with the database.
- **Flexible Contributions:** Support for full funding or custom partial amounts.
- **Atomic Updates:** PostgreSQL RPC functions to ensure data integrity during contributions.

## ⚙️ Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## ⚙️ Environment Setup
```
# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🗺 Future Roadmap

### Phase 1: Admin Dashboard
Implementation of a secure `/admin` route to manage gifts, edit values, and track contributions privately without manual database entry.

### Phase 2: Dynamic PIX Integration
Integration with a PIX API to generate dynamic QR Codes and "Copy & Paste" payloads containing the exact contribution amount to eliminate manual entry errors.

### Phase 3: Payment Gateway & Split
Full integration with a payment processor (Stripe or Mercado Pago) to handle automated transactions and implement a **1% platform fee** through payment splitting.

### Phase 4: Multi-tenant SaaS
Scaling the architecture to support multiple independent users, enabling the creation of unique registries under custom URLs (e.g., `/event/user-slug`) with a complete host onboarding flow.
