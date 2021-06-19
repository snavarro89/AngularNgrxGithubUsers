import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserComponent } from './user.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserComponentModule {}
