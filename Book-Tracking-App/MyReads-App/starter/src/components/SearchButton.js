
import { Link } from "react-router-dom";
import "../App.css"

const SearchButton=()=>{

    return (
        
        <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    )

}

export default SearchButton;