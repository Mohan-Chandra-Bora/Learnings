import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage, TournamentsPage, GamePage, StandingsPage, TeamDetailPage, TeamHomePage, TeamsPage } from '../pages/pages'
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    StandingsPage,
    TeamDetailPage,
    TeamHomePage,
    TeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    StandingsPage,
    TeamDetailPage,
    TeamHomePage,
    TeamsPage    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
