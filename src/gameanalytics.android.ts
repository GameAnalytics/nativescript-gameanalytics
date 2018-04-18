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
    private static version:string = "1.0.13";

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

    public static addBusinessEvent(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        GameAnalytics.addBusinessEventWithCurrency(currency, amount, itemType, itemId, cartType, fieldsString);
    }

    public static addBusinessEventAndroid(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", receipt:string, signature:string, fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        GameAnalytics.addBusinessEventWithCurrency(currency, amount, itemType, itemId, cartType, receipt, "google_play", signature, fieldsString)
    }

    public static addBusinessEventIOS(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", receipt:string, fields:{[id:string]: any} = {}): void
    {
        throw new Error("addBusinessEventIOS is only supported on iOS platform");
    }

    public static addBusinessEventAndAutoFetchReceiptIOS(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", fields:{[id:string]: any} = {}): void
    {
        throw new Error("addBusinessEventAndAutoFetchReceiptIOS is only supported on iOS platform");
    }

    public static addResourceEvent(flowType:EGAResourceFlowType = EGAResourceFlowType.Undefined, currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        GameAnalytics.addResourceEventWithFlowType(flowType, currency, amount, itemType, itemId, fieldsString);
    }

    public static addProgressionEvent(progressionStatus:EGAProgressionStatus = EGAProgressionStatus.Undefined, progression01:string = "", progression02:string = "", progression03:string = "", score?:number, fields:{[id:string]: any} = {}): void
    {
        var sendScore:boolean = typeof score != "undefined";
        var fieldsString:string = JSON.stringify(fields);

        if(sendScore)
        {
            GameAnalytics.addProgressionEventWithProgressionStatus(progressionStatus, progression01, progression02, progression03, score, fieldsString)
        }
        else
        {
            GameAnalytics.addProgressionEventWithProgressionStatus(progressionStatus, progression01, progression02, progression03, fieldsString);
        }
    }

    public static addDesignEvent(eventId:string, value?:number, fields:{[id:string]: any} = {}): void
    {
        var sendValue:boolean = typeof value != "undefined";
        var fieldsString:string = JSON.stringify(fields);

        if(sendValue)
        {
            GameAnalytics.addDesignEventWithEventId(eventId, value, fieldsString);
        }
        else
        {
            GameAnalytics.addDesignEventWithEventId(eventId, fieldsString);
        }
    }

    public static addErrorEvent(severity:EGAErrorSeverity = EGAErrorSeverity.Undefined, message:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        GameAnalytics.addErrorEventWithSeverity(severity, message, fieldsString);
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
