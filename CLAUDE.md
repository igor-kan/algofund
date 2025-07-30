# Algofund - Management Platform

## Project Overview
**Live Application**: https://igor-kan.github.io/algofund/

AlgoFund is a sophisticated AI-powered algorithmic trading and fund management platform that revolutionizes investment strategies through advanced machine learning models, quantitative analysis, and automated trading systems. Built with cutting-edge financial algorithms and real-time market analysis capabilities, AlgoFund provides institutional-grade trading intelligence, portfolio optimization, risk management, and performance analytics for both individual and institutional investors.

## Technology Stack
- **Framework**: Vite
- **Language**: TypeScript
- **Runtime**: React 18.3.1
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: TanStack Query
- **Routing**: React Router
- **Form Management**: React Hook Form + Zod validation
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Key Features
- Modern responsive web application
- TypeScript for type safety
- Accessible UI components with Radix UI
- Advanced form handling and validation
- Efficient data fetching and caching
- Interactive data visualization
- Dark/light theme switching

## Core Dependencies
- **UI Framework**: Radix UI component suite
- **Styling**: class-variance-authority, clsx, tailwind-merge
- **Forms**: react-hook-form with Zod validation
- **Data Fetching**: TanStack Query for server state
- **Recharts**: Data visualization and charts
- **Date Fns**: Date manipulation utilities
- **Lucide React**: Icon library
- **Next Themes**: Theme management
- **Sonner**: Toast notifications
- **Cmdk**: Command palette
- **Vaul**: Mobile-optimized modals

## Development Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

```

## Project Structure
```
algofund/
├── src/                     # Source code
├── public/                  # Static assets
├── vite.config.ts           # Configuration
├── tailwind.config.ts       # Configuration
├── tsconfig.json            # Configuration
└── package.json             # Dependencies
```

## Deployment
- **Platform**: GitHub Pages
- **URL**: https://igor-kan.github.io/algofund
- **Build**: Static site generation
- **CI/CD**: Automated deployment via gh-pages

## Development Notes
- Uses Vite for fast development and optimized builds
- Implements comprehensive form validation with Zod
- Includes accessibility features through Radix UI
- Supports dark/light theme switching

## Vite Features
- **Fast HMR**: Hot module replacement
- **Lightning Dev Server**: Instant startup
- **Optimized Builds**: Production optimization
- **Plugin Ecosystem**: Rich plugin support
- **Modern JavaScript**: ES modules support

## Testing & Quality
- TypeScript for type safety
- ESLint for code quality

## Algorithmic Trading Features
- **Strategy Development**: Visual algorithm builder with backtesting capabilities
- **Risk Management**: Real-time portfolio risk assessment and position sizing
- **Market Data Integration**: Live data feeds from multiple exchanges and markets
- **Performance Analytics**: Comprehensive trading performance metrics and attribution
- **Automated Execution**: High-frequency trading with latency optimization

## Investment Fund Management
- **Portfolio Construction**: Multi-asset portfolio optimization and rebalancing
- **Investor Relations**: Client reporting, statements, and communication tools
- **Compliance Monitoring**: Regulatory compliance tracking and reporting
- **Fee Calculation**: Automated management and performance fee calculations
- **Redemption Management**: Investor subscription and redemption processing

## Financial Analytics & Visualization
- **Real-time Dashboards**: Live portfolio performance and market data displays
- **Risk Metrics**: VaR, Sharpe ratio, maximum drawdown, and correlation analysis
- **Attribution Analysis**: Performance breakdown by strategy, sector, and security
- **Scenario Testing**: Stress testing and Monte Carlo simulations
- **Benchmark Comparison**: Performance analysis against market indices

## Trading Infrastructure
- **Order Management**: Advanced order routing and execution management
- **Market Connectivity**: Direct market access and prime brokerage integration
- **Data Management**: Historical data storage and real-time feed processing
- **Latency Optimization**: High-performance computing for algorithmic strategies
- **Backup Systems**: Redundant systems for operational continuity

## Regulatory Compliance
- **SEC Reporting**: Automated regulatory filing and compliance monitoring
- **Audit Trails**: Comprehensive transaction and decision logging
- **Risk Controls**: Pre-trade risk checks and position limits
- **KYC/AML**: Know Your Customer and Anti-Money Laundering procedures
- **GDPR Compliance**: Data privacy and protection standards

## Future Enhancements
- **Machine Learning Models**: AI-powered trading strategies and market prediction
- **Alternative Data**: Integration of satellite, social media, and economic indicators
- **Cryptocurrency Trading**: Digital asset algorithmic trading capabilities
- **ESG Integration**: Environmental, Social, and Governance investment criteria
- **Robo-Advisory**: Automated investment advice for retail clients
- **Cross-Asset Trading**: Multi-asset class algorithmic strategies



## 🧭 Claude Code Navigation

### Quick Commands
**Development Scripts:**
- `dev`: vite
- `build`: vite build
- `lint`: eslint .
- `deploy`: gh-pages -d dist

**Key Files:**
- `package.json` - Dependencies and scripts configuration
- `README.md` - Project documentation and setup guide
- `CLAUDE.md` - Comprehensive development guide for Claude
- `vite.config.ts` - Vite build tool configuration
- `tailwind.config.ts` - Tailwind CSS styling configuration
- `tsconfig.json` - TypeScript compiler configuration
- `components.json` - shadcn/ui components configuration

**Key Directories:**
- `src/` - Source code and main application logic
- `public/` - Static assets (images, icons, etc.)

**Claude Code Files:**
- `.claude/project-context.md` - Project overview and structure
- `.claude/coding-standards.md` - Development guidelines and patterns
- `.claude/commands/` - Custom Claude commands for common tasks
- `.claude/context/` - Domain-specific development context


### Quick Reference

**Common Tasks:**
- Start development: `npm run dev` or `bun dev`
- Build project: `npm run build` or `bun build`
- Lint code: `npm run lint` or `bun lint`
- Deploy: `npm run deploy` or `bun deploy`

**File Patterns:**
- Components: `components/**/*.tsx`
- Pages: `app/**/*.tsx` or `pages/**/*.tsx`
- Utilities: `lib/**/*.ts`
- Styles: `**/*.css` or use Tailwind classes
- Tests: `**/*.test.ts` or `**/*.spec.ts`

**Development Tips:**
- Use TypeScript for type safety
- Follow existing component patterns
- Utilize shadcn/ui components
- Implement responsive design with Tailwind
- Test changes before committing

