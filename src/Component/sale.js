import React, { useState } from 'react';
import SaleOrderTab from './saleOrderTab'; // Import SaleOrderTab component
import SaleOrder from './SaleOrder'; // Import SaleOrder component

const Sale = () => {
    const [activeTab, setActiveTab] = useState(true); // Change initial state to boolean
    const orders = [
        {
            "customer_id": 11908,
            "items": [
                {
                    "sku_id": 220,
                    "price": 12,
                    "quantity": 12
                }
            ],
            "paid": false,
            "invoice_no": "lnvoice-1212121",
            "invoice_date": "7/5/2024"
        }
    ];

    return (
        <div className='Sale-orders'>
            <h1>saleOrders</h1>
            <SaleOrderTab activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab ? <SaleOrder orders={orders} status="active" /> : <SaleOrder orders={orders} status="completed" />}
        </div>
    );
}

export default Sale;
