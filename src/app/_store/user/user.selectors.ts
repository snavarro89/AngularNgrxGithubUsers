import { createFeatureSelector, createSelector } from "@ngrx/store"
import { usersKey, selectAll } from "./user.reducer"
import { UserState } from "./user.state"

export const selectUserState = createFeatureSelector<UserState>(
    usersKey
)

export const selectUsers = createSelector(selectUserState, selectAll)

export const selectUser = createSelector(selectUserState, (state: UserState) => state.selectedUser)
export const selectSearchUserName = createSelector(selectUserState, (state:UserState)=> state.searchUserName)