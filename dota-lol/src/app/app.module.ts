import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {SkeletonModule} from 'primeng/skeleton';
import {DividerModule} from 'primeng/divider';

import { HomeComponent } from './pages/home/home.component';
import { DotaComponent } from './pages/dota/dota.component';
import { LolComponent } from './pages/lol/lol.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DotaComponent,
    LolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    SkeletonModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
