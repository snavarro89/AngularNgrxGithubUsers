import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/_models/user.model';
import { UserActions, UserStoreState } from 'src/app/_store/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() userList: User[]

  @Output()
  addMoreUsers = new EventEmitter<any>();
  
  constructor(private _store: Store<UserStoreState.UserState>,
    private _router: Router) { }

  ngOnInit() {}

  loadData(event) {
    this.addMoreUsers.emit({})
    event.target.complete();
  }

  loadUser(login){
    this._store.dispatch(UserActions.updateSearchQuery({userName:login}))
    this._store.dispatch(UserActions.loadUser())
    this._router.navigateByUrl("tabs/tab2");
  }

  

}
