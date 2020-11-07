import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

import { AnswerComponent } from './answer/answer.component';
import { MancheComponent } from './manche/manche.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { PartieComponent } from './partie/partie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RoomComponent } from './room/room.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    MancheComponent,
    AnswerFormComponent,
    PartieComponent,
    ConnexionComponent,
    RoomComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ConnexionComponent},
      {path: 'suggestion', component: SuggestionComponent},
      {path: 'partie', component: PartieComponent},
      {path: 'room', component: RoomComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
