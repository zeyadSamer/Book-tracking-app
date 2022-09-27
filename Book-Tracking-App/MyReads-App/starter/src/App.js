import "./App.css";

import { Route,Routes } from "react-router-dom";
import ShelvesView from "./components/ShelvesView";
import SearchView from "./components/SearchView";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI"

function App() {

 const shelves=[ {id:"1",shelfName:"read",shelfDisplayName:"Read"},
 {id:"2",shelfName:"currentlyReading",shelfDisplayName:"Currently reading"},
 {id:"3",shelfName:"wantToRead",shelfDisplayName:"Want to read"}
 
]
  

 const [books,setBooks]= useState([]);




 const updateState=async(book,newShelf)=>{
   book.shelf=newShelf;

   await BooksAPI.update(book, newShelf);
  
    setBooks([...books.filter((b) => b.id !== book.id), book]);
  
 }


  return (
    <Routes>
      <Route exact path="/" element={<ShelvesView key="shelves" shelves={shelves} updateState={updateState} />}/>

     <Route exact path="/search" element={<SearchView key="search-page" shelves={shelves} books={books} updateState={updateState}/>}/>


    </Routes>




   

  );
}

export default App;
