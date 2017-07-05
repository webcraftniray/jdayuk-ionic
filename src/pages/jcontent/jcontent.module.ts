import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JcontentPage } from './jcontent';

@NgModule({
  declarations: [
    JcontentPage,
  ],
  imports: [
    IonicPageModule.forChild(JcontentPage),
  ],
  exports: [
    JcontentPage
  ]
})
export class JcontentPageModule {}
