import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoreModule } from './user/user-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserStoreModule,
  ]
})
export class RootStoreModule {}
