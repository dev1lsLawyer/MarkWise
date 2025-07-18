import { Component, signal } from '@angular/core';
import { Editor } from './editor/editor';
import { Preview } from './preview/preview';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [Editor, Preview, MatButtonModule, MatToolbarModule, MatSlideToggleModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


  protected readonly title = signal('markwise');

  markdown = '';
  previewContent = '';
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    document.body.classList.toggle('light-theme', !this.isDarkMode);
    localStorage.setItem('preferred-theme', this.isDarkMode ? 'dark' : 'light');
  }

  reloadPreview() {
    this.previewContent = this.markdown;
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

}
