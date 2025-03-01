import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  constructor(private languageService: LanguageService) { }

  // Метод для зміни мови
  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
}
