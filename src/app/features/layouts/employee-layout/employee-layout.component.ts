import { TitleCasePipe } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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

  ngOnInit() {
    this.updateScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateScreenSize();
  }

  updateScreenSize() {
    this.isLargeScreen = window.innerWidth >= 1024;
  }
}
