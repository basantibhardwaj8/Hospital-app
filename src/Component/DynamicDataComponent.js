import React from 'react';
import Product from './Product';
import PostComponent from './PostComponent';

const DynamicDataComponent = ({ schemaType, data }) => {
  switch (schemaType) {
    case 'user':
      return <Product>schemaType={data}</Product>;
    case 'post':
      return <PostComponent>schemaType={data}</PostComponent>;
    default:
      return (
        <div>
          <p>unsupported schema type</p>
        </div>
      );
  }
};

export default DynamicDataComponent;
