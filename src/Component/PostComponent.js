import React from 'react';

const PostComponent = ({ user }) => {
  return (
    <div>
      <h2>Post Details</h2>
      <p>ID: {user.id}</p>
      <p>ID: {user.display_id}</p>
      <p>ID: {user.owner}</p>
      <p>ID: {user.name}</p>
      <p>ID: {user.category}</p>
      <p>ID: {user.characteristics}</p>
      <p>ID: {user.features}</p>
      <p>ID: {user.brand}</p>
      <h3>sku</h3>
      {user.sku.map((sku) => (
        <div key={sku.id}>
          <p>{sku.id}</p>
          <p>{sku.selling_price}</p>
          <p>{sku.max_retail_price}</p>
          <p>{sku.amount}</p>
          <p>{sku.unit}</p>
          <p>{sku.quantity_in_inventory}</p>
          <p>{sku.product}</p>
          <p>{sku.Update_on}</p>
          <p>{sku.adding_date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
