import { EGAErrorSeverity, EGAGender, EGAProgressionStatus, EGAResourceFlowType } from './gameanalytics-enums';

declare var GameAnalytics: any;
declare var NSDictionary: any;
declare var NSJSONSerialization: any;
declare var kNilOptions: any;
declare var NSData: any;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var NSObject: any;

interface GACommandCenterDelegate
{
    onCommandCenterUpdated?(): void;
}

declare var GACommandCenterDelegate: {

	prototype: GACommandCenterDelegate;
};

export class GameAnalyticsSDK {
    private static version:string = "2.0.2";
    private static _onCommandCenterUpdated:Array<() => void> = new Array<() => void>();

    private static GACommandCenterDelegateImpl = class GACommandCenterDelegateImpl extends NSObject implements GACommandCenterDelegate
    {
        static ObjCProtocols = [GACommandCenterDelegate];

        static new(): GACommandCenterDelegateImpl {
            return <GACommandCenterDelegateImpl>super.new();
        }

        onCommandCenterUpdated(): void
        {
            GameAnalyticsSDK._onCommandCenterUpdated.forEach((listener) => {
                if(listener)
                {
                    listener();
                }
            });
        }
    };

    private static _commandCenterListener = new GameAnalyticsSDK.GACommandCenterDelegateImpl();

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
        GameAnalytics.setCommandCenterDelegate(GameAnalyticsSDK._commandCenterListener);
        GameAnalytics.configureSdkVersion("nativescript " + GameAnalyticsSDK.version);
        //GameAnalytics.configureGameEngineVersion("nativescript " + NATIVESCRIPT_VERSION);
        GameAnalytics.initializeWithGameKeyGameSecret(gameKey, gameSecret);
    }

    public static addBusinessEvent(args:{[id:string]: any}): void
    {
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        var cartType:string = args.hasOwnProperty("cartType") ? args["cartType"] : "";
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        GameAnalytics.addBusinessEventWithCurrencyAmountItemTypeItemIdCartTypeAutoFetchReceipt(currency, amount, itemType, itemId, cartType, false/*, fieldsDict*/);
    }

    public static addBusinessEventAndroid(args:{[id:string]: any}): void
    {
        throw new Error("addBusinessEventAndroid is only supported on Android platform");
    }

    public static addBusinessEventIOS(args:{[id:string]: any}): void
    {
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        var cartType:string = args.hasOwnProperty("cartType") ? args["cartType"] : "";
        var receipt:string = args.hasOwnProperty("receipt") ? args["receipt"] : "";
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        GameAnalytics.addBusinessEventWithCurrencyAmountItemTypeItemIdCartTypeReceipt(currency, amount, itemType, itemId, cartType, receipt/*, fieldsDict*/);
    }

    public static addBusinessEventAndAutoFetchReceiptIOS(args:{[id:string]: any}): void
    {
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        var cartType:string = args.hasOwnProperty("cartType") ? args["cartType"] : "";
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        GameAnalytics.addBusinessEventWithCurrencyAmountItemTypeItemIdCartTypeAutoFetchReceipt(currency, amount, itemType, itemId, cartType, true/*, fieldsDict*/);
    }

    public static addResourceEvent(args:{[id:string]: any}): void
    {
        var flowType:EGAResourceFlowType = args.hasOwnProperty("flowType") ? args["flowType"] : EGAResourceFlowType.Undefined;
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        GameAnalytics.addResourceEventWithFlowTypeCurrencyAmountItemTypeItemId(flowType, currency, amount, itemType, itemId/*, fieldsDict*/);
    }

    public static addProgressionEvent(args:{[id:string]: any}): void
    {
        var progressionStatus:EGAProgressionStatus = args.hasOwnProperty("progressionStatus") ? args["progressionStatus"] : EGAProgressionStatus.Undefined;
        var progression01:string = args.hasOwnProperty("progression01") ? args["progression01"] : "";
        var progression02:string = args.hasOwnProperty("progression02") ? args["progression02"] : null;
        var progression03:string = args.hasOwnProperty("progression03") ? args["progression03"] : null;
        var score:number = args.hasOwnProperty("score") ? args["score"] : undefined;
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        var sendScore:boolean = typeof score != "undefined";
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        if(sendScore)
        {
            GameAnalytics.addProgressionEventWithProgressionStatusProgression01Progression02Progression03Score(progressionStatus, progression01, (progression02 && progression02.length > 0) ? progression02 : null, (progression03 && progression03.length > 0) ? progression03 : null, score/*, fieldsDict*/)
        }
        else
        {
            GameAnalytics.addProgressionEventWithProgressionStatusProgression01Progression02Progression03(progressionStatus, progression01, (progression02 && progression02.length > 0) ? progression02 : null, (progression03 && progression03.length > 0) ? progression03 : null/*, fieldsDict*/);
        }
    }

    public static addDesignEvent(args:{[id:string]: any}): void
    {
        var eventId:string = args.hasOwnProperty("eventId") ? args["eventId"] : "";
        var value:number = args.hasOwnProperty("value") ? args["value"] : undefined;
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        var sendValue:boolean = typeof value != "undefined";
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        if(sendValue)
        {
            GameAnalytics.addDesignEventWithEventIdValue(eventId, value/*, fieldsDict*/);
        }
        else
        {
            GameAnalytics.addDesignEventWithEventId(eventId/*, fieldsDict*/);
        }
    }

    public static addErrorEvent(args:{[id:string]: any}): void
    {
        var severity:EGAErrorSeverity = args.hasOwnProperty("severity") ? args["severity"] : EGAErrorSeverity.Undefined;
        var message:string = args.hasOwnProperty("message") ? args["message"] : "";
        // var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        // var fieldsString:string = JSON.stringify(fields);
        // var fieldsNSString = NSString.stringWithString(fieldsString);
        // var fieldsData = fieldsNSString.dataUsingEncoding(NSUTF8StringEncoding);
        // var fieldsDict = NSJSONSerialization.JSONObjectWithDataOptionsError(fieldsData, kNilOptions, null);

        GameAnalytics.addErrorEventWithSeverityMessage(severity, message/*, fieldsDict*/);
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

    public static getCommandCenterValueAsString(key:string, defaultValue:string = null): string
    {
        return GameAnalytics.getCommandCenterValueAsStringDefaultValue(key, defaultValue);
    }

    public static isCommandCenterReady(): boolean
    {
        return GameAnalytics.isCommandCenterReady();
    }

    public static getConfigurationsContentAsString(): string
    {
        return GameAnalytics.getCommandCenterConfigurations();
    }

    public static addCommandCenterListener(listener:() => void): void
    {
        if(listener && GameAnalyticsSDK._onCommandCenterUpdated.indexOf(listener, 0) < 0)
        {
            GameAnalyticsSDK._onCommandCenterUpdated.push(listener);
        }
    }

    public static removeCommandCenterListener(listener:() => void): void
    {
        if(listener)
        {
            var index = GameAnalyticsSDK._onCommandCenterUpdated.indexOf(listener, 0);
            if(index > -1)
            {
                GameAnalyticsSDK._onCommandCenterUpdated.splice(index, 1);
            }
        }
    }
}
