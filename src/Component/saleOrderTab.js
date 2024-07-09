import React from 'react';

const SaleOrderTab = ({ activeTab, setActiveTab }) => {
  return (
    <div className='Sale-order-tabs'>
      <button className={activeTab === 'active' ? 'active-tab' : ''} onClick={() => setActiveTab('active')}>Active Orders</button>
      <button className={activeTab === 'completed' ? 'active-tab' : ''} onClick={() => setActiveTab('completed')}>Completed Orders</button>
    </div>
  );
};

export default SaleOrderTab;
