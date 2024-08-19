import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss',
})
export class ThanksComponent {
  /**
   *
   */
  constructor(private router: Router) {}

  backRoute() {
    this.router.navigateByUrl('/');
  }
}
