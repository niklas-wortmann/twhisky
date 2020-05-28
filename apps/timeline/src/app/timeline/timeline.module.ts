import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';

export const TimelineRoutes: Routes = [{
  path: '',
  component: TimelineComponent
}]; 

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TimelineRoutes)
  ]
})
export class TimelineModule { }
