import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { ThemesService } from '@shared/services/themes.service';

@Component({
  selector: 'navbar',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { 
  authService = inject(AuthService)
  themeService = inject(ThemesService)
}
