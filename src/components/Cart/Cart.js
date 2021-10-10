import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let writerName=[];
    for(const writer of cart)
    {
        
        total+=writer.NetWorth;
        if(!writerName.includes(writer.Name)){
            writerName+=writer.Name+'__'; 
        }

        console.log(total);
        console.log(writerName);
    }
    return (
        <div>
            <h3>Author added:  {cart.length}</h3>
            <h3>Their Combined worth:  {total}</h3>
            <h3>Added Authors Names:  {writerName}
              
            </h3>
        </div>
    );
};

export default Cart;