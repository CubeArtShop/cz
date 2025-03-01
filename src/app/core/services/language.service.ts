import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  // Перевіряємо, чи є доступ до localStorage
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Зберігає вибрану мову в localStorage
  setLanguage(language: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('selectedLanguage', language);
    }
    this.translate.use(language); // Використовуємо ngx-translate для зміни мови
  }

  // Отримує мову з localStorage, якщо вона є, інакше ставить мову за замовчуванням
  getLanguage(): string {
    if (this.isBrowser()) {
      return localStorage.getItem('selectedLanguage') || 'en'; // За замовчуванням англійська
    }
    return 'en'; // Якщо немає доступу до localStorage, повертаємо мову за замовчуванням
  }

  // Завантаження мови при старті додатку
  loadLanguage(): void {
    const language = this.getLanguage();
    this.translate.use(language); // Застосовуємо мову з localStorage
  }
}
