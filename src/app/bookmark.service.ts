import { Injectable } from '@angular/core';
import { Init } from './init';

@Injectable()
export class BookmarkService extends Init {
  
  constructor() { 
    super();
    console.log('Bookmark initialised...');
    this.load();
  }

  getBookmarks(){
    var bookmarks1 = JSON.parse(localStorage.getItem('bookmarks'));
    return bookmarks1;
  }
}
