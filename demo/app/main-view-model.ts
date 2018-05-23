import { Observable } from 'tns-core-modules/data/observable';
import { GameAnalyticsSDK as GameAnalytics } from 'nativescript-gameanalytics';
import { isAndroid } from "platform";

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();

    GameAnalytics.setEnabledInfoLog(true);
    GameAnalytics.setEnabledVerboseLog(true);
    GameAnalytics.getCommandCenterSubscriber().subscribe(() =>{
        if(isAndroid)
        {
            android.util.Log.i("GameAnalytics", "test: " + GameAnalytics.getCommandCenterValueAsString("test", ""));
        }
        console.log("command centre updated: " + GameAnalytics.getConfigurationsContentAsString());
        console.log("test: " + GameAnalytics.getCommandCenterValueAsString("test", ""));
    });

    GameAnalytics.initialize("bd624ee6f8e6efb32a054f8d7ba11618", "7f5c3f682cbd217841efba92e92ffb1b3b6612bc");

    var fields = {
        "hello": "world",
        "test": 1234
    };
    GameAnalytics.addDesignEvent({
        eventId: "my:event",
        value: 666,
        fields: fields
    });
  }
}
