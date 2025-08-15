# Installation Guide

Follow these steps to set up and run the RestCountryAPP on your local machine.

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RestCountryAPP
```

### 2. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This will install:
- React and React DOM
- React Router DOM
- Parcel bundler
- Other dependencies

### 3. Start the Development Server

Run the application in development mode:

```bash
npm start
```

This will start the Parcel development server, typically at http://localhost:1234

### 4. Build for Production

To create a production build:

```bash
npm run build
```

## Troubleshooting

### React Router Version Issues

If you encounter issues with React Router, you may need to downgrade to a stable version:

```bash
npm uninstall react-router-dom
npm install react-router-dom@6.10.0
```

### Parcel Cache Issues

If you experience bundling problems, try clearing the Parcel cache:

```bash
npm cache clean --force
rmdir /s /q .parcel-cache
npm start
```

### Browser Compatibility

This application works best in modern browsers (Chrome, Firefox, Safari, Edge).