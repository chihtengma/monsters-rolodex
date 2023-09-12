const SearchBox = ({ onSearchChange }) => {
   return (
      <form action="" className="search-bar">
         <input type="search" name="search" pattern=".*\S.*" onChange={onSearchChange} placeholder="search monster" />
         <button className="search-btn" type="submit">
            <span>Search</span>
         </button>
      </form>
   );
};

export default SearchBox;
