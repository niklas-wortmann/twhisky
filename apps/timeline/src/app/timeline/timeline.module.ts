import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { SipModule } from './sip/sip.module';

export const TimelineRoutes: Routes = [
  {
    path: '',
    component: TimelineComponent,
  },
];

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, RouterModule.forChild(TimelineRoutes), SipModule],
})
export class TimelineModule {}
