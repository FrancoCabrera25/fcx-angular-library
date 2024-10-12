import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-admin-layouts',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideMenuComponent],
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutsComponent {

  isAuthenticated = signal(false);


  onLogin(): void {
    this.isAuthenticated.set(false);
  }

  onLogout(): void {
    this.isAuthenticated.set(true);
  }
}
