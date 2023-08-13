[![Code Quality](https://github.com/whayu901/myBook-reservation/actions/workflows/code-quality.yml/badge.svg)](https://github.com/whayu901/myBook-reservation/actions/workflows/code-quality.yml)

# MyBook CosMart TEST MOBILE ENGINEER

i have finished for test mobile engineer that i should create app using OpenLibrary API. At below i will attach several proof image for this test.

| Book List | Reservation List | Input Reservation |
| :-------: | :--------------: | :---------------: |

| ![Screenshot_1691941302](https://github.com/whayu901/MyRukit/assets/32776398/83aab190-61db-462c-9c94-90f00c770296)
| ![Screenshot_1691941307](https://github.com/whayu901/MyRukit/assets/32776398/96b7446b-5c2e-43b2-87cd-e70312b801fc) | ![Screenshot_1691941294](https://github.com/whayu901/MyRukit/assets/32776398/395c021a-ff42-4629-a5fa-5cae871ded61)
|

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

#### 1. Install node.js

Please be sure to have node.js to run this app Download [Node.JS](https://nodejs.org/en/)

#### 2. Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

- Install Android Studio

- Install the Android SDK

- Configure the ANDROID_HOME environment variable

- The last one you must check your [SDK License are accepted ](https://stackoverflow.com/questions/39760172/you-have-not-accepted-the-license-agreements-of-the-following-sdk-components)

#### 3. iOS development environment

You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.
While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

#### 4. Install React Native globally

Please be sure to react-native cli to run this app, npm install react-native -g

#### 5. Clone the repository

you can clone this repository at [Test Repository](https://github.com/whayu901/MyRukit) and after that doing command:

```
cd myBook-reservation
```

#### 6. Run the application

To start developing this app yu can follow this step:

- Type npm install and type npm run android or npm run ios:dev, the app will appear automatically in development mode.

- Finish, yeay~ Your App installation progress is done.

> (optional) if your localy instalation sdk failed, this first run must be error.
> just go to local.properties at the rootFiles/android and change the username at the file into your username on this computer and go back at the first step

## Ios

Open 2 tabs for running metro server & running IOS platform. Please make sure ur simulator / device is connected correctly.

```
yarn install
```

for ios:

```
yarn ios

```

### Unit Testing

```
yarn test -u

```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run MyBook App

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
