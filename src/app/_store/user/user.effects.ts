import {Injectable} from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, mergeMap, catchError, withLatestFrom, tap } from "rxjs/operators"
import { UserService } from "../../_services/user.service"
import * as UserActions from "./user.actions"
import * as UserSelectors from "./user.selectors"
import * as UserStoreSate from  "./user.state"
import { of } from "rxjs"
import { Store } from "@ngrx/store"

@Injectable()
export class UserEffects {

    constructor(
        private _actions$: Actions, 
        private _userService: UserService, 
        private _store: Store<UserStoreSate.UserState>
    ){}
    
    loadUsers$ = createEffect(() =>
        this._actions$.pipe(
        ofType(UserActions.loadUsers),
        withLatestFrom(
            this._store.select(
                UserSelectors.selectUsers
            )
          ),
        mergeMap((users)=> {
            let perPage = 30
            let since = 0
            //TODO: How to get the array object of users for direct usage?
            if (users[1] && users[1].length>0){
                since = (users[1])[users[1].length-1].id
            }
            return this._userService.getUsers(perPage, since).pipe(
                map(users => UserActions.loadUsersSuccess({users})),
                catchError(error=> 
                    of(UserActions.loadUsersFailure({error})))
                )
                })
        )
    )

    loadUser$ = createEffect(() =>
        this._actions$.pipe(
        ofType(UserActions.loadUser),
        withLatestFrom(
            this._store.select(
                UserSelectors.selectSearchUserName
            )
          ),
        mergeMap(([_,searchUserName])=>
            this._userService.getUser(searchUserName).pipe(
                mergeMap((user)=> [
                    UserActions.updateUser({updatedUser:user}),
                    UserActions.loadUserSuccess({selectedUser: user})
                ]),
                catchError(error=> 
                    of(UserActions.loadUsersFailure({error})))
                ),
                
            )
        )
    )
}