class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.booksBorrowed = [];
    }

    getBookBorrowed(book) {
        this.booksBorrowed.push(book);
    }


}

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }


}

class Library {
    constructor() {
        this.users = [];
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    getAllBooksBorrowed(user) {
        let msg = '';
        user.booksBorrowed.forEach((book,index) => {
            if(index == (user.booksBorrowed.length - 1)){
                msg += ' e ' + book.title;
            } else {
                msg += book.title;
            }
        })
        console.log(`O ${user.name} possui os seguintes livros ${msg}`);
    }
}

const library = new Library()

const user1 = new User('Caique', 16);
const user2 = new User('Pravel', 16);
const user3 = new User('Caurin', 16);

const book1 = new Book("Harry Potter and the sorcerer stone");
const book2 = new Book("Harry Potter and the chamber of secrets");
const book3 = new Book("Harry Potter and prizioner of azkabam ");

library.addUser(user1);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

user1.getBookBorrowed(book1);
user1.getBookBorrowed(book2);
user1.getBookBorrowed(book3);

library.getAllBooksBorrowed(user1);

console.log(library);