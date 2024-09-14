import { toast } from 'react-hot-toast';


const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

const saveBook = (book) => {
    const books = getBooks();
    const isExist = books.find(b => b.bookId == book.bookId);

    if (isExist) {
        return toast.error("You have already Read this book!", {
            style: {
                padding: '20px',
                background: '#F5F7F8'
            }
        });
    }

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Books added to Readlist!", {
        style: {
            padding: '20px',
            background: '#F5F7F8'
        }
    })
}

// handle read end

const getWhislistBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem("wishlists");
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

const saveWhislistBooks = (book) => {
    const wishlishtBooks = getWhislistBooks();
    const books = getBooks();

    const isExist = books.find(b => b.bookId == book.bookId);
    const isExistWish = wishlishtBooks.find(b => b.bookId == book.bookId);

    if(isExist){
        return toast.error("You already Read this Book!");
    }
    if(isExistWish){
        return toast.error("You have already added to wishlist");
    }

    wishlishtBooks.push(book);
    localStorage.setItem("wishlists", JSON.stringify(wishlishtBooks));
    toast.success("Added to Wishlist!");

}


export { saveBook, getBooks, saveWhislistBooks, getWhislistBooks };