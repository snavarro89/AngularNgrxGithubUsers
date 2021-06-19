import { createAction, props } from "@ngrx/store";
import { User } from "../../_models/user.model"


//User List
export const loadUsers = createAction(
    "[User List Component] Load Users"
)

export const loadUsersSuccess = createAction(
    "[User List Effect] Load Users Success",
    props<{users: User[]}>()
)

export const loadUsersFailure = createAction(
    "[User List Effect] Load Users Failure",
    props<{error: any}>()
)

//One User
export const loadUser = createAction(
    "[User Detail Component] Load User"
)

export const loadUserSuccess = createAction(
    "[User Detail Effect] Load Users Success",
    props<{selectedUser: User}>()
)

export const loadUserFailure = createAction(
    "[User Detail Effect] Load Users Failure",
    props<{error: any}>()
)

export const updateUser = createAction(
    "[User Detail Component] Update User",
    props<{updatedUser: User}>()
)

//Search User

export const updateSearchQuery = createAction(
    "[Search Bar] Update Search Username",
    props<{userName: string}>()
)

//TODO: Implement Reset Action
export const resetSearchQuery = createAction(
    "[Search Bar] Reset Search Username"
)

