import { Component, OnInit } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';

import { UserActions, UserSelectors, UserStoreState } from '../_store/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]>

  constructor(private _store: Store<UserStoreState.UserState>) { }

  ngOnInit() {
    this.users$ = this._store.pipe(select(UserSelectors.selectUsers))
    this.loadUsers()
  }

  loadUsers(){
    this._store.dispatch(UserActions.loadUsers())
  }

}
