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
import { ValidateAnswersComponent } from './validate-answers/validate-answers.component';
import { ResultComponent } from './result/result.component';
import { ResultService } from './services/result.service';
import { ValidateSuggestionComponent } from './validate-suggestion/validate-suggestion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';

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
    SuggestionComponent,
    ValidateAnswersComponent,
    ResultComponent,
    ValidateSuggestionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: '', component: ConnexionComponent},
      {path: 'validation', component: ValidateSuggestionComponent},
      {path: 'suggestion', component: SuggestionComponent},
      {path: 'partie', component: PartieComponent},
      {path: 'room', component: RoomComponent},
      {path: 'validate-answers', component: ValidateAnswersComponent},
      {path: 'results', component: ResultComponent}

    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
