import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar ({onSearch}) {
  return(
    <div>
      <Link to='/home'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}


export default Navbar;