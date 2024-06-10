import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartItems = useSelector((state)=> state.cart.cart );

    return (

    <div className='row justify-content-center align-items-center mx-auto'>  
     {
      cartItems.map((item)=>{
        return(
          <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.item.image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.item.title}</h5>
                <p className="card-text"></p>
                <p className="card-text"> 
                <small className="text-body-secondary">Last updated 3 mins ago</small></p>
                <p className="card-text"><small className="text-body-secondary">{item.quantity}</small></p>
              </div>
            </div>
          </div>
        </div>
        )
      })
    }

  

  </div>
  )
}

export default Checkout