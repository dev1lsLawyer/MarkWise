import { Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'

@Component({
  selector: 'app-preview',
  imports: [MarkdownModule],
  templateUrl: './preview.html',
  styleUrl: './preview.scss'
})
export class Preview {
  @Input() content: string = '';
}
