import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../_models/user.model';
import { UserStoreState, UserActions, UserSelectors} from '../_store/user';
import { usersKey } from '../_store/user/user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  public user$: Observable<User>
  public userNameSearch$: Observable<User>
  public userNameSearch: string = ""

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _store: Store<UserStoreState.UserState>) { }

  ngOnInit() {
    this.user$ = this._store.pipe(select(UserSelectors.selectUser))
    this._store.pipe(select(UserSelectors.selectSearchUserName)).subscribe(
        (userNameSearch) => {
          this.userNameSearch = userNameSearch
        }
    )
  }
  
  searchUser(event){
    this._store.dispatch(UserActions.updateSearchQuery({userName:this.userNameSearch}))
    this._store.dispatch(UserActions.loadUser())
  }

}
