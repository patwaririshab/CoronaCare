# CoronaCare
<p align = "center"> <image src="./CoronaCare/src/assets/images/13coronavirus-explainer-mobileMasterAt3x-v2.jpg"> </p>

## What is CoronaCare?
A mobile app platform to record and upload your daily temperature to myaces. 
It makes surviging Covid-19 and daily temperature taking a breeze! Jerome changes

## Setup
1. If using 
    - SSH: `git clone git@github.com:crazyRichAsians/CoronaCare.git`
    - HTTPS: `git clone https://github.com/crazyRichAsians/CoronaCare.git`
  
2. `yarn install`
3. `cd ios && pod install` 

## App Organisation 
References: 
[App Structure Reference](https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc)
, [Atomic Pattern Reference](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)

The code is organised as shown below

- `src`: the top level folder for all source files
  - `api:` contains logic related to external API communications
  - `assets:` houses static files used in the app (ie. images)
  - `components:` shared components used across features are stored here
    - `atoms:` the smallest possible components (ie. buttons, titles, inputs, color pallets, etc)
    - `molecules:` combination of one or more atoms
    - `organisms:` combination of molecules that work together
  - `features:` a module for each of the application features
  - navigation
  - `reducers:` this is an application level reducer, its function is to merge the various feature level reducers using redux's combineReducers function
  - `styles:` this module holds application level styles
- `index.js:` this is the application entry file. This must not be messed with.


# Challenges Faced

1. Setting up `react-native-navigation`
  - It was a horrific experience trying to debug why `react-native-navigation` isnt working.
    I kept getting the error mentioned in https://github.com/wix/react-native-navigation/issues/5520
  - Resolution: 
    - Manually update the android native files as per instruction in the library documentaion
    - FOR IOS: 
      - **DO NOT DO** do manual linking first
      - Simply have to `cd ios && pod install`
      - Then go to AppDelegate.m and then udpate the didFinishLaunchingWithOptions() entry method with the code in the documentation




