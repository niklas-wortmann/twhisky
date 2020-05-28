import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SipComponent } from './sip.component';



@NgModule({
  declarations: [SipComponent],
  imports: [
    CommonModule
  ],
  exports: [SipComponent]
})
export class SipModule { }
