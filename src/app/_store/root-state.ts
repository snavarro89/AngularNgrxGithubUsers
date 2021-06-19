import { UserStoreState } from "./user";

//If we were to have multiple stores this interface allows us to access each of them on the different components.
export interface RootState {
  userFeature: UserStoreState.UserState;
}