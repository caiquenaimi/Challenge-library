/* class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log( `Olá, meu nome é ${this.name} e tenho ${this.age} anos.` );
    }

    getAge() {
        console.log(this.age);
    }
}

const user1 = new User ('Caique', 16);
user1.introduce();

const user2 = new User ('Caurin', 16);
user2.introduce();
user2.getAge(); */

/* class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDesc() {
        return `Uma deliciosa pizza ${this.base}, com molho de ${this.sauce}, com cobertura de ${this.toppings} e com o queijo tipo ${this.cheese}`
    }

    getPriceBase() {
        if (this.base.toLowerCase() == 'traditional') {
            return 5;
        } else if (this.base.toLowerCase() == 'integral') {
            return 7;
        } else {
            return `Não trabalhamos com essa base: ${this.base}`;
        }
    }

    getPriceSauce() {
        if (this.sauce.toLowerCase() == 'tomato') {
            return 3;
        } else if (this.sauce.toLowerCase() == 'pezzo') {
            return 6;
        } else {
            return `Não trabalhamos com essa base: ${this.sauce}`;
        }
    }

    getPriceToppings() {
        if (this.toppings.toLowerCase() == 'pepperoni') {
            return 10;
        } else if (this.toppings.toLowerCase() == 'chicken') {
            return 9;
        } else {
            return `Não trabalhamos com essa base: ${this.toppings}`;
        }
    }

    getPriceCheese() {
        if (this.cheese.toLowerCase() == 'cheedar') {
            return 20;
        } else if (this.cheese.toLowerCase() == 'mozzarela') {
            return 7;
        } else {
            return `Não trabalhamos com essa base: ${this.cheese}`;
        }
    }

    getTotalPricePizza() {
        return this.getPriceBase() + this.getPriceSauce() + this.getPriceToppings() + this.getPriceCheese();
    }
}



const pizza1 = new Pizza('traditional', 'tomato', 'pepperoni', 'cheedar');

const pizza2 = new Pizza('integral', 'pezzo', 'chicken', 'mozzarela')

console.log(pizza1.getDesc());
console.log(pizza1.getTotalPricePizza());

console.log(pizza2.getDesc());
console.log(pizza2.getTotalPricePizza()); */

/* 
class Calculator {

    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calculator = new Calculator();

console.log(calculator.add(2,3));
console.log(calculator.multiply(9,3));
console.log(calculator.divide(10,2)); */
/* 
class Witch {
    constructor(name, patron, house, wand) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.wand = wand;
        this.spellLearned = [];
    }

    getName() {
        return `O nome do(a) bruxo(a) é ${this.name}`;
    }

    getPatron() {
        return `O nome do patrono é ${this.patron}`;
    }

    getHouse() {
        return `A casa do(a) bruxo(a) é ${this.house}`;
    }

    getWand() {
        return `A varinha do(a) bruxo(a) é ${this.wand}`;
    }

    getFullDescription() {
        return `O nome do(a) bruxo(a) é ${this.name}, seu patrono é ${this.patron}, sua casa é ${this.house} e sua varinha é ${this.wand}`
    }

    learnedASpell(spell) {
        this.spellLearned.push(spell);
    }


} */

/* const witch1 = new Witch('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring');
witch1.learnedASpell("Accio");
witch1.learnedASpell("Wingardium Leviosa");
witch1.learnedASpell("Expectro Patronum");
witch1.learnedASpell("Expelliarmus"); */

/* class TypeWitch extends Witch {
    constructor(name, patron, house, wand, typeWitch) {
        super(name, patron, house, wand);
        this.typeWitch = typeWitch.toUpperCase();
    }

    getTypeWitch() {
        if (this.typeWitch == 'M') {
            return `O tipo do(a) bruxo(a) é: ${this.typeWitch} - Meio Sangue`;
        } else if (this.typeWitch == 'P') {
            return `O tipo do(a) bruxo(a) é ${this.typeWitch} - Puro`
        } else {
            return `Não é um bruxo(a)`
        }
    }
} */

/* const witch2 = new TypeWitch('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring', 'M');

class ChamberOfSecret {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; */

/* metodo privado */
/*  this.checkPwd = (pwdInput) => {
     if (_pwd == pwdInput) {
         return true;
     } else {
         return false;
     }
 }
} */

/* metodo público */
/*  acessChamber(pwdInput) {
     if (this.checkPwd(pwdInput)) {
         return `Bem vindo(a) ${this.name} a camara secreta`;
     } else {
         return 'Senha incorreta';
     }
 }

 showName() {
     return this.name;
 }
}

const harry = new ChamberOfSecret('Harry Potter', 'abra')
console.log(harry.acessChamber('abra')); */


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.booksBorrowed = [];
    }
    getBookBorrowed(book) {
        this.booksBorrowed.push(book);
    }
    getBookByUser(){
        console.log(this.name);
        this.booksBorrowed.forEach(book => {
            console.log(book.title);
        });
    }
}

class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book) {
        this.users.push(book);
    } 
    addUser(user) {
        this.users.push(user);
    } 

}

const book1 = new Book('Harry Potter and the Sorcerer Stone', 'J.K Rowling', 264);
const book2 = new Book('Harry Potter and the Chamber of the Secrets', 'J.K Rowling', 285);
const book3 = new Book('Harry Potter and the Prisoner of Azkaban', 'J.K Rowling', 348);
const user1 = new User('Caique', 16);
const user2 = new User('Thiago', 24);
const user3 = new User('Felipe', 30);
const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addUser(user1);

user1.getBookBorrowed(book1);
user1.getBookBorrowed(book2);
user1.getBookBorrowed(book3);


user1.getBookByUser();

