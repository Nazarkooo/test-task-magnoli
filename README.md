# 💳 Wallet App

A modern, responsive React.js and TypeScript mobile wallet application featuring clean design, comprehensive transaction management, and advanced user experience optimizations.

## ✨ Features

### 🏠 **Main Dashboard**
- **Card Balance Display**: Real-time balance with available credit calculation
- **Payment Status**: Visual confirmation of payment status with checkmark
- **Daily Points**: Season-based points calculation with smart formatting
- **Transaction History**: Clean, scrollable list of recent transactions

### 📱 **Transaction Details**
- **Comprehensive Information**: Full transaction details with status, payment method, and location
- **Smart Navigation**: Intuitive back navigation with keyboard support
- **Responsive Design**: Optimized for all mobile screen sizes
- **Accessibility**: Full ARIA support and keyboard navigation

### 🎨 **Design & UX**
- **Modern UI**: Clean, minimalist design with subtle animations
- **Mobile-First**: Responsive design optimized for mobile devices
- **Loading States**: Smooth loading indicators and error handling
- **Accessibility**: WCAG compliant with screen reader support

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wallet-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 📁 Project Architecture

```
src/
├── components/                    # Reusable UI components
│   ├── CardBalance/              # Card balance display
│   │   ├── CardBalance.tsx
│   │   ├── CardBalance.css
│   │   └── index.ts
│   ├── CheckmarkIcon/            # Status confirmation icon
│   ├── DailyPoints/              # Points calculation display
│   ├── ErrorBoundary/            # Error handling component
│   ├── LoadingSpinner/           # Loading state component
│   ├── PaymentDue/               # Payment status component
│   ├── SummarySection/           # Dashboard summary
│   ├── TransactionDetail/        # Transaction detail view
│   ├── TransactionItem/          # Individual transaction row
│   ├── TransactionList/          # Transaction list container
│   └── TransactionsPage/        # Main dashboard page
├── constants/                     # Application constants
│   └── index.ts
├── data/                         # Static data
│   └── testData.json
├── types/                        # TypeScript definitions
│   └── index.ts
├── utils/                        # Utility functions
│   ├── dailyPoints.ts           # Points calculation logic
│   └── dateUtils.ts             # Date formatting utilities
├── App.tsx                      # Main application component
├── App.css                      # Global styles
├── index.tsx                    # Application entry point
└── index.css                    # Global CSS reset
```

## 🏗️ Component Architecture

### **Modern React Patterns**
- **Functional Components**: All components use modern React hooks
- **TypeScript**: Strict typing throughout the application
- **Performance**: React.memo for optimized re-rendering
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### **Component Structure**
Each component follows a consistent pattern:
```
ComponentName/
├── ComponentName.tsx      # Main component logic
├── ComponentName.css      # Component-specific styles
└── index.ts              # Clean export interface
```

## 🎯 Key Features

### **Card Balance Management**
- Real-time balance calculation
- Available credit display
- Visual status indicators
- Responsive typography

### **Daily Points System**
- Season-based calculation algorithm
- Smart formatting (K notation for large numbers)
- Dynamic point accumulation
- Visual point display

### **Transaction Management**
- Comprehensive transaction history
- Smart date formatting (Today, Yesterday, Day names, Full dates)
- Transaction type detection (Credit/Payment)
- Merchant-specific icons
- Status indicators (Pending, Completed, Approved)

### **Advanced UX Features**
- **Loading States**: Smooth loading indicators
- **Error Boundaries**: Graceful error handling
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized rendering with React.memo

## 🔧 Technical Implementation

### **TypeScript Configuration**
- Strict type checking enabled
- No implicit any types
- Readonly interfaces for immutable data
- Comprehensive type definitions

### **Performance Optimizations**
- React.memo for component memoization
- useCallback for function optimization
- Lazy loading with Suspense
- Efficient re-rendering patterns

### **Accessibility Features**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA labels and roles

### **Error Handling**
- Error boundaries for component isolation
- Graceful error recovery
- User-friendly error messages
- Development error details

## 🎨 Design System

### **Color Palette**
- Primary: Clean whites and light grays
- Accent: Blue (#007aff) for interactive elements
- Success: Green (#34c759) for positive states
- Text: Dark grays for optimal contrast

### **Typography**
- System fonts for native feel
- Responsive font sizing
- Clear hierarchy
- Accessible contrast ratios

### **Spacing & Layout**
- Consistent 8px grid system
- Mobile-first responsive design
- Touch-friendly interactive elements
- Generous whitespace for readability

## 🧪 Testing & Quality

### **Code Quality**
- ESLint with TypeScript rules
- Prettier for consistent formatting
- Strict TypeScript configuration
- No console errors or warnings

### **Performance**
- Optimized bundle size
- Fast loading times
- Efficient rendering
- Minimal re-renders

## 🚀 Deployment

### **Production Build**
```bash
npm run build
```

The build process creates an optimized production bundle in the `dist` folder.

### **Preview Production Build**
```bash
npm run preview
```

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Responsive**: 320px to 768px viewport widths

## 🤝 Contributing

### **Development Guidelines**
1. Follow TypeScript best practices
2. Use functional components with hooks
3. Implement proper error handling
4. Ensure accessibility compliance
5. Write clean, readable code
6. Follow the established component structure

### **Code Standards**
- ESLint configuration enforced
- Prettier formatting required
- TypeScript strict mode
- Component co-location pattern

## 📄 License

This project is part of a technical assessment and is for demonstration purposes.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**