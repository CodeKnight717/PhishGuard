# PhishGuard - Real-time Phishing Detection

PhishGuard is a comprehensive security tool designed to protect users from phishing threats in real-time. It leverages heuristic analysis, threat intelligence databases, and an intuitive dashboard to provide actionable insights and alerts on potentially malicious websites.

## 🚀 Features

- **Real-time Scanning**: Analyzes URLs instantly upon navigation to intercept threats before they load.
- **Multi-layered Detection**:
  - **Heuristics**: Detects suspicious patterns like IP-based hostnames, excessive subdomains, and typosquatting.
  - **Threat Intelligence**: Integrating with services like Google Safe Browsing and PhishTank.
  - **Local Whitelists/Blacklists**: Fast lookup for known safe and malicious domains.
- **Intuitive Dashboard**: visualizes recent scans, threat statistics, and detailed reports.
- **User Reporting**: Allows users to report false positives or missed phishing sites to improve accuracy.
- **Extension Integration**: A browser extension component providing direct feedback on the current page's safety status.

## 🛠️ Technology Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) - Fast, modular UI development.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI design.
- **Icons**: [Lucide React](https://lucide.dev/icons/) - Beautiful & consistent icons.
- **Routing**: [React Router](https://reactrouter.com/) - Client-side routing for seamless navigation.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - For smooth transitions and interactive elements.
- **Charts**: [Recharts](https://recharts.org/) - Data visualization for the dashboard.
- **Linting**: ESLint - Code quality and consistency.

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/CodeKnight717/PhishGuard.git
    cd PhishGuard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To build the application for production:

```bash
npm run build
```

This will generate the static files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

Make sure your repository settings are configured to serve from the `gh-pages` branch.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## 📄 License

This project is licensed under the MIT License.
