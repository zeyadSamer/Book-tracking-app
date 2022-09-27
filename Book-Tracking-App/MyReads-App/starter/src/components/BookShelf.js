
import "../App.css";
import BookItem from "./BookItem";
import * as BooksApi from "../BooksAPI"
import { useEffect, useState } from "react";


// takes also books array to  be showed in UI


const BookShelf=({shelfTitle,viewTitle,shelves,updateState})=>{





const [allBooks,setAllBooks]=useState([]);

  //fetch books from given shelf 

   const getAllBooks=async()=>{

    let books= await BooksApi.getAll();

    setAllBooks(books);
    
   }


   
   useEffect(
     ()=>{
        getAllBooks();
      
     }
   ,[allBooks]);
 


   const handleUpdateState=(bookInfo,shelf)=>{

  updateState(bookInfo,shelf)



}


 

    return(

        <div className="bookshelf">
        <h2 className="bookshelf-title">{viewTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
            
            allBooks.filter((book)=>book.shelf === shelfTitle).map((shelfBook)=>{
                let bookInfo={ id:shelfBook.id,
                  title:shelfBook.title,
                  authors:shelfBook.authors,
                  bgImageUrl:shelfBook.imageLinks.thumbnail,
                  shelf:shelfBook.shelf


                }
                handleUpdateState(bookInfo,bookInfo.shelf);

                return (
                  <li>

                  <BookItem key={shelfBook.id} bookInfo={bookInfo} shelves={shelves} updateState={updateState}/>
                  </li>

                )

              })


            }

          </ol>
        </div>
      </div>


    )







}

export default BookShelf;