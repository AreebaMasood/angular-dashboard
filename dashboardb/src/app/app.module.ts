import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/common/header/header.component';
import { NavbarComponent } from './modules/common/navbar/navbar.component';
import { SidebarComponent } from './modules/common/sidebar/sidebar.component';
import { FooterComponent } from './modules/common/footer/footer.component';
import { ButtonsComponent } from './modules/pages/ui-elements/buttons/buttons.component';
import { DropdownComponent } from './modules/pages/ui-elements/dropdown/dropdown.component';
import { TypographyComponent } from './modules/pages/ui-elements/typography/typography.component';
import { ChartjsComponent } from './modules/pages/charts/chartjs/chartjs.component';
import { BasictableComponent } from './modules/pages/tables/basictable/basictable.component';
import { BasicelementComponent } from './modules/pages/form-elements/basicelement/basicelement.component';
import { MidiiconComponent } from './modules/pages/icons/midiicon/midiicon.component';
import { LoginComponent } from './modules/pages/userpages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ButtonsComponent,
    DropdownComponent,
    TypographyComponent,
    
    ChartjsComponent,
    BasictableComponent,
    BasicelementComponent,
    MidiiconComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
