import React from 'react';

export default function Basket(props)
{
    const {cartItems,onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a,c)=>a + c.price*c.qty,0);

    return (
        <aside className='block col-1'>
        <h1>Cart Items</h1>
            <div>
                {cartItems.length===0 && <div>Cart is Empty</div>} 

                {cartItems.map((item) =>( 
                    <div key={item.id} className="row">
                    <div className='col-1'>{item.name}</div>
                    <div className='col-2'> 
                        <button onClick={()=>onAdd(item)} className="add"> + </button> &nbsp;
                        <button onClick={()=>onRemove(item)} className="remove"> - </button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} X {item.price}
                    </div>
                    </div>
                ))} 
            </div>
            {
                cartItems.length!==0 && (
            <>
            <div className='row'>
                    <div className='col-2 text-left'>Total</div>
                    <div className='col-1'>{itemPrice}</div>
            </div>
            </>

                ) 
            }

        </aside>
    )
}

