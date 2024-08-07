import React, { useContext, useState, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { id } = useParams(); // get order ID from URL params
  const context = useContext(myContext);
  const { loading, order } = context;
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = () => {
      const selectedOrder = order.find(o => o.id === id);
      setOrderDetails(selectedOrder);
    };

    fetchOrderDetails();
  }, [id, order]);

  if (loading) return <Loader />;

  return (
    <Layout>
      {orderDetails ? (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Order Details</h1>
          {/* Display order details */}
          <div className="bg-white p-4 rounded shadow-md">
            <p><strong>Order ID:</strong> {orderDetails.id}</p>
            <p><strong>Status:</strong> {orderDetails.status}</p>
            <div className="mt-4">
              {orderDetails.cartItems.map(item => (
                <div key={item.id} className="mb-4">
                  <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover" />
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <p>Price: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2 className='text-center text-2xl text-white'>Order not found</h2>
      )}
    </Layout>
  );
}

export default OrderDetails;
