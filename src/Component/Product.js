import React from 'react'

const Product = ({user}) => {
  return (
    <div>
         <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Customer: {user.customer}</p>
        <h5>Customer Profile</h5>
        <p>ID: {user.customer_profile.id}</p>
        <p>Name: {user.customer_profile.name}</p> 
        <h3>color</h3>
        {user.color.map((color) => (
        <div key={color.id}>
          <p>{user.color.id}</p>
          <p>{user.color.email}</p>
          <p>{user.color.pincode}</p>
u          <p>{user.color.location_name}</p>
          <p>{user.color.type}</p>
          <p>{user.color.profile_pic}</p>
          <p>{user.color.gst}</p>
  
        </div>
        ))}
    </div>
    
  )
}

export default Product;
