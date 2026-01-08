# Alpha Enterprises - Healthcare & Lifestyle Coaching

A modern, professional frontend website for Alpha Enterprises, specializing in healthcare and lifestyle coaching services.

## Features

- **Home Page**: Hero section, services overview, why choose us, testimonials, and call-to-action banner
- **Services Page**: Detailed nutrition and fitness coaching services
- **Pricing Page**: Coaching packages and health products with pricing in INR, integrated with Razorpay payments
- **Coaches Page**: Profiles of certified Indian coaches with booking options
- **About Us**: Company mission, vision, and approach
- **Contact Page**: Contact form and information
- **Privacy Policy**: Comprehensive privacy policy for user data protection
- **Refund Policy**: Clear refund terms for services and products
- **Terms and Conditions**: Legal terms governing service usage
- **Booking Simulation**: Multi-step booking flow with dummy data and frontend logic, including Razorpay payment integration, including Razorpay payment integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Frontend-only, no backend required

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To build the project for production:

```bash
npm run build
```

## Project Structure

```
├── app/
│   ├── about/
│   ├── booking/
│   ├── coaches/
│   ├── contact/
│   ├── pricing/
│   ├── privacy-policy/
│   ├── refund-policy/
│   ├── services/
│   ├── terms-and-conditions/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BookingModal.tsx
│   ├── CTABanner.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ServicesOverview.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
├── public/
└── ...
```

## Booking Simulation

The booking flow is entirely frontend-based with simulated data:
- Step 1: Choose service (Dietician or Fitness Advisor)
- Step 2: Select coach from dummy profiles
- Step 3: Pick date and time (simulated calendar)
- Step 4: Enter personal details
- Step 5: Confirmation with success message

No real data submission or backend integration.

## Design

- **Colors**: Teal primary, white/soft green secondary, light orange accent
- **Fonts**: Poppins for headings, system font for body
- **Style**: Clean, minimal, card-based layouts with soft shadows and rounded corners

## License

This project is for demonstration purposes.