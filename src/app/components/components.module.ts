import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModulesModule } from '../modules/modules.module';



@NgModule({
  declarations: [TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    ModulesModule
  ],
  exports:[
    TopbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
