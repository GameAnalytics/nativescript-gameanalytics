import { EGAGender } from './gameanalytics-enums';
import { ISignal } from "strongly-typed-events";
export declare class GameAnalyticsSDK {
    private static version;
    private static _onCommandCenterUpdated;
    private static _commandCenterListener;
    static configureAvailableCustomDimensions01(customDimensions?: Array<string>): void;
    static configureAvailableCustomDimensions02(customDimensions?: Array<string>): void;
    static configureAvailableCustomDimensions03(customDimensions?: Array<string>): void;
    static configureAvailableResourceCurrencies(resourceCurrencies?: Array<string>): void;
    static configureAvailableResourceItemTypes(resourceItemTypes?: Array<string>): void;
    static configureBuild(build?: string): void;
    static configureUserId(uId?: string): void;
    static initialize(gameKey?: string, gameSecret?: string): void;
    static addBusinessEvent(args: {
        [id: string]: any;
    }): void;
    static addBusinessEventAndroid(args: {
        [id: string]: any;
    }): void;
    static addBusinessEventIOS(args: {
        [id: string]: any;
    }): void;
    static addBusinessEventAndAutoFetchReceiptIOS(args: {
        [id: string]: any;
    }): void;
    static addResourceEvent(args: {
        [id: string]: any;
    }): void;
    static addProgressionEvent(args: {
        [id: string]: any;
    }): void;
    static addDesignEvent(args: {
        [id: string]: any;
    }): void;
    static addErrorEvent(args: {
        [id: string]: any;
    }): void;
    static setEnabledInfoLog(flag?: boolean): void;
    static setEnabledVerboseLog(flag?: boolean): void;
    static setEnabledManualSessionHandling(flag?: boolean): void;
    static setCustomDimension01(dimension?: string): void;
    static setCustomDimension02(dimension?: string): void;
    static setCustomDimension03(dimension?: string): void;
    static setFacebookId(facebookId?: string): void;
    static setGender(gender?: EGAGender): void;
    static setBirthYear(birthYear?: number): void;
    static startSession(): void;
    static endSession(): void;
    static getCommandCenterValueAsString(key: string, defaultValue?: string): string;
    static isCommandCenterReady(): boolean;
    static getCommandCenterSubscriber(): ISignal;
}
