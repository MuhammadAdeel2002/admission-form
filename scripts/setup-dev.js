#!/usr/bin/env node

/**
 * Setup Development Environment
 * 
 * This script helps set up the development environment by:
 * 1. Checking for required dependencies
 * 2. Creating necessary directories if they don't exist
 * 3. Setting up environment variables
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

console.log(`${colors.blue}=== SGC Website Development Setup ===${colors.reset}\n`);

// Check if .env.local exists, if not copy from .env.example
try {
  if (!fs.existsSync('.env.local') && fs.existsSync('.env.example')) {
    fs.copyFileSync('.env.example', '.env.local');
    console.log(`${colors.green}✓ Created .env.local from template${colors.reset}`);
    console.log(`${colors.yellow}! Please edit .env.local to add your environment variables${colors.reset}`);
  } else if (!fs.existsSync('.env.local')) {
    console.log(`${colors.yellow}! .env.local and .env.example not found${colors.reset}`);
  } else {
    console.log(`${colors.green}✓ .env.local already exists${colors.reset}`);
  }
} catch (err) {
  console.error(`${colors.red}✗ Error setting up environment variables: ${err.message}${colors.reset}`);
}

// Check for required directories
const requiredDirs = [
  'public/images',
  'app/components/ui',
  'app/hooks',
  'app/lib'
];

requiredDirs.forEach(dir => {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`${colors.green}✓ Created ${dir} directory${colors.reset}`);
    } else {
      console.log(`${colors.green}✓ ${dir} directory exists${colors.reset}`);
    }
  } catch (err) {
    console.error(`${colors.red}✗ Error creating ${dir}: ${err.message}${colors.reset}`);
  }
});

// Install dependencies if node_modules doesn't exist
if (!fs.existsSync('node_modules')) {
  console.log(`${colors.cyan}Installing dependencies...${colors.reset}`);
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log(`${colors.green}✓ Dependencies installed successfully${colors.reset}`);
  } catch (err) {
    console.error(`${colors.red}✗ Error installing dependencies${colors.reset}`);
    process.exit(1);
  }
} else {
  console.log(`${colors.green}✓ Dependencies already installed${colors.reset}`);
}

console.log(`\n${colors.blue}=== Setup Complete ===${colors.reset}`);
console.log(`\nYou can now run the development server with:
${colors.cyan}npm run dev${colors.reset}

Open ${colors.cyan}http://localhost:3000${colors.reset} in your browser to see the website.
`); 