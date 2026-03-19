# 🧠 Brainwave — AI Chat App Landing Page

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**A sleek, modern, and fully responsive landing page for an AI-powered chat application — built with React 19, Vite, and Tailwind CSS 4.**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Available Scripts](#-available-scripts)
- [Page Sections](#-page-sections)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Brainwave** is a pixel-perfect, visually stunning marketing landing page for an AI chatbot SaaS product. It is designed to showcase the product's capabilities, benefits, pricing, and integrations with a compelling dark-themed UI featuring gradients, parallax effects, glassmorphism, and smooth animations.

This project demonstrates modern frontend development best practices using the latest versions of React, Vite, and Tailwind CSS, making it an excellent reference for building high-quality web interfaces.

---

## ✨ Features

- 🤖 **AI-Powered Chat Showcase** — Highlights intelligent conversation capabilities powered by the latest AI models
- 🖼️ **Photo Generation & Enhancement** — Showcases AI image generation and photo enhancement services
- 🔗 **Third-Party Integrations** — Displays seamless connectivity with Figma, Notion, Discord, Slack, Photoshop, Framer, Raindrop, and Protopie
- 💳 **Pricing Tiers** — Three clear subscription plans: Basic (Free), Premium ($9.99/mo), and Enterprise (custom)
- 🗺️ **Public Roadmap** — Transparency into upcoming features like voice recognition, gamification, and chatbot customization
- 🎨 **Parallax & Animations** — Smooth mouse-tracking parallax effects and micro-animations throughout the page
- 📱 **Fully Responsive** — Mobile-first design with a hamburger menu, adaptive grids, and touch-friendly interactions
- ⚡ **Blazing Fast** — Built with Vite for near-instant dev server startup and optimized production builds

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **UI Library** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 7](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Routing** | [React Router DOM 7](https://reactrouter.com/) |
| **Parallax** | [react-just-parallax 3](https://github.com/michalzalobny/react-just-parallax) |
| **Scroll Control** | [scroll-lock 2](https://github.com/FL3NKEY/scroll-lock) |
| **Fonts** | Sora, Source Code Pro, Space Grotesk (Google Fonts) |
| **Linting** | ESLint 9 with React Hooks & React Refresh plugins |

---

## 📁 Project Structure

```
Brainwave/
├── public/
│   └── vite.svg                   # Favicon
├── src/
│   ├── assets/                    # Images, SVGs, and all static assets
│   │   ├── benefits/              # Benefit card icons
│   │   ├── collaboration/         # Integration partner logos
│   │   ├── hero/                  # Hero section images & backgrounds
│   │   ├── notification/          # Notification UI preview images
│   │   ├── pricing/               # Pricing section graphics
│   │   ├── roadmap/               # Roadmap feature preview images
│   │   ├── services/              # Service preview screenshots
│   │   ├── socials/               # Social media icons
│   │   ├── svg/                   # Custom SVG React components
│   │   └── index.js               # Centralized asset exports
│   ├── components/
│   │   ├── design/                # Decorative design sub-components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Benefits.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Collaboration.jsx
│   │   │   ├── Roadmap.jsx
│   │   │   └── Pricing.jsx
│   │   ├── Header.jsx             # Navigation bar (desktop + mobile)
│   │   ├── Hero.jsx               # Hero section with parallax
│   │   ├── Benefits.jsx           # Benefits showcase grid
│   │   ├── Collaboration.jsx      # Integrations & collaboration section
│   │   ├── Services.jsx           # AI services section
│   │   ├── Roadmap.jsx            # Product roadmap section
│   │   ├── Pricing.jsx            # Pricing tiers section
│   │   ├── Footer.jsx             # Site footer with socials
│   │   ├── Section.jsx            # Reusable section wrapper
│   │   ├── Button.jsx             # CTA button component
│   │   ├── Heading.jsx            # Section heading component
│   │   ├── CompanyLogos.jsx       # Company logos strip
│   │   ├── Generating.jsx         # AI generation indicator animation
│   │   └── Notification.jsx       # Toast notification component
│   ├── constants/
│   │   └── index.js               # All static data (nav links, features, pricing, etc.)
│   ├── App.jsx                    # Root application component
│   ├── main.jsx                   # React + Router entry point
│   └── index.css                  # Global styles & Tailwind directives
├── index.html                     # HTML shell
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS theme extensions
├── eslint.config.js               # ESLint flat configuration
└── package.json                   # Project metadata & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (comes with Node.js) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/fre-eyesus/Brainwave.git
   cd Brainwave
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Running the App

**Development server** (with Hot Module Replacement):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

**Production build:**

```bash
npm run build
```

The optimized static files will be output to the `/dist` directory.

**Preview production build locally:**

```bash
npm run preview
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start the Vite development server with HMR |
| `build` | `npm run build` | Create an optimized production build |
| `preview` | `npm run preview` | Serve the production build locally |
| `lint` | `npm run lint` | Run ESLint across all source files |

---

## 🗂️ Page Sections

| Section | Description |
|---|---|
| **Header** | Fixed navigation bar with logo, smooth-scroll nav links, sign-in / sign-up buttons, and a mobile hamburger menu |
| **Hero** | Full-viewport hero with parallax depth effect, AI assistant title, robot illustration, and company logos strip |
| **Benefits** | Six-card grid highlighting core value propositions: *Ask Anything*, *Improve Every Day*, *Connect Everywhere*, and more |
| **Collaboration** | Showcases the ecosystem of integrated tools (Figma, Notion, Discord, Slack, Photoshop, Framer, Raindrop, Protopie) |
| **Services** | Three highlighted AI services: Photo Generating, Photo Enhancement, and Seamless Integration |
| **Roadmap** | Public product roadmap displaying four upcoming features and their progress status |
| **Pricing** | Three subscription tiers — Basic (Free), Premium ($9.99/mo), and Enterprise — with feature comparison |
| **Footer** | Social media links (Discord, Twitter, Instagram, Telegram, Facebook) and copyright info |

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure your code passes the linter (`npm run lint`) before submitting.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ and React
</div>
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
\*\*
