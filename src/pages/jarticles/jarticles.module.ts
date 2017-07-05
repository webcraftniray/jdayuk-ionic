import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JarticlesPage } from './jarticles';

@NgModule({
  declarations: [
    JarticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(JarticlesPage),
  ],
  exports: [
    JarticlesPage
  ]
})
export class JarticlesPageModule {}
