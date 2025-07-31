import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
