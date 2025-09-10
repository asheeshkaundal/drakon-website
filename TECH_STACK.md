# 🛠️ Drakon Sports - Complete Tech Stack & Tools

## **Project Overview**

**Project Name**: Drakon Sports Landing Page  
**Version**: 0.1.0  
**Type**: Luxury Cricket Equipment E-commerce Platform  
**Architecture**: Modern Next.js with TypeScript and Tailwind CSS

---

## **Core Framework & Runtime**

| Technology    | Version    | Description                                    |
| ------------- | ---------- | ---------------------------------------------- |
| **Next.js**   | `14.2.4`   | React framework for production with App Router |
| **React**     | `^18`      | UI library for building user interfaces        |
| **React DOM** | `^18`      | React DOM renderer for web applications        |
| **Node.js**   | `v20.11.0` | JavaScript runtime environment                 |
| **npm**       | `10.9.2`   | Package manager for dependency management      |

---

## **Language & Type Safety**

| Technology            | Version    | Configuration                       |
| --------------------- | ---------- | ----------------------------------- |
| **TypeScript**        | `^5`       | Static type checking for JavaScript |
| **Target**            | `ES2017`   | TypeScript compilation target       |
| **Module Resolution** | `bundler`  | Modern bundler-based resolution     |
| **JSX**               | `preserve` | JSX transformation mode             |
| **Strict Mode**       | ✅         | Enhanced type checking enabled      |

### TypeScript Configuration Highlights

- **Path Aliases**: `@/*` → Root directory mapping
- **Incremental Compilation**: Enabled for faster builds
- **Isolated Modules**: Ensures each file is self-contained
- **ESModule Interop**: Modern module compatibility

---

## **Styling & UI Framework**

| Technology               | Version   | Purpose                       |
| ------------------------ | --------- | ----------------------------- |
| **Tailwind CSS**         | `^3.4.17` | Utility-first CSS framework   |
| **Tailwind CSS Animate** | `^1.0.7`  | Pre-built animation utilities |
| **PostCSS**              | `^8`      | CSS transformation tool       |
| **Autoprefixer**         | `^10.0.1` | Automatic vendor prefixing    |

### Design System Features

- **CSS Variables**: Dynamic theming support
- **Dark Mode**: Class-based dark mode (`["class"]`)
- **Responsive Design**: Mobile-first approach
- **Container Queries**: Max-width constraints up to 1400px
- **Custom Color Palette**: Purple-based luxury theme

### Custom Color Palette

```javascript
primary: {
  DEFAULT: "#8B5FBF", // Sophisticated purple
  50: "#F8F6FC",
  100: "#F0EBFF",
  200: "#E1D4FF",
  300: "#C9B3FF",
  400: "#A688FF",
  500: "#8B5FBF",
  600: "#7C4DFF",
  700: "#6B46C1",
  800: "#553C9A",
  900: "#44337A"
}
```

---

## **UI Components & Design System**

| Component Library            | Version    | Description                               |
| ---------------------------- | ---------- | ----------------------------------------- |
| **shadcn/ui**                | Latest     | Modern component library (New York style) |
| **Radix UI Accordion**       | `^1.1.2`   | Accessible accordion components           |
| **Radix UI Slot**            | `^1.0.2`   | Composition primitive                     |
| **Radix UI Core**            | `^1.4.3`   | Base UI primitives                        |
| **Lucide React**             | `^0.263.1` | Beautiful & consistent icon library       |
| **Class Variance Authority** | `^0.7.0`   | Component variant management              |

### shadcn/ui Configuration

- **Style**: New York variant
- **RSC**: Server Components enabled
- **TSX**: TypeScript JSX support
- **Base Color**: Neutral theme
- **Icon Library**: Lucide React integration

---

## **Animation & Motion**

| Technology            | Version   | Use Case                            |
| --------------------- | --------- | ----------------------------------- |
| **Framer Motion**     | `^11.0.0` | Advanced animations and transitions |
| **React Use Measure** | `^2.1.1`  | DOM element measurement hooks       |
| **Tailwind Animate**  | `^1.0.7`  | Utility-based animations            |

### Animation Features

