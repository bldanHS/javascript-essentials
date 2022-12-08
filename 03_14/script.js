/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

class Book{
  constructor(
    title,
    pageNumbers,
    size,
    topic,
    readPages
  ){
    this.title = title;
    this.pageNumbers = pageNumbers;
    this.size = size;
    this.topic = topic;
    this.readPages = readPages;
  }
  read_some_pages(numOfPages)
  {
    this.numOfPages = numOfPages;
    const recentlyReadPages = this.readPages + numOfPages;
    this.readPages = recentlyReadPages;
    return recentlyReadPages;
  }
}

const book1 = new Book("Atomic Habits", 312, "medium", "self improvement", 15);
console.log(book1.numOfPages);
console.log(book1.readPages);
book1.read_some_pages(34);
console.log(book1.readPages);


const book2 = new Book("Egri Csillagok", 590, "big", "gy0ny0r", 0);
book2.read_some_pages(24);
console.log(book2.title, "is a pretty nice book, and it has", book2.pageNumbers, "pages.");
console.log("I've read", book2.readPages, "of it");
console.log(book2.size);
console.log(book2);




