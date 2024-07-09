import React from 'react';

const SaleOrder = ({ orders, status }) => {
    const filteredOrders = orders.filter(order => order.status === status);
    
    return (
        <div className='sale-order-list'>
            <h2>{status === 'active' ? 'Active Orders' : 'Completed Orders'}</h2>
            <ul>
                {filteredOrders.map(order => (
                    <li key={order.id}>{order.ordersNumber}</li>
                ))}
            </ul>
        </div>
    );
};

export default SaleOrder;
