import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
   const [searchField, setSearchField] = useState("");
   const [monsters, setMonsters] = useState([]);
   const [filteredMonsters, setFilteredMonsters] = useState(monsters);

   console.log("rendered");

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
         response.json().then((users) => setMonsters(users))
      );
   }, []);

   useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));

      setFilteredMonsters(newFilteredMonsters);
   }, [monsters, searchField]);

   const onSearchChange = (event) => {
      event.preventDefault();
      const searchFieldString = event.target.value.toLowerCase();

      setSearchField(searchFieldString);
   };

   return (
      <div className="App">
         <h1 className="app-title">Monsters Rolodex</h1>
         <SearchBox onSearchChange={onSearchChange} />
         <CardList monsters={filteredMonsters} />
      </div>
   );
};

export default App;
