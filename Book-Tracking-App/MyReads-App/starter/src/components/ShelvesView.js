import "../App.css"

import Heading from "./Heading";
import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";

const ShelvesView=({shelves,updateState})=>{


  


    return(
        <div className="app">
        <div className="list-books">
          <Heading key="heading-title"/>
          <div className="list-books-content">
            <div>
              <BookShelf key={"shelf"+shelves[0].id} shelfTitle={"read"} viewTitle={"Read"} shelves={shelves} updateState={updateState}/>
              <BookShelf key={"shelf"+shelves[1].id} shelfTitle={"wantToRead"} viewTitle={"Want to read"} shelves={shelves} updateState={updateState}/>
              <BookShelf key={"shelf"+shelves[2].id} shelfTitle={"currentlyReading"} viewTitle={"Currently reading"} shelves={shelves} updateState={updateState}/>  
            </div>
          </div>
          <SearchButton key="search-button"/>
        </div>
    </div>

    )
}

export default ShelvesView;