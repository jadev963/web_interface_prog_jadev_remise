from book import Book

book1 = Book("Le petit prince", "Antoine de Saint Exupery", True)
book2 = Book("Corto Maltese", "Hugo Pratt", True)
book3 = Book("The Dokodo", "Myamoto Musashi", False)

print(book1.title, book1.author, book1.show_status())
print(book2.title, book2.author, book2.show_status())
print(book3.title, book3.author, book3.show_status())

book1.borrow()
book2.borrow()
book3.borrow()

book1.return_book()
book2.return_book()
book3.return_book()


