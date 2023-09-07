import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchFields: ""
      };
      console.log("constructor");
   }

   componentDidMount() {
      console.log("componentDidMount");
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
         response.json().then((users) =>
            this.setState(() => {
               return { monsters: users };
            })
         )
      );
   }

   onSearchChange = (ev) => {
      const searchFields = ev.target.value.toLowerCase();
      this.setState(() => {
         return { searchFields };
      });
   };

   render() {
      console.log("render");

      const { monsters, searchFields } = this.state;
      const { onSearchChange } = this;

      const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchFields));

      return (
         <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>

            <SearchBox onSearchChange={onSearchChange} />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
