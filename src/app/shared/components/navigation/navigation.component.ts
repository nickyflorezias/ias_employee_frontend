import { Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { Employee } from '../../../features/employee/interfaces/employee.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,

  ],
  templateUrl: './navigation.component.html',
  styles: ``
})
export class NavigationComponent {

  activatedRoute = inject(ActivatedRoute)

  currentPage = input<number>(1);
  pages = input<number>(0)

  activatedPage = linkedSignal(this.currentPage)

  getPagesList = computed(() => {
    return Array.from({
      length: this.pages()
    }, (_, i) => i + 1)
  })
}
