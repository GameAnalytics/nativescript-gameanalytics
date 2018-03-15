import { Observable } from 'tns-core-modules/data/observable';
import { GameAnalyticsSDK as GameAnalytics } from 'nativescript-gameanalytics';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();

    GameAnalytics.setEnabledInfoLog(true);
    GameAnalytics.setEnabledVerboseLog(true);

    GameAnalytics.initialize("GAME_KEY", "SECRET_KEY");
  }
}
