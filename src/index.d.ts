export const enum EGAErrorSeverity
{
    Undefined = 0,
    Debug = 1,
    Info = 2,
    Warning = 3,
    Error = 4,
    Critical = 5
}

export const enum EGAGender
{
    Undefined = 0,
    Male = 1,
    Female = 2
}

export const enum EGAProgressionStatus
{
    Undefined = 0,
    Start = 1,
    Complete = 2,
    Fail = 3
}

export const enum EGAResourceFlowType
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

    static addBusinessEvent(args:{[id:string]: any}): void;

    static addBusinessEventAndroid(args:{[id:string]: any}): void;

    static addBusinessEventIOS(args:{[id:string]: any}): void;

    static addBusinessEventAndAutoFetchReceiptIOS(args:{[id:string]: any}): void;

    static addResourceEvent(args:{[id:string]: any}): void;

    static addProgressionEvent(args:{[id:string]: any}): void;

    static addDesignEvent(args:{[id:string]: any}): void;

    static addErrorEvent(args:{[id:string]: any}): void;

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

    static getCommandCenterValueAsString(key:string, defaultValue?:string): string;

    static isCommandCenterReady(): boolean;

    static getConfigurationsContentAsString(): string;

    static addCommandCenterListener(listener:() => void): void;

    static removeCommandCenterListener(listener:() => void): void;
}
