import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Cart from '../Cart/Cart';
import './Authors.css'
const Authors = () => {

    const [cards,setCards]=useState([]);
    const [cart,setCart]=useState([]);


    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[]);

    
    const handleAddTOCart=writer=>{
        const newCart=[...cart,writer];
        return setCart(newCart);
    }


    return (
        <div className='Authors-container'>
           <div className='All-authors'>
               {
                   
                   cards.map(card=><Author key={card.key} handleAddTOCart={handleAddTOCart}   card={card}></Author>)
               }
            
           </div>
           <div>
              <Cart cart={cart}></Cart>
           </div>
        </div>
        
    );
};

export default Authors;