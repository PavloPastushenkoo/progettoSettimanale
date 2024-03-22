import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JambotronComponent } from './components/jambotron/jambotron.component';
import { MarksListComponent } from './components/marks-list/marks-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { FooterComponent } from './components/footer/footer.component';

import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { Route, Router, RouterModule } from '@angular/router';
import { AudiComponent } from './components/audi/audi.component';
import { CardMarcaComponent } from './components/card-marca/card-marca.component';
const route: Route[]= [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },
  {
    path: 'audi',
    component: AudiComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JambotronComponent,
    MarksListComponent,
    CarCardComponent,
    FooterComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    CardMarcaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
