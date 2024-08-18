import { Component } from '@angular/core';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TermsComponent } from '../../components/terms/terms.component';
import { Router } from '@angular/router';

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

  constructor(public dialogService: DialogService, private router: Router) {}

  show() {
    this.ref = this.dialogService.open(TermsComponent, {
      width: '40%',
      contentStyle: { overflow: 'auto' },
    });

    this.ref.onClose.subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('/thanks');
      }
    });
  }

  questions(): void {
    this.router.navigateByUrl('questions');
  }
}
