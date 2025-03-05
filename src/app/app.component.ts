import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MobileMenuComponent } from './core/components/mobile-menu/mobile-menu.component';

import { LanguageService } from './core/services/language.service';
import { MarqueeComponent } from './shared/components/marquee/marquee.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    MarqueeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  baseHref = environment.baseHref;
  title = 'cz';
  videoLoaded = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.loadLanguage();
  }



  // This method is triggered when the video is loaded
  onVideoLoaded() {
    this.videoLoaded = true;
  }
}
