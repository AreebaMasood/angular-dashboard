import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ChartjsComponent } from './modules/pages/charts/chartjs/chartjs.component';
import { BasicelementComponent } from './modules/pages/form-elements/basicelement/basicelement.component';
import { MidiiconComponent } from './modules/pages/icons/midiicon/midiicon.component';
import { BasictableComponent } from './modules/pages/tables/basictable/basictable.component';
import { ButtonsComponent } from './modules/pages/ui-elements/buttons/buttons.component';
import { DropdownComponent } from './modules/pages/ui-elements/dropdown/dropdown.component';
import { TypographyComponent } from './modules/pages/ui-elements/typography/typography.component';
import { LoginComponent } from './modules/pages/userpages/login/login.component';


const approutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'basicelement', component: BasicelementComponent },
  { path: 'chartjs', component: ChartjsComponent },
  { path: 'basictable', component: BasictableComponent },
  { path: 'midiicon', component: MidiiconComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
