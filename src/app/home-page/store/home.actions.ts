import { Action } from '@ngrx/store';
import { ForecastSearchItem, Forecast } from 'src/app/forcast';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum HomeActionTypes {
  GetSearchOptions = '[Home] GetSearchOptions ',
  GetForecastData = '[Home] GetForecastData',
  SetCityItem = '[Home] SetCityItem',
  SaveSearchData = '[Home] SaveSearchData',
  SaveForecastData = '[Home] SaveForecastData',
  InitHomeData = '[Home] InitHomeData'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GetSearchOptions implements Action {
  readonly type = HomeActionTypes.GetSearchOptions;

  constructor(public payload: string) { }
}

export class GetForecastData implements Action {
  readonly type = HomeActionTypes.GetForecastData;

  constructor(public payload: string) { }
}

export class SetCityItem implements Action {
  readonly type = HomeActionTypes.SetCityItem;

  constructor(public payload: ForecastSearchItem) { }
}

export class SaveSearchData implements Action {
  readonly type = HomeActionTypes.SaveSearchData;

  constructor(public payload: ForecastSearchItem[]) { }
}


export class SaveForecastData implements Action {
  readonly type = HomeActionTypes.SaveForecastData;

  constructor(public payload: Forecast) { }
}

export class InitHomeData implements Action {
  readonly type = HomeActionTypes.InitHomeData;
}

export type HomeActions
  = GetSearchOptions
  | GetForecastData
  | SetCityItem
  | SaveSearchData
  | SaveForecastData
  | InitHomeData;
