import { TitleCasePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { ThemesService } from '@shared/services/themes.service';

@Component({
  selector: 'sidebar',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe
  ],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  isLoading = input(false)

  authService = inject(AuthService)
  themeService = inject(ThemesService)
}