- **Accordion Animations**: Smooth expand/collapse
- **Hover Effects**: Scale, translate, color transitions
- **Fade Animations**: Staggered content reveals
- **Bounce Effects**: Micro-interactions
- **Custom Keyframes**: Brand-specific animations

---

## **Utility Libraries**

| Library            | Version   | Purpose                            |
| ------------------ | --------- | ---------------------------------- |
| **clsx**           | `^2.0.0`  | Conditional CSS class names        |
| **Tailwind Merge** | `^1.14.0` | Intelligent Tailwind class merging |

---

## **Development Tools & Linting**

| Tool                           | Version  | Configuration                      |
| ------------------------------ | -------- | ---------------------------------- |
| **ESLint**                     | `^8`     | JavaScript/TypeScript code linting |
| **ESLint Config Next**         | `14.2.4` | Next.js optimized ESLint rules     |
| **TypeScript Types Node**      | `^20`    | Node.js type definitions           |
| **TypeScript Types React**     | `^18`    | React type definitions             |
| **TypeScript Types React DOM** | `^18`    | React DOM type definitions         |

### ESLint Configuration

- **Extends**: Next.js core web vitals + TypeScript rules
- **Ignores**: `node_modules`, `.next`, `out`, `build`
- **Format**: Modern ESM configuration

---

## **Build & Development Scripts**

| Script    | Command      | Purpose                               |
| --------- | ------------ | ------------------------------------- |
| **dev**   | `next dev`   | Development server with hot reloading |
| **build** | `next build` | Production-optimized build            |
| **start** | `next start` | Production server                     |
| **lint**  | `next lint`  | Code quality checking                 |

---

## **Project Architecture**

### **Directory Structure**

```
drakon/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── fursure-landing-page.tsx
├── lib/                  # Utility functions
├── public/               # Static assets
└── configuration files
```

### **Key Features**

- **App Router**: Next.js 13+ routing system
- **Server Components**: RSC for better performance
- **Image Optimization**: Next.js Image component
- **Path Aliases**: Clean import statements (`@/components`)
- **CSS Variables**: Dynamic theming capabilities

---

## **Performance & Optimization**

### **Built-in Optimizations**

- ✅ **Image Optimization**: Automatic WebP conversion & lazy loading
- ✅ **Code Splitting**: Automatic bundle splitting
- ✅ **Tree Shaking**: Dead code elimination
- ✅ **CSS Purging**: Unused CSS removal
- ✅ **Incremental Static Regeneration**: Fast builds
- ✅ **Server Components**: Reduced client bundle size

### **Development Features**

- 🔥 **Hot Module Replacement**: Instant updates
- 🎯 **TypeScript Integration**: Real-time type checking
- 🎨 **Tailwind CSS IntelliSense**: Auto-completion
- 🔍 **ESLint Integration**: Code quality enforcement

---

## **Deployment Ready**

### **Production Configuration**

- **Build Optimization**: Minification & compression enabled
- **Static Assets**: Optimized image serving
- **SEO Ready**: Meta tags and structured data support
- **Performance**: Core Web Vitals optimized
- **Security**: Next.js security headers

### **Environment Support**

- **Development**: Full debugging capabilities
- **Production**: Optimized for performance
- **Preview**: Staging environment ready

---

## **Dependencies Summary**

### **Runtime Dependencies** (13 packages)

- Core framework & React ecosystem
- UI component libraries & primitives
- Styling & animation tools
- Utility functions

### **Development Dependencies** (0 packages)

- All tools included in dependencies for simplicity
- TypeScript types bundled appropriately

---

## **Notable Design Decisions**

1. **Sharp Geometric Design**: Moved from rounded to angular aesthetics
2. **Luxury Brand Focus**: Purple color palette for premium feel
3. **Mobile-First**: Responsive design prioritizing mobile experience
4. **Performance First**: Server components and optimization by default
5. **Type Safety**: Comprehensive TypeScript implementation
6. **Modern Standards**: Latest versions of all major dependencies

---

_Last Updated: September 9, 2025_  
_Project: Drakon Sports Private Limited - Premium Cricket Equipment Platform_
