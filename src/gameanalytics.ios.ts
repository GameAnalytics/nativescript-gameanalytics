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

declare var GameAnalytics: any;
declare var NSDictionary: any;
declare var NSJSONSerialization: any;
declare var kNilOptions: any;
declare var NSData: any;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;

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
        GameAnalytics.configureSdkVersion("nativescript " + GameAnalyticsSDK.version);
        //GameAnalytics.configureGameEngineVersion("nativescript " + NATIVESCRIPT_VERSION);
        GameAnalytics.initializeWithGameKeyGameSecret(gameKey, gameSecret);
    }

    public static addBusinessEvent(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        GameAnalytics.addBusinessEventWithCurrencyAmountItemTypeItemIdCartTypeAutoFetchReceipt(currency, amount, itemType, itemId, cartType, false, fieldsDict);
    }

    public static addBusinessEventAndroid(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", receipt:string, signature:string, fields:{[id:string]: any} = {}): void
    {
        throw new Error("addBusinessEventAndroid is only supported on Android platform");
    }

    public static addBusinessEventIOS(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", receipt:string, fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        GameAnalytics.addBusinessEventWithCurrencyAmountItemTypeItemIdCartTypeReceipt(currency, amount, itemType, itemId, cartType, receipt, fieldsDict);
    }

    public static addBusinessEventAndAutoFetchReceiptIOS(currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", cartType:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        GameAnalytics.addBusinessEventWithCurrencyAmountItemTypeItemIdCartTypeAutoFetchReceipt(currency, amount, itemType, itemId, cartType, true, fieldsDict);
    }

    public static addResourceEvent(flowType:EGAResourceFlowType = EGAResourceFlowType.Undefined, currency:string = "", amount:number = 0, itemType:string = "", itemId:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        GameAnalytics.addResourceEventWithFlowTypeCurrencyAmountItemTypeItemId(flowType, currency, amount, itemType, itemId, fieldsDict);
    }

    public static addProgressionEvent(progressionStatus:EGAProgressionStatus = EGAProgressionStatus.Undefined, progression01:string = "", progression02:string = null, progression03:string = null, score?:number, fields:{[id:string]: any} = {}): void
    {
        var sendScore:boolean = typeof score != "undefined";
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        if(sendScore)
        {
            GameAnalytics.addProgressionEventWithProgressionStatusProgression01Progression02Progression03Score(progressionStatus, progression01, (progression02 && progression02.length > 0) ? progression02 : null, (progression03 && progression03.length > 0) ? progression03 : null, score, fieldsDict)
        }
        else
        {
            GameAnalytics.addProgressionEventWithProgressionStatusProgression01Progression02Progression03(progressionStatus, progression01, (progression02 && progression02.length > 0) ? progression02 : null, (progression03 && progression03.length > 0) ? progression03 : null, fieldsDict);
        }
    }

    public static addDesignEvent(eventId:string, value?:number, fields:{[id:string]: any} = {}): void
    {
        var sendValue:boolean = typeof value != "undefined";
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        if(sendValue)
        {
            GameAnalytics.addDesignEventWithEventIdValue(eventId, value, fieldsDict);
        }
        else
        {
            GameAnalytics.addDesignEventWithEventId(eventId, fieldsDict);
        }
    }

    public static addErrorEvent(severity:EGAErrorSeverity = EGAErrorSeverity.Undefined, message:string = "", fields:{[id:string]: any} = {}): void
    {
        var fieldsString:string = JSON.stringify(fields);
        var fieldsNSString = NSString.stringWithString(fieldsString);
        var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        var fieldsDict = NSJSONSerialization.JSONObjectWithData(fieldsData, kNilOptions, null);

        GameAnalytics.addErrorEventWithSeverityMessage(severity, message, fieldsDict);
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
        GameAnalytics.setCustomDimension01((dimension && dimension.length > 0) ? dimension : null);
    }

    public static setCustomDimension02(dimension:string = ""): void
    {
        GameAnalytics.setCustomDimension02((dimension && dimension.length > 0) ? dimension : null);
    }

    public static setCustomDimension03(dimension:string = ""): void
    {
        GameAnalytics.setCustomDimension03((dimension && dimension.length > 0) ? dimension : null);
    }

    public static setFacebookId(facebookId:string = ""): void
    {
        GameAnalytics.setFacebookId(facebookId);
    }

    public static setGender(gender:EGAGender = EGAGender.Undefined): void
    {
        switch(gender)
        {
            case EGAGender.Male:
                GameAnalytics.setGender("male");
                break;

            case EGAGender.Female:
                GameAnalytics.setGender("female");
                break;
        }
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
