import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { reducer, usersKey} from './user.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersKey, reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserStoreModule { }
