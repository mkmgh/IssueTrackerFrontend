import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueViewComponent } from './issue-view/issue-view.component';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { SortByPipe } from './../sort-by.pipe';

import { FilterPipeModule } from 'ngx-filter-pipe';

import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { SocketService } from './../socket.service'

import { TrackerRouteGuardService } from './tracker-route-guard.service'

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule ,
    FilterPipeModule,
    NgxEditorModule,
    TooltipModule.forRoot(),
    RouterModule.forChild([
      {path:'dashboard',component:DashboardComponent, canActivate:[TrackerRouteGuardService]},
      {path:'issueDetails/:issueId',component:IssueViewComponent, canActivate:[TrackerRouteGuardService]}
    ])
  ],
  declarations: [DashboardComponent, IssueViewComponent, SortByPipe],
  providers:[TrackerRouteGuardService]
})
export class TrackerModule { }
