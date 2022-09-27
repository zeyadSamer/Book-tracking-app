import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../BooksAPI";
import BookItem from "./BookItem";





const SearchView=({shelves,updateState,books})=>{
 

  const [searchResults,setSearchResults]=useState([]);
  const [query,setQuery]=useState('');


  const searchBooks=async(query,maxResults)=>{

    let books= await BooksApi.search(query,maxResults);
    if(query==='')
    {
      setSearchResults([])
    }
    
 
    if(books!==undefined)
    {
     setSearchResults(books);
    }
   
  }

  useEffect(async()=>{

   
    searchBooks(query,100);
    
    return ()=>{

      setSearchResults([]);
      setQuery('');


    }

  },[query])




    

   const validatedBooks=searchResults.map(
     (result)=>{

      const myBook=books.filter((book)=>(book.id===result.id))[0];
       result.shelf=myBook?myBook.shelf:"none"


     return result;

     }
   );
  
    

    return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={query}
                placeholder="Search by title, author, or ISBN"
                onChange={(event)=>{setQuery(event.target.value)}}
              />
            </div>


          </div>
          <div className="search-books-results">
            <ol className="books-grid">
 {
  validatedBooks.length &&
  validatedBooks.map((result)=>{

    try{

      books.forEach(book => {
        if(result.id===book.id)
        {
          result.shelf=book.shelf
        }
        
        
      });
    

    let bookInfo={ id:result.id,
      title:result.title,
      authors:result.authors,
      bgImageUrl:result.imageLinks.thumbnail || result.imageLinks.smallThumbnail,
      shelf:result.shelf
      }
  
    return(
    <li>
    <BookItem key={bookInfo.id} bookInfo={bookInfo} shelves={shelves} updateState={updateState}/>
    </li>
    )
    } catch(err)
    {
      console.log(err)
    }

    


  })
    


}

            </ol>
          </div>
        </div>

      )
}

export default SearchView;