import { Dynamic } from './../../../model/dynamic.model';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss',
})
export class QuestionnaireComponent implements OnInit {
  dynamic: Dynamic | undefined;

  constructor(private service: QuestionsService) {}

  ngOnInit(): void {
    this.dynamicQuestions();
  }

  dynamicQuestions(): void {
    this.service.getDynamicQuestions().subscribe({
      next: (resp) => {
        console.log(454, resp);
        if (resp) {
          console.log(this.chooseRandomQuestions(resp, 3));
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  chooseRandomQuestions(jsonArray: any, count: number) {
    if (count >= jsonArray.length) {
      return jsonArray;
    }

    const shuffledArray = [...jsonArray];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray.slice(0, count);
  }
}
