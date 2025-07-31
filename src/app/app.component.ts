import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesService } from '@shared/services/themes.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-employees';

  themeService = inject(ThemesService)
}
