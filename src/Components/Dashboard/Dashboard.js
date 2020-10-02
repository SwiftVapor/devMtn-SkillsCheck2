import React from 'react'
import Product from '../Product/Product'

export default function Dashboard (props) {
    const mappedInventory = props.inventory.map((product, i)=>(
        <Product
            key={i}
            product={product}
            deleteFn={props.deleteFn}
            editFn={props.editFn}/>
    ))



    return (
        <div className= 'dashboard'>
            {/* <button onClick={() => console.log(props.inventory)} >Test</button> */}
            {/* {props.inventory} */}
        </div>
    )
}