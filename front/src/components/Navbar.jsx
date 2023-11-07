import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar ({onSearch, logout }) {
  return(
    <div>
      <Link to='/home'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link>
      <SearchBar onSearch={onSearch}/>
      <button onClick={logout}>Logout</button>
    </div>
  )
}


export default Navbar;