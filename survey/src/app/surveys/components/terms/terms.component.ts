import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule, CheckboxModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent implements OnInit {
  formGroup: FormGroup | any;

  ngOnInit() {
    this.formGroup = new FormGroup({
      accept: new FormControl<string | null>(null),
    });
  }
}
