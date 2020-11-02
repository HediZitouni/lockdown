import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

import { FormsModule } from '@angular/forms';
import { AnswerComponent } from './answer/answer.component';
import { MancheComponent } from './manche/manche.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { PartieComponent } from './partie/partie.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    MancheComponent,
    AnswerFormComponent,
    PartieComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'connexion', component: ConnexionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
