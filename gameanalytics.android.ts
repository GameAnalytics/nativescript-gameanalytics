import * as app from "tns-core-modules/application";

export enum EGAErrorSeverity
{
    Undefined = 0,
    Debug = 1,
    Info = 2,
    Warning = 3,
    Error = 4,
    Critical = 5
}

export enum EGAGender
{
    Undefined = 0,
    Male = 1,
    Female = 2
}

export enum EGAProgressionStatus
{
    Undefined = 0,
    Start = 1,
    Complete = 2,
    Fail = 3
}

export enum EGAResourceFlowType
{
    Undefined = 0,
    Source = 1,
    Sink = 2
}

declare var com: any;
const GameAnalytics:any = com.gameanalytics.sdk.GameAnalytics;

export class GameAnalyticsSDK {
    private static version:string = "1.0.9";

    // public functions
    public static configureAvailableCustomDimensions01(customDimensions:Array<string> = []): void
    {
        GameAnalytics.configureAvailableCustomDimensions01(customDimensions);
    }

    public static configureAvailableCustomDimensions02(customDimensions:Array<string> = []): void
    {
        GameAnalytics.configureAvailableCustomDimensions02(customDimensions);
    }

    public static configureAvailableCustomDimensions03(customDimensions:Array<string> = []): void
    {
        GameAnalytics.configureAvailableCustomDimensions03(customDimensions);
    }

    public static configureAvailableResourceCurrencies(resourceCurrencies:Array<string> = []): void
    {
        GameAnalytics.configureAvailableResourceCurrencies(resourceCurrencies);
    }

    public static configureAvailableResourceItemTypes(resourceItemTypes:Array<string> = []): void
    {
        GameAnalytics.configureAvailableResourceItemTypes(resourceItemTypes);
    }

    public static configureBuild(build:string = ""): void
    {
        GameAnalytics.configureBuild(build);
    }

    public static configureUserId(uId:string = ""): void
    {
        GameAnalytics.configureUserId(uId);
    }

    public static initialize(gameKey:string = "", gameSecret:string = ""): void
    {
        GameAnalytics.configureSdkGameEngineVersion("nativescript " + GameAnalyticsSDK.version);
        //GameAnalytics.configureGameEngineVersion("nativescript " + NATIVESCRIPT_VERSION);
        GameAnalytics.initializeWithGameKey(app.android.startActivity, gameKey, gameSecret);
    }

    public static addBusinessEvent(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = ""): void
    {
        GameAnalytics.addBusinessEventWithCurrency(currency, amount, itemType, itemId, cartType);
    }

    public static addBusinessEventAndroid(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", receipt:string, signature:string): void
    {
        GameAnalytics.addBusinessEventWithCurrency(currency, amount, itemType, itemId, cartType, receipt, "google_play", signature)
    }

    public static addBusinessEventIOS(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", receipt:string): void
    {
        throw new Error("addBusinessEventIOS is only supported on iOS platform");
    }

    public static addBusinessEventAndAutoFetchReceiptIOS(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = ""): void
    {
        throw new Error("addBusinessEventAndAutoFetchReceiptIOS is only supported on iOS platform");
    }

    public static addResourceEvent(flowType:EGAResourceFlowType = EGAResourceFlowType.Undefined, currency:string = "", amount:number = 0, itemType:string = "", itemId:string = ""): void
    {
        GameAnalytics.addResourceEventWithFlowType(flowType, currency, amount, itemType, itemId);
    }

    public static addProgressionEvent(progressionStatus:EGAProgressionStatus = EGAProgressionStatus.Undefined, progression01:string = "", progression02:string = "", progression03:string = "", score?:number): void
    {
        var sendScore:boolean = typeof score != "undefined";

        if(sendScore)
        {
            GameAnalytics.addProgressionEventWithProgressionStatus(progressionStatus, progression01, progression02, progression03, score)
        }
        else
        {
            GameAnalytics.addProgressionEventWithProgressionStatus(progressionStatus, progression01, progression02, progression03);
        }
    }

    public static addDesignEvent(eventId:string, value?:number): void
    {
        var sendValue:boolean = typeof value != "undefined";

        if(sendValue)
        {
            GameAnalytics.addDesignEventWithEventId(eventId, value);
        }
        else
        {
            GameAnalytics.addDesignEventWithEventId(eventId);
        }
    }

    public static addErrorEvent(severity:EGAErrorSeverity = EGAErrorSeverity.Undefined, message:string = ""): void
    {
        GameAnalytics.addErrorEventWithSeverity(severity, message);
    }

    public static setEnabledInfoLog(flag:boolean = false): void
    {
        GameAnalytics.setEnabledInfoLog(flag);
    }

    public static setEnabledVerboseLog(flag:boolean = false): void
    {
        GameAnalytics.setEnabledVerboseLog(flag);
    }

    public static setEnabledManualSessionHandling(flag:boolean = false): void
    {
        GameAnalytics.setEnabledManualSessionHandling(flag);
    }

    public static setCustomDimension01(dimension:string = ""): void
    {
        GameAnalytics.setCustomDimension01(dimension);
    }

    public static setCustomDimension02(dimension:string = ""): void
    {
        GameAnalytics.setCustomDimension02(dimension);
    }

    public static setCustomDimension03(dimension:string = ""): void
    {
        GameAnalytics.setCustomDimension03(dimension);
    }

    public static setFacebookId(facebookId:string = ""): void
    {
        GameAnalytics.setFacebookId(facebookId);
    }

    public static setGender(gender:EGAGender = EGAGender.Undefined): void
    {
        GameAnalytics.setGender(gender);
    }

    public static setBirthYear(birthYear:number = 0): void
    {
        GameAnalytics.setBirthYear(birthYear);
    }

    public static startSession(): void
    {
        GameAnalytics.startSession();
    }

    public static endSession(): void
    {
        GameAnalytics.endSession();
    }
}
