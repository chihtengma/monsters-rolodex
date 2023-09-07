import { Component } from "react";

class SearchBox extends Component {
   render() {
      const { onSearchChange } = this.props;
      return (
         <form action="" className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" onChange={onSearchChange} />
            <button class="search-btn" type="submit">
               <span>Search</span>
            </button>
         </form>
      );
   }
}

export default SearchBox;
