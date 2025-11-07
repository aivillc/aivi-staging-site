# AIVI - Proactive AI for Customer Experience

A modern, minimalist website for AIVI showcasing our AI-powered customer engagement platform.

## Features

- **Interactive Live Demo**: Front-page demo form that triggers multi-channel AI demonstrations
- **Multi-Channel Capabilities**: Voice, SMS, Email, OCR, Document Intelligence
- **SaaS + Managed Service Options**: Clear comparison of implementation paths
- **CRM Integrations Showcase**: Display of all supported platforms
- **Real-time Analytics Dashboard**: Preview of coaching, analytics, and sentiment tracking
- **Industry Solutions**: Tailored use cases for Trucking, Finance, and Insurance
- **Enterprise Security**: SOC 2, HIPAA compliance badges

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Optimized for Vercel, Netlify, or any Node.js host

## Design

- **Style**: Minimalist, tech-focused (inspired by Bland.ai)
- **Color Palette**:
  - Navy (#0a0e1a, #0f172a) - Primary backgrounds
  - Orange (#ff6b35) - Accent/CTAs
  - Purple (#8b5cf6) - Secondary accent
  - Cyan (#22d3ee) - Micro-accent/highlights
- **Typography**: Geist Sans (modern, clean)
- **Animations**: Smooth, performant transitions

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## n8n Webhook Integration

### Quick Setup (2 Steps)

The demo form is **already configured** to work with your n8n webhook. Just add your webhook URL:

**Step 1: Create `.env.local` file** in the project root:

```bash
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://stage.aivi.io/webhook/YOUR_WEBHOOK_ID
```

**Step 2: Deploy to Vercel**

Add the environment variable in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `NEXT_PUBLIC_N8N_WEBHOOK_URL` with your webhook URL
4. Redeploy

### How It Works

When a user submits the demo form, the data is sent to your n8n webhook:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "needs": "Lead qualification automation",
  "timestamp": "2025-10-23T00:00:00.000Z"
}
```

Your n8n workflow should:
1. Receive the form data
2. Create/update lead in HubSpot CRM
3. Trigger multi-channel outreach (SMS, voice, email)
4. Return 200 OK status

**Note**: The demo visualization will show regardless of webhook response, ensuring a smooth user experience even if the webhook is down.

### Expected n8n Workflow

Your n8n workflow should:
1. Receive form data (firstName, lastName, email, company, needs)
2. Create/update lead in HubSpot CRM
3. Trigger multi-channel outreach: SMS, voice call, email
4. Optionally: Process document upload for OCR demo

## Project Structure

```
xpulsestudio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (combines all sections)
│   ├── globals.css         # Tailwind config + color system
│   └── api/                # API routes (future)
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section with headline
│   ├── DemoForm.tsx        # Interactive demo form
│   ├── Features.tsx        # Multi-channel capabilities
│   ├── Solutions.tsx       # SaaS vs Managed Service
│   ├── Integrations.tsx    # CRM integrations showcase
│   ├── Dashboard.tsx       # Analytics & coaching preview
│   ├── Testimonials.tsx    # Customer testimonials & stats
│   └── Footer.tsx          # Footer with CTA
└── README.md
```

## Key Sections

1. **Hero**: Interactive demo form + headline
2. **Features**: Voice, SMS, Email, OCR, CRM, Analytics
3. **Solutions**: SaaS vs Managed Service comparison
4. **Integrations**: CRM platforms, automation tools
5. **Dashboard**: Real-time metrics, coaching alerts
6. **Testimonials**: Customer quotes, stats, compliance badges
7. **Footer**: CTA + company info

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n.com/webhook/demo
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

**Built by the AIVI team**
Powered by xPulse Technology
© 2025 AIVI. All rights reserved.
