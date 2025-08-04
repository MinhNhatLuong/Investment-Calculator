# Investment Calculator

This is a React-based Investment Calculator application that helps users calculate their investment returns based on various parameters.

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

## License

[MIT License](LICENSE)

## Author

MinhNhatLuong
