This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Project Structure

```
GlowCart/
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── app.json
├── App.tsx
├── babel.config.js
├── builder.config.json
├── Gemfile
├── index.js
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── __tests__/
│   └── App.test.tsx
├── android/
│   ├── build.gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   ├── app/
│   │   ├── build.gradle
│   │   ├── debug.keystore
│   │   ├── proguard-rules.pro
│   │   ├── build/
│   │   ├── src/
│   │   │   ├── debug/
│   │   │   │   └── AndroidManifest.xml
│   │   │   ├── main/
│   │   │   │   ├── AndroidManifest.xml
│   │   │   │   ├── assets/
│   │   │   │   │   └── fonts/
│   │   │   │   │       ├── Ionicons.ttf
│   │   │   │   │       └── MaterialCommunityIcons.ttf
│   │   │   │   ├── java/
│   │   │   │   │   └── com/
│   │   │   │   │       └── glowcartcli/
│   │   │   │   │           ├── MainActivity.kt
│   │   │   │   │           └── MainApplication.kt
│   │   │   │   ├── res/
│   │   │   │   │   ├── drawable/
│   │   │   │   │   │   └── rn_edit_text_material.xml
│   │   │   │   │   ├── mipmap-hdpi/
│   │   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   │   └── ic_launcher.png
│   │   │   │   │   ├── mipmap-mdpi/
│   │   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   │   └── ic_launcher.png
│   │   │   │   │   ├── mipmap-xhdpi/
│   │   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   │   └── ic_launcher.png
│   │   │   │   │   ├── mipmap-xxhdpi/
│   │   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   │   └── ic_launcher.png
│   │   │   │   │   ├── mipmap-xxxhdpi/
│   │   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   │   └── ic_launcher.png
│   │   │   │   │   ├── values/
│   │   │   │   │   │   ├── strings.xml
│   │   │   │   │   │   └── styles.xml
│   │   ├── build/
│   │   └── gradle/
│   │       └── wrapper/
│   │           ├── gradle-wrapper.jar
│   │           └── gradle-wrapper.properties
├── assets/
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf
│   ├── icons/
│   │   ├── addressicon.png
│   │   ├── contactusicon.png
│   │   ├── gethelpicon.png
│   │   ├── Group.png
│   │   ├── Group(1).png
│   │   ├── languageicon.png
│   │   ├── notificationicon.png
│   │   ├── privacypolicyicon.png
│   │   └── Vector(4).png
│   └── images/
│       ├── adaptive-icon.png
│       ├── Apple.png
│       ├── ep_back.png
│       ├── Facebook.png
│       ├── favicon.png
│       ├── Google.png
│       ├── icon.png
│       ├── image1.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       └── splash-icon.png
├── ios/
│   ├── .xcode.env
│   ├── Podfile
│   ├── GlowCartCLI/
│   │   ├── AppDelegate.swift
│   │   ├── Info.plist
│   │   ├── LaunchScreen.storyboard
│   │   ├── PrivacyInfo.xcprivacy
│   │   └── Images.xcassets/
│   │       ├── Contents.json
│   │       └── AppIcon.appiconset/
│   │           └── Contents.json
│   └── GlowCartCLI.xcodeproj/
│       ├── project.pbxproj
│       ├── xcshareddata/
│       │   └── xcschemes/
│       │       └── GlowCartCLI.xcscheme
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   └── ProductCard.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── BagContext.js
│   ├── data/
│   │   └── products.json
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── screens/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Offers.js
│   │   ├── Onboarding.js
│   │   ├── ProductDetails.js
│   │   ├── Profile.js
│   │   ├── Register.js
│   │   └── Wishlist.js
│   └── services/
│       └── api.js
```

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
