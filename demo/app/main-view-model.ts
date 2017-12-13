import { Observable, EventData, PropertyChangeData } from 'data/observable';
import { Page } from 'ui/page';
import {
    GameAnalyticsSDK as GameAnalytics,
    EGAResourceFlowType,
    EGAProgressionStatus,
    EGAErrorSeverity,
    EGAGender
} from 'nativescript-gameanalytics';
import { isAndroid, isIOS } from "platform";

export class HelloWorldModel extends Observable {

    constructor(mainPage: Page) {
        super();
    }

    test() {
        console.log("Sending events...");
        GameAnalytics.setEnabledInfoLog(true);
        GameAnalytics.setEnabledVerboseLog(true);

        GameAnalytics.configureAvailableCustomDimensions01(["ninja", "samurai"]);
        GameAnalytics.configureAvailableCustomDimensions02(["whale", "dolphin"]);
        GameAnalytics.configureAvailableCustomDimensions03(["horde", "alliance"]);
        GameAnalytics.configureAvailableResourceCurrencies(["gold", "gems"]);
        GameAnalytics.configureAvailableResourceItemTypes(["boost", "lives"]);

        GameAnalytics.configureBuild("0.1.1");
        GameAnalytics.configureUserId("my_user_id");

        GameAnalytics.initialize("[INSERT_GAME_KEY]", "[INSERT_SECRET_KEY]");

        if(isAndroid)
        {
            GameAnalytics.addBusinessEventAndroid("USD", 100, "boost", "megaBoost", "shop", "<receipt>", "<signature>");
        }

        if(isIOS)
        {
            GameAnalytics.addBusinessEventIOS("USD", 100, "boost", "megaBoost", "shop", "<receipt>");
            GameAnalytics.addBusinessEventAndAutoFetchReceiptIOS("USD", 100, "boost", "megaBoost", "shop");
        }

        GameAnalytics.setCustomDimension01("ninja");
        GameAnalytics.setCustomDimension02("dolphin");
        GameAnalytics.setCustomDimension03("horde");

        GameAnalytics.setFacebookId("my_facebook");
        GameAnalytics.setGender(EGAGender.Female);
        GameAnalytics.setBirthYear(1982);

        GameAnalytics.addBusinessEvent("USD", 100, "boost", "megaBoost", "shop");
        GameAnalytics.addResourceEvent(EGAResourceFlowType.Sink, "gold", 10, "lives", "5lives");
        GameAnalytics.addProgressionEvent(EGAProgressionStatus.Start, "world1");
        GameAnalytics.addProgressionEvent(EGAProgressionStatus.Start, "world1", "", "", 100);
        GameAnalytics.addProgressionEvent(EGAProgressionStatus.Start, "world1", "level1");
        GameAnalytics.addProgressionEvent(EGAProgressionStatus.Start, "world1", "level1", "", 100);
        GameAnalytics.addProgressionEvent(EGAProgressionStatus.Start, "world1", "level1", "boss1");
        GameAnalytics.addProgressionEvent(EGAProgressionStatus.Start, "world1", "level1", "boss1", 100);
        GameAnalytics.addDesignEvent("design:event");
        GameAnalytics.addDesignEvent("design:event", 10);
        GameAnalytics.addErrorEvent(EGAErrorSeverity.Critical, "This is a message!!");
        GameAnalytics.addErrorEvent(EGAErrorSeverity.Debug, "This is a message!!");
        GameAnalytics.addErrorEvent(EGAErrorSeverity.Error, "This is a message!!");
        GameAnalytics.addErrorEvent(EGAErrorSeverity.Info, "This is a message!!");
        GameAnalytics.addErrorEvent(EGAErrorSeverity.Warning, "This is a message!!");
    }
}
