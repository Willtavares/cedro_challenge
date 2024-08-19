import { Dynamic } from './../../../model/dynamic.model';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  AbstractControl,
  FormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Select } from '../../../model/select.model';
import { Fixed } from '../../../model/fixed.model';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { JsonPrettyPipe } from '../../../pipe/json-pretty.pipe';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    RadioButtonModule,
    ButtonModule,
    JsonPrettyPipe,
    FormsModule,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss',
})
export class QuestionnaireComponent implements OnInit {
  dynamic: Dynamic | any;
  fixed: Fixed | undefined;
  formGroup: FormGroup | any;

  treasureList: Select[] | undefined;
  foundsList: Select[] | undefined;
  actionsList: Select[] | undefined;
  genericList: Select[] | undefined;

  firstSubtitle = '';
  secondSubtitle = '';
  thirtySubtitle = '';
  fortySubtitle = '';

  constructor(private service: QuestionsService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dynamicQuestions();
    this.fixedQuestions();
  }

  createForm(): void {
    this.formGroup = new FormGroup(
      {
        question1: new FormControl(),
        question2: new FormControl(),
        question3: new FormControl(),
        optionTreasure: new FormControl(),
        optionsFounds: new FormControl(),
        optionActions: new FormControl(),
        optionGeneric: new FormControl(),
      },
      {
        validators: this.validateAllFieldsFilled,
      }
    );
  }

  validateAllFieldsFilled(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const fields = Object.values(control.value);
    const allFieldsFilled = fields.every((field) => !!field);

    return allFieldsFilled ? null : { fieldsNotFilled: true };
  }

  dynamicQuestions(): void {
    this.service.getDynamicQuestions().subscribe({
      next: (resp) => {
        this.dynamic = this.chooseRandomQuestions(resp, 3);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  fixedQuestions(): void {
    this.service.getFixedQuestions().subscribe({
      next: (resp) => {
        this.fixed = resp;
        this.firstSubtitle = this.fixed.items[0].subtitle;
        this.secondSubtitle = this.fixed.items[1].subtitle;
        this.thirtySubtitle = this.fixed.items[2].subtitle;
        this.fortySubtitle = this.fixed.items[3].subtitle;
        this.treasureList = this.fixed.items[0].options;
        this.foundsList = this.fixed.items[1].options;
        this.actionsList = this.fixed.items[2].options;
        this.genericList = this.fixed.items[3].options;
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

  saveData() {
    this.formGroup.reset();
    this.router.navigateByUrl('/thanks');
  }

  backRoute() {
    this.formGroup.reset();
    this.router.navigateByUrl('/');
  }
}
