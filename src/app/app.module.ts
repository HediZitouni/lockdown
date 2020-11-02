import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

import { FormsModule } from '@angular/forms';
import { AnswerComponent } from './answer/answer.component';
import { MancheComponent } from './manche/manche.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { PartieComponent } from './partie/partie.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    MancheComponent,
    AnswerFormComponent,
    PartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
