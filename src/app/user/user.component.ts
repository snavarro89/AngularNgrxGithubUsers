import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../_models/user.model';
import { UserStoreState, UserActions, UserSelectors} from '../_store/user';
import { usersKey } from '../_store/user/user.reducer';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  public user$: Observable<User>
  public userNameSearch$: Observable<User>
  public userNameSearch: string = ""

  browserOptions: InAppBrowserOptions = {
    location: 'no',
    hidden: 'no',
    zoom: 'yes',
    hideurlbar: 'yes',
    toolbar: 'no',
    hidenavigationbuttons: 'yes',
};

  constructor(private _store: Store<UserStoreState.UserState>,
    private _inAppBrowser: InAppBrowser) { }

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

  openBlog(blog){
    //TODO: If the url comes with http instead of https it fails to load directly on the mobile app.
    const browser = this._inAppBrowser.create(blog, '_self', this.browserOptions)
    browser.show()
  }

}
