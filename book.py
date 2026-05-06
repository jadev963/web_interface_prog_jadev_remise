class Book:
    def __init__(self,title, author, available = True):
        self.title = title
        self.author = author
        self.available = available

    def show_status(self):
        if self.available:
            return("Available")
        else:
            return("Not available")
        
    def borrow(self):
        if self.available:
            self.available = False
            print("Book borrowed")
        else:
            print("Book already borrwed")
            
        
    def return_book(self):
        if self.available == False:
            self.available = True
            print("Book returned")
        else: print("Book available")
            
    def display_info(self):
        print(f"{self.book.title}, {self.book.author}")