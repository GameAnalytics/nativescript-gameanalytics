[![npm](https://img.shields.io/npm/v/nativescript-gameanalytics.svg)](https://www.npmjs.com/package/nativescript-gameanalytics)
[![npm](https://img.shields.io/npm/dt/nativescript-gameanalytics.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-gameanalytics)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# NativeScript-GameAnalytics
NativeScript plugin for the GameAnalytics SDK for Android and iOS.

#### Native Libraries:
Android | iOS
---------- | -----------
[GA-SDK-ANDROID](https://github.com/GameAnalytics/GA-SDK-ANDROID) |  [GA-SDK-IOS](https://cocoapods.org/pods/GA-SDK-IOS)

## Installation
From your command prompt/terminal go to your app's root folder and execute:

#### NativeScript (only 3.0+)
`tns plugin add nativescript-gameanalytics`

## Usage
```
import {
    GameAnalyticsSDK as GameAnalytics,
    EGAResourceFlowType,
    EGAProgressionStatus,
    EGAErrorSeverity,
    EGAGender
} from 'nativescript-gameanalytics';

// To initialize the SDK...

public initializeGameAnalytics() {
    GameAnalytics.initialize("[INSERT_GAME_KEY]", "[INSERT_SECRET_KEY]");
}

// To send events...
public sendEvent() {
    GameAnalytics.addDesignEvent("design:event");
}

```

For more documentation click [here](https://gameanalytics.com/docs/nativescript-sdk).

Changelog
---------
<!--(CHANGELOG_TOP)-->
**1.1.4**
* small fix to gradle file

**1.1.3**
* README updated

**1.1.2**
* fixed specific method for android that kept app hanging

**1.1.1**
* small fix to declaration file

**1.1.0**
* added GA beta functionality from native libs

**1.0.16**
* updated native libraries

**1.0.15**
* fixed session length bug
* fixed not allowing to add events when session is not started

**1.0.14**
* changed to use pod file for ios platform

**1.0.13**
* updated google play services compiled with native android library

**1.0.12**
* updated native libraries

**1.0.11**
* updated native ios header for missing function (ios)

**1.0.10**
* small bug fix in initialize function for ios (ios)

**1.0.9**
* fixed version sent with events

**1.0.8**
* fixed setting sdk version when initializing

**1.0.7**
* updated version validator in native libraries

**1.0.6**
* added sdk version to tracking

**1.0.5**
* bug fix initialize for android

**1.0.4**
* updated native ios library version used

**1.0.3**
* updated native android library version used

**1.0.2**
* small fix for clearing current custom dimension for iOS

**1.0.1**
* readme updated

**1.0.0**
* initial commit
