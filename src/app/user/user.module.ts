import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserComponent } from './user.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [InAppBrowser]
})
export class UserComponentModule {}
