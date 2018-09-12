import { Action } from "@ngrx/store";
import { IUser } from "@core/interfaces/user.interface";
import { CONST_CACHE_NAME } from "@app/+core/contants";

// Initial state
export const userInitialState: IUser = {};

// Action names
export const USER_ONLINE = "[USUARIO] Online";
export const USER_OFFLINE = "[USUARIO] Offline";

// Action methods
export class UserOnline implements Action {
  readonly type = USER_ONLINE;
  constructor(public payload: IUser) { }
}
export class UserOffline implements Action {
  readonly type = USER_OFFLINE;
}

// Action types
export type Actions = UserOnline | UserOffline;

// Reducer
export function UserReducer(state: IUser = null, action: Actions) {

  if (state == null)
    state = JSON.parse(localStorage.getItem(CONST_CACHE_NAME)) as IUser;

  switch (action.type) {
    case USER_ONLINE:
      return { ...state, ...action.payload };
    case USER_OFFLINE:
      return userInitialState;
    default:
      return state;
  }

}