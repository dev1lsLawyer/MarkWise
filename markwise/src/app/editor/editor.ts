import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  imports: [FormsModule],
  templateUrl: './editor.html',
  styleUrl: './editor.scss'
})
export class Editor {
  markdownContent: string = '';

  @Output() contentChange = new EventEmitter<string>();

  onContentChange() {
    this.contentChange.emit(this.markdownContent);
  }
}
