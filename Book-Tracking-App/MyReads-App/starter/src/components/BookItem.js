import "../App.css"


const BookItem=({bookInfo,shelves,updateState})=>{




  const handleUpdateState=(shelf)=>{

    updateState(bookInfo,shelf);
  }


    return (
        
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                        `url(${bookInfo.bgImageUrl})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select value={bookInfo.shelf} onChange={(event)=>{
                        handleUpdateState(event.target.value);


                    }}>
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option >None</option>
                      {
                        // creating an option for each shelf
                        shelves.map((shelf)=>{
                          
                          return(

                          <option value={shelf.shelfName}>{shelf.shelfDisplayName}</option>

                          )
                        })



                      }
                      
                      
                    </select>
                  </div>
                </div>
                <div className="book-title">{bookInfo.title}</div> 
                <div className="book-authors">{ 
                bookInfo.authors

                }</div>
              </div>
    )









}

export default BookItem;