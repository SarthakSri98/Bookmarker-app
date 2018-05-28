import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookmarkService]
})
export class AppComponent {
  title = 'app';
}
