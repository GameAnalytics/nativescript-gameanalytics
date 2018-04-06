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

export class GameAnalyticsSDK {

    // public functions
    static configureAvailableCustomDimensions01(customDimensions:Array<string>): void;

    static configureAvailableCustomDimensions02(customDimensions:Array<string>): void;

    static configureAvailableCustomDimensions03(customDimensions:Array<string>): void;

    static configureAvailableResourceCurrencies(resourceCurrencies:Array<string>): void;

    static configureAvailableResourceItemTypes(resourceItemTypes:Array<string>): void;

    static configureBuild(build:string): void;

    static configureUserId(uId:string): void;

    static initialize(gameKey:string, gameSecret:string): void;

    static addBusinessEvent(currency:string, amount:number, itemType:string, itemId:string, cartType:string, fields?:{[id:string]: any}): void;

    static addBusinessEventAndroid(currency:string, amount:number, itemType:string, itemId:string, cartType:string, receipt:string, signature:string, fields?:{[id:string]: any}): void;

    static addBusinessEventIOS(currency:string, amount:number, itemType:string, itemId:string, cartType:string, receipt:string, fields?:{[id:string]: any}): void;

    static addBusinessEventAndAutoFetchReceiptIOS(currency:string, amount:number, itemType:string, itemId:string, cartType:string, fields?:{[id:string]: any}): void;

    static addResourceEvent(flowType:EGAResourceFlowType, currency:string, amount:number, itemType:string, itemId:string, fields?:{[id:string]: any}): void;

    static addProgressionEvent(progressionStatus:EGAProgressionStatus, progression01:string, progression02?:string, progression03?:string, score?:number, fields?:{[id:string]: any}): void;

    static addDesignEvent(eventId:string, value?:number, fields?:{[id:string]: any}): void;

    static addErrorEvent(severity:EGAErrorSeverity, message:string, fields?:{[id:string]: any}): void;

    static setEnabledInfoLog(flag:boolean): void;

    static setEnabledVerboseLog(flag:boolean): void;

    static setEnabledManualSessionHandling(flag:boolean): void;

    static setCustomDimension01(dimension:string): void;

    static setCustomDimension02(dimension:string): void;

    static setCustomDimension03(dimension:string): void;

    static setFacebookId(facebookId:string): void;

    static setGender(gender:EGAGender): void;

    static setBirthYear(birthYear:number): void;

    static startSession(): void;

    static endSession(): void;
}
