import { Component } from "react";

class Card extends Component {
   render() {
      const { name, email, id } = this.props.monster;

      return (
         <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster ${name}`} />
            <h2 className="card-title">{name}</h2>
            <p className="card-email">{email}</p>
         </div>
      );
   }
}
export default Card;
