class BookClub {
  library;
  books = [];
  members = [];
  constructor(library) {
    this.library = library;
  }

  addBook(title, author) {
    let existingBook = this.books.find(
      (book) => book.title == title && book.author == author
    );

    if (existingBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    }

    this.books.push({ title, author });
    return `The book "${title}" by ${author} has been added to ${this.library} library.`;
  }

  addMember(memberName) {
    let existingMember = this.members.includes(memberName);

    if (existingMember) {
      return `Member ${memberName} is already a part of the book club.`;
    }

    this.members.push(memberName);
    return `Member ${memberName} has been joined to the book club.`;
  }

  assignBookToMember(memberName, bookTitle) {
    if (!this.members.includes(memberName)) {
      throw new Error(`Member ${memberName} not found.`);
    }

    let wantedBookIndex = this.books.findIndex(
      (book) => book.title === bookTitle
    );

    if (wantedBookIndex == -1) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    let assignedBook = this.books.splice(wantedBookIndex, 1)[0];
    return `Member ${memberName} has been assigned the book "${bookTitle}" by ${assignedBook.author}.`;
  }

  generateReadingReport() {
    if (this.members.length == 0) {
      return `No members in the book club.`;
    }

    if (this.books.length == 0) {
      return `No available books in the library.`;
    }

    let report = `Available Books in ${this.library} library:\n`;
    this.books.forEach((book) => {
      report += `"${book.title}" by ${book.author}\n`;
    });

    return report.trim();
  }
}

/*________TESTS___________*/
const myBookClub = new BookClub("The Bookaholics");
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
