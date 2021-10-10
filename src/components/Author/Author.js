import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,faUser} from '@fortawesome/free-solid-svg-icons'
import './Author.css'

const Author = (props) => {
    const {img,Name,Age,PopularBook,NetWorth,BornIn}=props.card;
    const ShoppingIcon = <FontAwesomeIcon icon={faShoppingBag} />
    const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
  <div className='card'>
      <img src={img} alt="" />
      <div className="author-details">
      <h2>Name:  {Name} </h2>   
      <h4>Age:  {Age}</h4>
      <h4>Popular Book:  {PopularBook} </h4>
      <h3>Net Worth:  ${NetWorth} Million</h3>
      <h5>Born in:  {BornIn}</h5>
      <div className="icon">
      {userIcon}
      </div>
      <button onClick={()=> props.handleAddTOCart(props.card)} className="btn"> {ShoppingIcon} <strong>ADD</strong></button>  
     
      </div>
     
  </div>
       
    );
};

export default Author;

