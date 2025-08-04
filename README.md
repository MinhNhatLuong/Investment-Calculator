# Investment Calculator

## Description

The Investment Calculator is a modern, user-friendly web application built with React.js and Vite that helps individuals make informed financial decisions about their investments. This interactive tool enables users to visualize their potential investment growth over time by considering multiple financial parameters.

The calculator takes into account crucial investment factors such as initial investment amount, annual contributions, expected return rate, and investment duration to provide detailed projections of your investment's future value. It uses compound interest calculations to demonstrate how your money could grow over time, helping you plan for long-term financial goals like retirement, education savings, or wealth building.

What sets this calculator apart is its real-time calculation feature – as soon as users input or modify any parameter, the results update instantly, providing immediate feedback on how different scenarios might affect their investment outcomes. The results are presented in a clear, easy-to-understand format, showing both the accumulated interest and the total investment value year by year.

The application features a clean, intuitive interface designed for both financial novices and experienced investors. It's built with modern web technologies ensuring fast performance, responsive design, and a seamless user experience across different devices and screen sizes.

## Technologies Used

- React.js
- Vite (Build Tool)
- CSS for styling
- JavaScript (ES6+)

## Features

- Calculate investment returns based on:
  - Initial investment
  - Annual investment
  - Expected return rate
  - Investment duration

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MinhNhatLuong/Investment-Calculator.git
```

2. Navigate to the project directory:
```bash
cd investment-calculator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will start running on `http://localhost:5173` (or another port if 5173 is occupied).

## Project Structure

```
investment-calculator/
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── assets/
│   │   └── investment-calculator-logo.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Results.jsx
│   │   └── UserInput.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── index.html
└── vite.config.js
```

## Usage

1. Enter your investment details in the input form:
   - Initial investment amount
   - Annual investment
   - Expected return rate
   - Duration of investment

2. The calculator will automatically show you the projected returns based on your inputs.

## Development

To modify this project:

1. Make changes to the React components in the `src/components` directory
2. Utility functions for calculations are in `src/util/investment.js`
3. Styling can be modified in `src/index.css`

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` folder with optimized production files.

## Author

MinhNhatLuong
