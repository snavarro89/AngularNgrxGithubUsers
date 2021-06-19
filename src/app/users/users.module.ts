import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { ReposDirective } from "../_directives/repos-directive.directive";


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserItemComponent,

    ReposDirective
  ],
  exports: [UsersComponent]
})
export class UsersComponentModule {}
