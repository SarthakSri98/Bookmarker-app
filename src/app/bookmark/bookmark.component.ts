import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  bookmarks:any[];
  user : User;
  constructor( private _bookmarkService : BookmarkService) { }

  ngOnInit() {
     this.bookmarks = this._bookmarkService.getBookmarks();
  }
  urlPattern = "^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$";
  bookmarkForm = new FormGroup({
      name : new FormControl('',Validators.required),
      link : new FormControl('',[Validators.required,Validators.pattern(this.urlPattern)])
  });
  onSubmit(){
    this.user = this.bookmarkForm.value;
    this.bookmarkForm.reset();
  }
  addBookmark(){
      this.onSubmit();
      this.bookmarks.push({
        name:this.user.name,
        link:this.user.link
      });
      localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks));
      //console.log(this.bookmarks);
  }
  deleteBookmark(bookmark){
      var index = this.bookmarks.indexOf(bookmark);
      this.bookmarks.splice(index,1);
      localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks));
      console.log(this.bookmarks);
  }
}
