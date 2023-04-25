import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbTabsetModule,
  NbSidebarModule,
  NbLayoutModule,
  NbThemeModule,
  NbMenuModule,
  NbContextMenuModule,
  NbSelectModule,
  NbRouteTabsetModule,
} from "@nebular/theme";
import { CreationEtiquetteRoutingModule } from "./CreationEtiquette.routing.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TabsComponent } from "./tabs/tabs.component";
import { EtiquetteTabComponent } from "./tabs/EtiquetteTab/EtiquetteTab.component";
import { LabelService } from "./label.service";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LabeltHttpService } from "./labelHTTP.service";
import { DesignTabComponent } from "./tabs/design-tab/design-tab.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DragDrop2Component } from "./drag-drop2/drag-drop2.component";
import { DragDropService } from "./drag-drop.service";
@NgModule({
  imports: [
    FormsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    CreationEtiquetteRoutingModule,
    NbTabsetModule,
    NbSidebarModule,
    NbLayoutModule,
    NbThemeModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbContextMenuModule,
    NbSelectModule,
    CommonModule,
    FontAwesomeModule,
    DragDropModule,
  ],
  declarations: [
    TabsComponent,
    SidebarComponent,
    EtiquetteTabComponent,
    DesignTabComponent,
    DragDrop2Component,
  ],
  exports: [],
  providers: [LabelService, LabeltHttpService, DragDropService],
})
export class CreattionEtiquetteModule {}
