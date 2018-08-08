import * as app from "tns-core-modules/application";
import { EGAErrorSeverity, EGAGender, EGAProgressionStatus, EGAResourceFlowType } from './gameanalytics-enums';

declare var com: any;
declare var java: any;
const GameAnalytics:any = com.gameanalytics.sdk.GameAnalytics;

export class GameAnalyticsSDK {
    private static version:string = "1.1.8";
    private static _onCommandCenterUpdated:Array<() => void> = new Array<() => void>();

    private static CommandCenterListenerImpl = java.lang.Object.extend({
        interfaces: [com.gameanalytics.sdk.ICommandCenterListener],
        onCommandCenterUpdated: () => {
            console.log("onCommandCenterUpdated before");
            GameAnalyticsSDK._onCommandCenterUpdated.forEach((listener) => {
                if(listener)
                {
                    listener();
                }
            });
            console.log("onCommandCenterUpdated after");
        }
    });

    private static _commandCenterListener = new GameAnalyticsSDK.CommandCenterListenerImpl();

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
        GameAnalytics.addCommandCenterListener(GameAnalyticsSDK._commandCenterListener);
        GameAnalytics.configureSdkGameEngineVersion("nativescript " + GameAnalyticsSDK.version);
        //GameAnalytics.configureGameEngineVersion("nativescript " + NATIVESCRIPT_VERSION);
        GameAnalytics.initializeWithGameKey(app.android.startActivity, gameKey, gameSecret);
    }

    public static addBusinessEvent(args:{[id:string]: any}): void
    {
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        var cartType:string = args.hasOwnProperty("cartType") ? args["cartType"] : "";
        var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        var fieldsString:string = JSON.stringify(fields);

        GameAnalytics.addBusinessEventWithCurrency(currency, amount, itemType, itemId, cartType, fieldsString);
    }

    public static addBusinessEventAndroid(args:{[id:string]: any}): void
    {
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        var cartType:string = args.hasOwnProperty("cartType") ? args["cartType"] : "";
        var receipt:string = args.hasOwnProperty("receipt") ? args["receipt"] : "";
        var signature:string = args.hasOwnProperty("signature") ? args["signature"] : "";
        var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        var fieldsString:string = JSON.stringify(fields);

        GameAnalytics.addBusinessEventWithCurrency(currency, amount, itemType, itemId, cartType, receipt, "google_play", signature, fieldsString)
    }

    public static addBusinessEventIOS(args:{[id:string]: any}): void
    {
        throw new Error("addBusinessEventIOS is only supported on iOS platform");
    }

    public static addBusinessEventAndAutoFetchReceiptIOS(args:{[id:string]: any}): void
    {
        throw new Error("addBusinessEventAndAutoFetchReceiptIOS is only supported on iOS platform");
    }

    public static addResourceEvent(args:{[id:string]: any}): void
    {
        var flowType:EGAResourceFlowType = args.hasOwnProperty("flowType") ? args["flowType"] : EGAResourceFlowType.Undefined;
        var currency:string = args.hasOwnProperty("currency") ? args["currency"] : "";
        var amount:number = args.hasOwnProperty("amount") ? args["amount"] : 0;
        var itemType:string = args.hasOwnProperty("itemType") ? args["itemType"] : "";
        var itemId:string = args.hasOwnProperty("itemId") ? args["itemId"] : "";
        var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
        var fieldsString:string = JSON.stringify(fields);

        GameAnalytics.addResourceEventWithFlowType(flowType, currency, amount, itemType, itemId, fieldsString);
    }

    public static addProgressionEvent(args:{[id:string]: any}): void
    {
        var progressionStatus:EGAProgressionStatus = args.hasOwnProperty("progressionStatus") ? args["progressionStatus"] : EGAProgressionStatus.Undefined;
        var progression01:string = args.hasOwnProperty("progression01") ? args["progression01"] : "";
        var progression02:string = args.hasOwnProperty("progression02") ? args["progression02"] : "";
        var progression03:string = args.hasOwnProperty("progression03") ? args["progression03"] : "";
        var score:number = args.hasOwnProperty("score") ? args["score"] : undefined;
        var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
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

    public static addDesignEvent(args:{[id:string]: any}): void
    {
        var eventId:string = args.hasOwnProperty("eventId") ? args["eventId"] : "";
        var value:number = args.hasOwnProperty("value") ? args["value"] : undefined;
        var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
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

    public static addErrorEvent(args:{[id:string]: any}): void
    {
        var severity:EGAErrorSeverity = args.hasOwnProperty("severity") ? args["severity"] : EGAErrorSeverity.Undefined;
        var message:string = args.hasOwnProperty("message") ? args["message"] : "";
        var fields:{[id:string]: any} = args.hasOwnProperty("fields") ? args["fields"] : {};
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

    public static getCommandCenterValueAsString(key:string, defaultValue:string = null): string
    {
        return GameAnalytics.getCommandCenterValueAsString(key, defaultValue);
    }

    public static isCommandCenterReady(): boolean
    {
        return GameAnalytics.isCommandCenterReady();
    }

    public static getConfigurationsContentAsString(): string
    {
        return GameAnalytics.getConfigurationsContentAsString();
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
