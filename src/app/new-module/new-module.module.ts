import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page/second-page.component';
import { NewRoutingModule } from './new-routing.module';
import { MyHostListenerDirective } from '../my-host-listener.directive';



@NgModule({
  declarations: [
    SecondPageComponent,
    MyHostListenerDirective
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModuleModule { }
