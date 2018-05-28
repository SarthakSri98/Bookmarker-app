export class Init {
    load(){
        if( localStorage.getItem('bookmarks') === null || localStorage.getItem('bookmarks') === undefined )
        {
            console.log('No bookmarks found......generating bookmarks');
            var bookmarks = [
                      {'name': 'W3Schools','link':'https://www.w3schools.com/'},
                      {'name': 'MDN','link':'https://developer.mozilla.org/en-US/'},
                      {'name': 'Angular 6','link':'http://angular.io/'}
                        ];
            localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        }
        else
        console.log('Bookmarks found');
    }
}
