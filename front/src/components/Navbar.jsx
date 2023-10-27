import SearchBar from "./SearchBar";

function Navbar ({onSearch}) {
  return(
    <div>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}


export default Navbar;