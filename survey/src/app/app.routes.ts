import { Routes } from '@angular/router';
import { IntroComponent } from './surveys/page/intro/intro.component';
import { QuestionnaireComponent } from './surveys/page/questionnaire/questionnaire.component';
import { ThanksComponent } from './surveys/page/thanks/thanks.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'questions', component: QuestionnaireComponent },
  { path: 'thanks', component: ThanksComponent },
];
