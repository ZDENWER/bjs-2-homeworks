class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.type = null,
        this.state = 100;
    }   

    fix() {
        this.state *= 1.5;
    }
    
    set state(stateAfterFix) {
        if (stateAfterFix > 100) {
            this._state = 100;
        } else if (stateAfterFix < 0) {
            this._state = 0;
        } else {
            this._state = stateAfterFix;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = 'magazine';   
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }   
}

class NovelBook extends Book {
    type = 'novel';
}

class FantasticBook extends Book {
    type = 'fantastic';
}

class DetectiveBook extends Book {
    type = 'detective';
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } else {
            console.log('Книга слишком потрепана')
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value){
            return this.books[i];
            }
        }
        return null;
    }

   /* giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName){
            return this.books.splice(i, 1)[0];
            }
        }
        return null;
      }*/
    
    giveBookByName(bookName){
        let bookIndex = this.books.findIndex(book =>book.name === bookName);
        if (bookIndex === -1) {
            return null;
        } else {
            return this.books.splice(bookIndex, 1)[0];
        }
    }
}


