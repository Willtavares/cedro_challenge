import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule, CheckboxModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent implements OnInit {
  formGroup: FormGroup | any;

  /**
   *
   */
  constructor(private ref: DynamicDialogRef) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      accept: new FormControl<boolean | null>(null),
    });
  }

  endPage(): void {
    this.ref.close('close');
  }
}
