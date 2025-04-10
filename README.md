# Chat App

Chat App is a React Native chat application built using Expo and Google Firebase.
The app allows user to chat in real-time, share images, and send their location.
It supports offline functionality by caching messages locally and reconnecting to Firebase when the network is restored.

## Features

- Anonymous authentication using Firebase Auth
- Real-time chat powered by Firebase
- Image sharing via Firebase Storage
- Offline support with AsyncStorage
- Location sharing with react-native-maps and Google Maps API

## Tech Stack

- React Native
- Expo
- Google Firebase

## Installation

1. Clone this repository:
```bash
git clone https://github.com/vskelton/newchatapp
```
2. Install dependencies:
```bash
npm install
```
3. Start the app:
```bash
npm start
```
If using Expo, you can use:
```bash
npx expo start
```

## Firebase Setup

To use Firebase with this app, you will need to set up a Firebase project and replace the Firebase configuration in the App.js file.

Go to the Google Firebase console.
Create a new Firebase Project.
Add Firebase Authenication, Firestore, and Firebase Storage to your project.
Copy the Firebase configuration and paste it into the firebaseConfig object in App.js

## Dependencies

firebase: For interacting with Firebase services, like Firestore and Firebase Storage
@react-navigation/native: For navigation between screens.
react-native-maps: For displaying the user location on a map
@react-native-community/netinfor: To monitor the network connection status
expo-image-picker: To allow users to pick images from the photo gallery on the device