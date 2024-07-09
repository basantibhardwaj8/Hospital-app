import React from 'react'
import DynamicDataComponent from './DynamicDataComponent'

const products = () => {
    const productuser={
"id":9,
"customer":11908,
"customer_profile":{
    "id":11908,
    "name":"Ram",
    "color":[
        182,
        73,
        99
    ],
    "email":"jesus_christ@churuch.com",
    "pincode":"Mumbai",
    "location_name":"Mumbai,Maharashtra,India",
    "type":"c",
    "profile_pic":null,
    "gst":""
}

    };
  return (
    <div>
      <DynamicDataComponent schemaType="Product" data={productuser}/>
      
    </div>
  )
}

export default products
