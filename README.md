# Make Real React Native Starter App

![Stack](https://raw.githubusercontent.com/make-real/Resources/main/background.png)

React Native starter is what we think an ideal starting point for the most React Native applications. It is based on the following primary technologies:

```JSON
"dependencies": {
    "@alentoma/react-native-selectable-text": "^1.5.6",
    "@gorhom/bottom-sheet": "^4",
    "@react-native-async-storage/async-storage": "^1.17.4",
    "@react-native-community/clipboard": "^1.5.1",
    "@react-native-community/slider": "^4.2.2",
    "@react-native-masked-view/masked-view": "^0.2.6",
    "@react-navigation/bottom-tabs": "^6.3.1",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.2",
    "@reduxjs/toolkit": "^1.8.1",
    "@twotalltotems/react-native-otp-input": "^1.3.11",
    "axios": "^0.27.2",
    "glob": "^7.2.0",
    "react": "17.0.2",
    "react-native": "0.68.2",
    "react-native-app-intro-slider": "^4.0.4",
    "react-native-gesture-handler": "^2.4.2",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-modal": "^13.0.1",
    "react-native-ratings": "^8.1.0",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "^4.2.5",
    "react-native-screens": "^3.13.1",
    "react-native-shadow-2": "^6.0.5",
    "react-native-skeleton-placeholder": "^5.0.0",
    "react-native-spinkit": "^1.5.1",
    "react-native-svg": "^12.3.0",
    "react-native-vector-icons": "^9.1.0",
    "react-redux": "^8.0.2",
    "redux-persist": "^6.0.0"
  },
```
# Preview
![Stack](https://raw.githubusercontent.com/make-real/Resources/main/intro.png)

![Stack](https://raw.githubusercontent.com/make-real/Resources/main/signup.png)

![Stack](https://raw.githubusercontent.com/make-real/Resources/main/otp.png)

![Stack](https://raw.githubusercontent.com/make-real/Resources/main/library.png)


# Start

#### 1. Clone and Install

```bash
# Clone the repo

# SSH
git clone git@github.com:make-real/MakeRealStarterApp.git
# HTTPS
git clone https://github.com/make-real/MakeRealStarterApp.git

# Install dependencies
yarn install
# or
npm install
```

#### 2. Start the app on the device or emulator

```bash
# start a development server
npm start

# run the app on device/emulator
npm run android
# or
npm run ios
```

### Explanations of the files structure.

```bash
fairtoss-mobile
├── android................(Native Android Project Folder)
├── ios....................(Native IOS Project Foder)
└── src
    ├── api................(Includes All the Api Calls)
    ├── assets.............(Includes All the Image and Font Files)
    ├── components.........(Includes All the UI Componnets)
    ├── interfaces.........(Contains Data Types)
    ├── container..........(UI Screens and Navigations)
    ├── constants..........(Contains All the Reusable Variables)
    ├── store..............(State Manager)
    │    └── reducers......(Contains Redux Toolkit Slices)
    ├── styles.............(Theme Manager)
    └── utils..............(Contains Project Helper Functions)
```

# How to change android package name

Change "android/app/src/main/java/MY/APP/OLD_ID/" to: "android/app/src/main/java/MY/APP/NEW_ID/"

Then manually switched the old and new package ids:

In: android/app/src/main/java/MY/APP/NEW_ID/MainActivity.java:
```
package MY.APP.NEW_ID;
```

In android/app/src/main/java/MY/APP/NEW_ID/MainApplication.java:
```
package MY.APP.NEW_ID;
```

In android/app/src/main/AndroidManifest.xml:
```
package="MY.APP.NEW_ID"
```

And in android/app/build.gradle:
```
applicationId "MY.APP.NEW_ID"
```

In android/app/BUCK:

```
android_build_config(
  package="MY.APP.NEW_ID"
)
android_resource(
  package="MY.APP.NEW_ID"
)
```
Gradle' cleaning in the end (in /android folder):
```bash
./gradlew clean
```

# How to change ios bundle id
```
1. From terminal or command prompt navigate to react-native project folder and then go inside iOS folder.

2. enter command Open ProjectName.xcodeproj
```

This command will open the project in Xcode where you need to update bundle identifier information of the app