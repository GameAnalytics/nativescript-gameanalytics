[![npm](https://img.shields.io/npm/v/nativescript-gameanalytics.svg)](https://www.npmjs.com/package/nativescript-gameanalytics)
[![npm](https://img.shields.io/npm/dt/nativescript-gameanalytics.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-gameanalytics)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# NativeScript-GameAnalytics
NativeScript plugin for the GameAnalytics SDK for Android and iOS.

#### Native Libraries: 
Android | iOS
---------- | -----------
[GameAnalytics/GA-SDK-ANDROID](https://github.com/gcacace/android-signaturepad) |  [SignatureView](https://cocoapods.org/pods/SignatureView)

## Installation
From your command prompt/termial go to your app's root folder and execute:

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

For more documentation click [here](https://gameanalytics.com/docs).

Changelog
---------
<!--(CHANGELOG_TOP)-->
**1.0.0**
* initial commit
