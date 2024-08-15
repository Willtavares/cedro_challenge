import { Component } from '@angular/core';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TermsComponent } from '../../components/terms/terms.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ButtonModule, DynamicDialogModule],
  providers: [DialogService],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  show() {
    this.ref = this.dialogService.open(TermsComponent, {
      width: '40%',
      contentStyle: { overflow: 'auto' },
    });
  }
}
