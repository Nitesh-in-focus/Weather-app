import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel binding

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 Add FormsModule here
  templateUrl: './top-nav.html',
  styleUrls: ['./top-nav.css'],
})
export class TopNav {
  @Input() recentCities: string[] = [];
  @Input() isDaytime: boolean = true;

  @Output() searchCity = new EventEmitter<string>();
  @Output() toggleTheme = new EventEmitter<boolean>();

  cityName: string = '';

  /**
   * 🔍 Emit trimmed search query
   */
  onSearch(): void {
    const trimmed = this.cityName.trim();
    if (trimmed.length) {
      this.searchCity.emit(trimmed);
      this.cityName = '';
    }
  }

  /**
   * 🌗 Emit theme toggle (true = light, false = dark)
   */
  onThemeToggle(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.toggleTheme.emit(!isChecked); // Because checked = dark mode ON
  }
}
