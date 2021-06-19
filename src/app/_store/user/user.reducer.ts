import { createEntityAdapter, EntityAdapter } from "@ngrx/entity"
import { User } from "../../_models/user.model"
import { initialState, UserState, userAdapter } from "./user.state"
import * as UserActions from "./user.actions"
import { createReducer, on, Action } from "@ngrx/store"

export const usersKey = "users"

const userReducer = createReducer(
    initialState, 
    on(UserActions.loadUsersSuccess, (state, action) => 
        userAdapter.addMany(action.users, state)
    ),
    on(UserActions.loadUsersFailure, (state, action) => ({
        ...state,
        error: action.error
        })
    ),
    on(UserActions.loadUserSuccess, (state, action) => ({
        ...state,
        selectedUser: action.selectedUser
        })
        
    ),
    on(UserActions.loadUserFailure, (state, action) => 
    ({
        ...state,
        error: action.error
        })
    ),
    on(UserActions.updateSearchQuery, (state, action) => ({
        ...state,
        searchUserName: action.userName
    })
    ),
    on(UserActions.updateUser, (state, action) => 
        userAdapter.updateOne({
            id: action.updatedUser.id,
            changes: action.updatedUser
        }, state)
    )
)

export function reducer(state: UserState | undefined, action: Action){
    return userReducer(state, action)
}

export const {
    selectIds, 
    selectEntities,
    selectAll, 
    selectTotal
} = userAdapter.getSelectors()