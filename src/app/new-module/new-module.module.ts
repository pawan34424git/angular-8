import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page/second-page.component';
import { NewRoutingModule } from './new-routing.module';



@NgModule({
  declarations: [
    SecondPageComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModuleModule { }
