# GlowCart

GlowCart is a React Native e-commerce application built with Expo. It provides a seamless shopping experience with features like user authentication, product browsing, wishlist management, and more. The app is designed to run on iOS, Android, and web platforms.

## Features

- User authentication (login, register, onboarding)
- Product catalog and details
- Shopping cart and wishlist
- Responsive design with dark/light mode support
- File-based routing with Expo Router
- Cross-platform compatibility (iOS, Android, Web)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

For mobile development:
- [Android Studio](https://developer.android.com/studio) for Android emulator
- [Xcode](https://developer.apple.com/xcode/) for iOS simulator (macOS only)

## Setup and Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd glowcart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

## Running the App

After starting the development server, you'll see options to run the app on different platforms:

- **Development Build**: For a full native experience
- **Android Emulator**: Requires Android Studio
- **iOS Simulator**: Requires Xcode (macOS only)
- **Expo Go**: Quick testing on physical devices
- **Web Browser**: For web version

### Platform-specific commands:

- **Android**:
  ```bash
  npm run android
  ```

- **iOS**:
  ```bash
  npm run ios
  ```

- **Web**:
  ```bash
  npm run web
  ```

## Project Structure

```
glowcart/
├── app/                    # Main app directory (file-based routing)
│   ├── (tabs)/            # Tab navigation screens
│   ├── product/           # Product-related screens
│   ├── index.js           # Home screen
│   ├── login.js           # Login screen
│   ├── register.js        # Registration screen
│   └── onboarding.js      # Onboarding flow
├── components/            # Reusable UI components
├── constants/             # App constants (colors, etc.)
├── data/                  # Static data (products.json)
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
├── assets/                # Images, fonts, and other assets
└── rn-cli/                # Alternative CLI version (if needed)
```

## Development

- Edit files in the `app/` directory to modify screens
- Add components in the `components/` directory
- Update styles and themes in `constants/Colors.ts`
- Manage data in the `data/` directory

## Reset Project

To start fresh with a blank app:

```bash
npm run reset-project
```

This moves the current app code to `app-example/` and creates a new blank `app/` directory.

