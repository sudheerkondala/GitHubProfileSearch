import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.components';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ContactComponent} from './components/pages/contact.component';
import {ProfileComponent} from './components/profile.component';
import {HttpModule} from '@angular/http';

import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing,HttpModule,FormsModule],
  declarations: [ AppComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent,
                  ProfileComponent,                
                  ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
