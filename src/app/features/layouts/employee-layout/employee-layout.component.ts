import { TitleCasePipe } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-employee-layout',
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './employee-layout.component.html',
  styles: ``
})
export class EmployeeLayoutComponent {

  isLargeScreen: boolean = window.innerWidth >= 1024; // 1024px es el breakpoint 'lg' en Tailwind
  isLoading = signal(false)

  constructor(private router: Router) { }


  ngOnInit() {
    this.updateScreenSize();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true)
      } else if (event instanceof NavigationEnd) {
        this.isLoading.set(false)
      }
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateScreenSize();
  }

  updateScreenSize() {
    this.isLargeScreen = window.innerWidth >= 1024;
  }
}
